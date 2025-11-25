import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  getOrCreateClientId,
  saveAssistantTurn,
} from "../lib/assistantMemory";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type LangCode = string;

// ————— ТЕКСТОВЫЕ МЕТКИ —————

const normalizeLang = (lang: string | undefined | null): LangCode => {
  if (!lang) return "en";
  const short = lang.slice(0, 2).toLowerCase();
  if (["ru", "en", "de", "es"].includes(short)) return short;
  return "en";
};

const labelOpen: Record<LangCode, string> = {
  ru: "Спросить Mobil Truck",
  en: "Ask Mobil Truck",
  de: "Mobil Truck fragen",
  es: "Preguntar a Mobil Truck",
};

const labelTitle: Record<LangCode, string> = {
  ru: "Помощник Mobil Truck",
  en: "Mobil Truck Assistant",
  de: "Mobil Truck Assistent",
  es: "Asistente de Mobil Truck",
};

const labelSubtitle: Record<LangCode, string> = {
  ru: "Объясню структуру холдинга, роли и путь роста.",
  en: "I explain the holding structure, roles, and growth path.",
  de: "Ich erkläre Holding-Struktur, Rollen und Entwicklungsweg.",
  es: "Explico la estructura del holding, los roles y el camino de crecimiento.",
};

const labelPlaceholder: Record<LangCode, string> = {
  ru: "Задай вопрос о Mobil Truck…",
  en: "Ask a question about Mobil Truck…",
  de: "Stell eine Frage zu Mobil Truck…",
  es: "Haz una pregunta sobre Mobil Truck…",
};

const labelAsk: Record<LangCode, string> = {
  ru: "Спросить",
  en: "Ask",
  de: "Fragen",
  es: "Preguntar",
};

const labelError: Record<LangCode, string> = {
  ru: "Произошла ошибка. Попробуй ещё раз.",
  en: "An error occurred. Please try again.",
  de: "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.",
  es: "Ocurrió un error. Inténtalo de nuevo.",
};

const labelVoiceOut: Record<LangCode, string> = {
  ru: "Голосовой ответ",
  en: "Voice answer",
  de: "Sprachausgabe",
  es: "Respuesta con voz",
};

const labelVoiceSpeaking: Record<LangCode, string> = {
  ru: "Говорю…",
  en: "Speaking…",
  de: "Spreche…",
  es: "Hablando…",
};

const labelHintsTitle: Record<LangCode, string> = {
  ru: "Примеры вопросов:",
  en: "Example questions:",
  de: "Beispielfragen:",
  es: "Preguntas de ejemplo:",
};

const labelHintsList: Record<LangCode, string[]> = {
  ru: [
    "Как устроен холдинг Mobil Truck?",
    "Чем отличается партнёр от обычного водителя?",
    "Как водителю вырасти до партнёра?",
  ],
  en: [
    "How is the Mobil Truck holding structured?",
    "What is the difference between a partner and a regular driver?",
    "How can a driver grow to become a partner?",
  ],
  de: [
    "Wie ist der Mobil-Truck-Holding aufgebaut?",
    "Worin unterscheidet sich ein Partner von einem Fahrer?",
    "Wie kann ein Fahrer Partner werden?",
  ],
  es: [
    "¿Cómo está estructurado el holding Mobil Truck?",
    "¿En qué se diferencia un socio de un conductor normal?",
    "¿Cómo puede un conductor llegar a ser socio?",
  ],
};

// ————— УТИЛИТЫ —————

const pickLabel = <T,>(
  labels: Record<LangCode, T>,
  fallback: T,
  lang: LangCode
): T => {
  return labels[lang] ?? fallback;
};

const STORAGE_KEY_HISTORY = "mobiltruck_assistant_history_v2";
const STORAGE_KEY_VOICE = "mobiltruck_assistant_voice_out";

// Человеческий текст для ошибок распознавания речи
const getFriendlySpeechError = (rawCode: unknown, lang: LangCode): string => {
  const baseRu =
    "Не получилось услышать вопрос. Попробуй ещё раз, поближе к микрофону.";
  const baseEn =
    "I couldn't hear your question. Please try again, a bit closer to the microphone.";
  const baseDe =
    "Ich konnte deine Frage nicht verstehen. Versuch es bitte noch einmal, näher am Mikrofon.";
  const baseEs =
    "No pude escuchar bien tu pregunta. Inténtalo otra vez, un poco más cerca del micrófono.";

  const base =
    lang === "ru" ? baseRu : lang === "de" ? baseDe : lang === "es" ? baseEs : baseEn;

  const code = (rawCode ?? "").toString().toLowerCase();

  // Частые “нормальные” ситуации — даём мягкий текст
  if (["no-speech", "network", "aborted", "audio-capture"].includes(code)) {
    return base;
  }

  // Жёсткие блокировки/доступ
  if (["not-allowed", "service-not-allowed", "permission-denied"].includes(code)) {
    if (lang === "ru") {
      return "Браузер не разрешил доступ к микрофону. Проверь права и попробуй ещё раз.";
    }
    if (lang === "de") {
      return "Der Browser hat den Mikrofonzugriff blockiert. Bitte prüfe die Berechtigungen.";
    }
    if (lang === "es") {
      return "El navegador bloqueó el acceso al micrófono. Revisa los permisos.";
    }
    return "The browser blocked microphone access. Please check permissions.";
  }

  // Непонятная редкая ошибка — общий текст без тех. деталей
  return pickLabel(labelError, labelError.en, lang);
};

const AssistantWidget: React.FC = () => {
  const { language } = useLanguage();
  const lang: LangCode = normalizeLang(language);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [assistantReply, setAssistantReply] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [clientId, setClientId] = useState<string | null>(null);

  // --- Разблокировка звука на мобильных (iOS/Android) ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    const unlockAudio = () => {
      try {
        const a = new Audio();
        // попытка "пустого" проигрывания, чтобы браузер разрешил аудио
        a.play().catch(() => {});
      } catch {
        // ignore
      } finally {
        document.body.removeEventListener("click", unlockAudio);
      }
    };

    document.body.addEventListener("click", unlockAudio, { once: true });

    return () => {
      document.body.removeEventListener("click", unlockAudio);
    };
  }, []);

  // Инициализация clientId (анонимный пользователь для Firebase)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const id = getOrCreateClientId();
      setClientId(id);
    } catch {
      // ignore
    }
  }, []);

  // Загрузка последних сообщений и настроек голоса из localStorage
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const stored = window.localStorage.getItem(STORAGE_KEY_HISTORY);
      if (stored) {
        const parsed = JSON.parse(stored) as { messages?: ChatMessage[] };
        if (Array.isArray(parsed.messages)) {
          setMessages(parsed.messages);
          const lastAssistant = [...parsed.messages]
            .reverse()
            .find((m) => m.role === "assistant");
          if (lastAssistant) setAssistantReply(lastAssistant.content);
        }
      }
      const storedVoice = window.localStorage.getItem(STORAGE_KEY_VOICE);
      if (storedVoice === "1") {
        setVoiceOutputEnabled(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Сохраняем историю в localStorage (память между сессиями)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const limited = messages.slice(-40);
      window.localStorage.setItem(
        STORAGE_KEY_HISTORY,
        JSON.stringify({ messages: limited })
      );
    } catch {
      // ignore
    }
  }, [messages]);

  // Воспроизведение ответа голосом через Netlify-функцию ai-voice
  const speakWithOpenAI = async (text: string) => {
    if (!voiceOutputEnabled || !text.trim()) return;
    if (typeof window === "undefined") return;

    setIsSpeaking(true);
    try {
      const res = await fetch("/.netlify/functions/ai-voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          language: lang,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("TTS error:", errText);
        setError(pickLabel(labelError, labelError.en, lang));
        setIsSpeaking(false);
        return;
      }

      const data = await res.json();
      if (!data || !data.audio) {
        console.error("TTS error: empty audio response", data);
        setError(pickLabel(labelError, labelError.en, lang));
        setIsSpeaking(false);
        return;
      }

      const audioSrc = `data:audio/mpeg;base64,${data.audio}`;
      const audio = new Audio(audioSrc);
      audio.onended = () => setIsSpeaking(false);
      audio.onerror = () => {
        console.error("TTS audio playback error");
        setIsSpeaking(false);
      };
      audio.play().catch((err) => {
        console.error("TTS play error:", err);
        // Частая ситуация: блокировка автоплея
        const name = (err as any)?.name || "";
        if (
          name === "NotAllowedError" ||
          name === "NotSupportedError" ||
          name === "AbortError"
        ) {
          if (!error) {
            if (lang === "ru") {
              setError(
                "Браузер временно заблокировал звук. Нажми по экрану/кнопке и попробуй ещё раз."
              );
            } else if (lang === "de") {
              setError(
                "Der Browser hat die Audioausgabe blockiert. Tippe irgendwo auf die Seite und versuche es erneut."
              );
            } else if (lang === "es") {
              setError(
                "El navegador bloqueó el audio. Toca la pantalla y vuelve a intentarlo."
              );
            } else {
              setError(
                "The browser blocked audio playback. Tap the page and try again."
              );
            }
          }
        }
        setIsSpeaking(false);
      });
    } catch (err) {
      console.error("TTS runtime error:", err);
      setError(pickLabel(labelError, labelError.en, lang));
      setIsSpeaking(false);
    }
  };

  // Единая функция отправки сообщения (для текста и для голоса)
  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text };

    setIsLoading(true);
    setError(null);
    setInput("");

    const historyToSend = [...messages, userMessage];
    let replyText: string | null = null;

    try {
      const pagePath =
        typeof window !== "undefined" ? window.location.pathname : "/";

      const res = await fetch("/.netlify/functions/ai-domovoy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: historyToSend,
          language: lang,
          page: pagePath,
        }),
      });

      const data = await res.json();

      if (data && typeof data.reply === "string" && data.reply.trim()) {
        replyText = data.reply.trim();
      } else if (data && data.error) {
        console.error("ai-domovoy error:", data.error);
        setError(pickLabel(labelError, labelError.en, lang));
      }
    } catch (err) {
      console.error("ai-domovoy runtime error:", err);
      setError(pickLabel(labelError, labelError.en, lang));
    }

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content:
        replyText ??
        (lang === "ru"
          ? "Я пока не могу ответить на этот вопрос. Попробуй сформулировать по-другому."
          : "I cannot answer this question yet. Please try to rephrase it."),
    };

    const updatedMessages = [...historyToSend, assistantMessage];
    setMessages(updatedMessages);
    setAssistantReply(assistantMessage.content);
    setIsLoading(false);

    // Сохраняем ход диалога в Firebase (анонимно по clientId)
    if (clientId) {
      saveAssistantTurn(clientId, text, assistantMessage.content).catch(
        (err) => {
          console.error("saveAssistantTurn error:", err);
        }
      );
    }

    if (voiceOutputEnabled) {
      speakWithOpenAI(assistantMessage.content);
    }
  };

  // Сабмит по кнопке/Enter (ручной ввод)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  // Голосовой ввод (Web Speech API) — "свободные руки": сразу задаём вопрос и отправляем
  const startVoiceInput = () => {
    if (isLoading || isListening) return;
    if (typeof window === "undefined") return;

    const w: any = window as any;
    const SpeechRecognition =
      w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const extra =
        lang === "ru"
          ? "Голосовой ввод не поддерживается в этом браузере."
          : lang === "de"
          ? "Sprach­eingabe wird in diesem Browser nicht unterstützt."
          : lang === "es"
          ? "La entrada por voz no es compatible con este navegador."
          : "Voice input is not supported in this browser.";
      setError(extra);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang =
        lang === "ru"
          ? "ru-RU"
          : lang === "de"
          ? "de-DE"
          : lang === "es"
          ? "es-ES"
          : "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        const friendly = getFriendlySpeechError(event?.error, lang);
        setError(friendly);
        console.error("SpeechRecognition error:", event?.error, event);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: any) => {
        try {
          const result = event.results?.[0]?.[0];
          const transcript = result?.transcript as string | undefined;
          if (transcript && transcript.trim()) {
            // Режим "свободные руки": сразу отправляем голосовой вопрос
            sendMessage(transcript.trim());
          }
        } catch (err) {
          console.error("SpeechRecognition onresult error:", err);
        }
      };

      recognition.start();
    } catch (err) {
      setIsListening(false);
      console.error("SpeechRecognition runtime error:", err);
      setError(getFriendlySpeechError("runtime", lang));
    }
  };

  const currentHints = pickLabel(labelHintsList, labelHintsList.en, lang);

  const lastUserMessage =
    [...messages].reverse().find((m) => m.role === "user") || null;

  const toggleVoiceOutput = (checked: boolean) => {
    setVoiceOutputEnabled(checked);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY_VOICE, checked ? "1" : "0");
    }
  };

  return (
    <>
      {/* Кнопка открытия */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-emerald-700 transition"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
          AI
        </span>
        <span>{pickLabel(labelOpen, labelOpen.en, lang)}</span>
      </button>

      {/* Панель помощника */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-[320px] max-w-[90vw] rounded-2xl border border-zinc-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 bg-zinc-50/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-zinc-800">
                  {pickLabel(labelTitle, labelTitle.en, lang)}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-zinc-500">
                {pickLabel(labelSubtitle, labelSubtitle.en, lang)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 transition text-xs"
            >
              ✕
            </button>
          </header>

          {/* Область диалога: только последний вопрос и ответ, но со скроллом */}
          <div className="flex-1 px-3 py-2 space-y-2 bg-white max-h-64 overflow-y-auto">
            {error && (
              <div className="text-[11px] whitespace-pre-wrap rounded-xl bg-red-50 px-2 py-1 text-red-700">
                {error}
              </div>
            )}

            {lastUserMessage && (
              <div className="rounded-xl bg-zinc-100 px-3 py-2 text-xs text-zinc-900">
                <div className="text-[10px] font-semibold text-zinc-500 mb-0.5">
                  {lang === "ru"
                    ? "Ты"
                    : lang === "de"
                    ? "Du"
                    : lang === "es"
                    ? "Tú"
                    : "You"}
                </div>
                <div>{lastUserMessage.content}</div>
              </div>
            )}

            {assistantReply && (
              <div className="rounded-xl bg-white border border-zinc-200 px-3 py-2 text-xs text-zinc-900">
                <div className="text-[10px] font-semibold text-emerald-600 mb-0.5">
                  Mobil Truck AI
                </div>
                <div className="whitespace-pre-wrap">{assistantReply}</div>
              </div>
            )}

            {!lastUserMessage && !assistantReply && (
              <div className="rounded-xl bg-zinc-50 px-3 py-2 text-[11px] text-zinc-600">
                <div className="font-semibold mb-1">
                  {pickLabel(labelHintsTitle, labelHintsTitle.en, lang)}
                </div>
                <ul className="list-disc pl-4 space-y-0.5">
                  {currentHints.map((h, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-emerald-600"
                      onClick={() => setInput(h)}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Поле ввода и управление голосом */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-zinc-100 bg-white px-3 py-2 space-y-1"
          >
            <div className="flex items-end gap-1">
              <textarea
                className="flex-1 resize-none rounded-xl border border-zinc-200 px-2 py-1 text-xs outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200 max-h-20"
                rows={2}
                placeholder={pickLabel(
                  labelPlaceholder,
                  labelPlaceholder.en,
                  lang
                )}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="button"
                onClick={startVoiceInput}
                disabled={isLoading || isListening}
                className={`inline-flex items-center justify-center rounded-full px-2 py-2 text-xs border ${
                  isListening
                    ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                    : "border-zinc-300 text-zinc-500 bg-white hover:border-emerald-400 hover:text-emerald-600"
                } transition`}
                title={
                  lang === "ru"
                    ? "Задать вопрос голосом"
                    : lang === "de"
                    ? "Frage per Sprache stellen"
                    : lang === "es"
                    ? "Hacer pregunta por voz"
                    : "Ask question by voice"
                }
              >
                {isListening ? "🎙…" : "🎙"}
              </button>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition"
              >
                {isLoading ? "…" : pickLabel(labelAsk, labelAsk.en, lang)}
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="flex items-center gap-1 text-[11px] text-zinc-600">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-zinc-300"
                  checked={voiceOutputEnabled}
                  onChange={(e) => toggleVoiceOutput(e.target.checked)}
                />
                <span>
                  {pickLabel(labelVoiceOut, labelVoiceOut.en, lang)}
                  {isSpeaking
                    ? ` (${pickLabel(
                        labelVoiceSpeaking,
                        labelVoiceSpeaking.en,
                        lang
                      )})`
                    : ""}
                </span>
              </label>
              <span className="text-[10px] text-zinc-400">
                {lang === "ru"
                  ? "Ответы основаны на ИИ OpenAI"
                  : lang === "de"
                  ? "Antworten basieren auf OpenAI-KI"
                  : lang === "es"
                  ? "Respuestas basadas en IA de OpenAI"
                  : "Answers powered by OpenAI AI"}
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AssistantWidget;
