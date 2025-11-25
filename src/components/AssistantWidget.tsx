import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// Отдельное хранилище истории для Mobil Truck
const STORAGE_KEY = "mobiltruck_assistant_history_v1";

// Язык будем хранить как строку, чтобы не ловить ошибок типов
type LangCode = string;

// ————— ТЕКСТОВЫЕ МЕТКИ —————

const labelOpen: Record<LangCode, string> = {
  ru: "Спросить помощника",
  en: "Ask the assistant",
  de: "Assistent fragen",
  es: "Preguntar al asistente",
};

const labelTitle: Record<LangCode, string> = {
  ru: "Помощник Mobil Truck",
  en: "Mobil Truck Assistant",
  de: "Mobil-Truck-Assistent",
  es: "Asistente de Mobil Truck",
};

const labelSubtitle: Record<LangCode, string> = {
  ru: "Структура • сеть • партнёрство",
  en: "Structure • Network • Partnership",
  de: "Struktur • Netzwerk • Partnerschaft",
  es: "Estructura • Red • Asociación",
};

const labelIntroTitle: Record<LangCode, string> = {
  ru: "Я могу помочь с:",
  en: "I can help you with:",
  de: "Ich kann dir helfen mit:",
  es: "Puedo ayudarte con:",
};

const labelIntroDescription: Record<LangCode, string> = {
  ru: "Структура холдинга, роли, сеть компаний и модель дохода для партнёров и водителей.",
  en: "Holding structure, roles, company network and income model for partners and drivers.",
  de: "Holding-Struktur, Rollen, Unternehmensnetzwerk und Einkommensmodell für Partner und Fahrer.",
  es: "Estructura del holding, roles, red de empresas y modelo de ingresos para socios y conductores.",
};

const labelInputPlaceholder: Record<LangCode, string> = {
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

const labelListening: Record<LangCode, string> = {
  ru: "Слушаю… говори вопрос.",
  en: "Listening… say your question.",
  de: "Ich höre zu… stell deine Frage.",
  es: "Escuchando… di tu pregunta.",
};

const labelHintsTitle: Record<LangCode, string> = {
  ru: "О чём можно спросить:",
  en: "You can ask about:",
  de: "Du kannst fragen nach:",
  es: "Puedes preguntar sobre:",
};

const labelHintsList: Record<LangCode, string[]> = {
  ru: [
    "как устроен холдинг Mobil Truck",
    "какие уровни компаний есть в структуре",
    "как водителю вырасти до партнёра",
    "как работает процент 4% + 2% + 1%…",
  ],
  en: [
    "how the Mobil Truck holding is structured",
    "what company levels exist in the structure",
    "how a driver can grow to a partner",
    "how the 4% + 2% + 1%… network share works",
  ],
  de: [
    "wie der Mobil-Truck-Holding aufgebaut ist",
    "welche Unternehmensebenen es in der Struktur gibt",
    "wie ein Fahrer zum Partner werden kann",
    "wie der Netzwerkanteil 4% + 2% + 1%… funktioniert",
  ],
  es: [
    "cómo está estructurado el holding Mobil Truck",
    "qué niveles de empresas existen en la estructura",
    "cómo puede un conductor convertirse en socio",
    "cómo funciona el porcentaje de red 4% + 2% + 1%…",
  ],
};

const labelError: Record<LangCode, string> = {
  ru: "Произошла ошибка. Попробуй ещё раз.",
  en: "Something went wrong. Try again.",
  de: "Etwas ist schiefgelaufen. Versuch es noch einmal.",
  es: "Algo ha salido mal. Inténtalo de nuevo.",
};

const labelVoiceIn: Record<LangCode, string> = {
  ru: "Голосовой ввод",
  en: "Voice input",
  de: "Spracheingabe",
  es: "Entrada por voz",
};

const labelVoiceOut: Record<LangCode, string> = {
  ru: "Озвучивать ответы",
  en: "Read answers aloud",
  de: "Antworten vorlesen",
  es: "Leer respuestas en voz alta",
};

const labelTyping: Record<LangCode, string> = {
  ru: "Помощник печатает ответ…",
  en: "Assistant is typing…",
  de: "Assistent schreibt eine Antwort…",
  es: "El asistente está escribiendo una respuesta…",
};

// ————— УТИЛИТЫ —————

function pickLabel<T>(map: Record<LangCode, T>, fallback: T, lang?: LangCode): T {
  const key = lang || "ru";
  return map[key] ?? fallback;
}

function normalize(text: string): string {
  return text.toLowerCase();
}

// Локальный «план Б» — если ИИ недоступен
function generateAnswer(text: string, lang: LangCode): string {
  const t = normalize(text);

  const isRu = lang === "ru";
  const isDe = lang === "de";
  const isEs = lang === "es";

  // Структура холдинга
  if (t.includes("структур") || t.includes("holding") || t.includes("структура")) {
    if (isRu)
      return (
        "Mobil Truck строится как многоуровневый холдинг:\n\n" +
        "• Вверху — головная компания, которая ведёт ключевых клиентов, управляет фондами и брендом.\n" +
        "• Ниже — партнёрские компании под брендом Mobil Truck (UG/GmbH).\n" +
        "• Каждая такая компания может создавать свои дочерние компании, формируя ветку.\n" +
        "• Все компании работают по единым правилам распределения прибыли и фиксированному проценту на сеть."
      );
    if (isDe)
      return (
        "Mobil Truck ist als mehrstufiger Holding aufgebaut:\n\n" +
        "• Ganz oben steht die Holding-Gesellschaft mit Großkunden, Fondsverwaltung und Marke.\n" +
        "• Darunter liegen Partnerunternehmen unter der Marke Mobil Truck (UG/GmbH).\n" +
        "• Jedes Partnerunternehmen kann eigene Tochterfirmen gründen und so einen Zweig aufbauen.\n" +
        "• Alle arbeiten nach einheitlichen Regeln der Gewinnverteilung und einem festen Prozentsatz für das Netzwerk."
      );
    if (isEs)
      return (
        "Mobil Truck se construye como un holding multinivel:\n\n" +
        "• Arriba está la empresa matriz que gestiona los grandes clientes, los fondos y la marca.\n" +
        "• Debajo hay empresas asociadas bajo la marca Mobil Truck (UG/GmbH).\n" +
        "• Cada empresa puede crear sus propias filiales y formar una rama.\n" +
        "• Todas trabajan con reglas comunes de reparto de beneficios y un porcentaje fijo para la red."
      );
    return (
      "Mobil Truck is structured as a multi-level holding:\n\n" +
      "• At the top is the main holding company managing key clients, funds and the brand.\n" +
      "• Below are partner companies under the Mobil Truck brand (UG/GmbH).\n" +
      "• Each partner company can create its own subsidiaries, forming a branch.\n" +
      "• All companies work under common profit distribution rules and a fixed network percentage."
    );
  }

  // Процент 4% + 2% + 1% …
  if (
    t.includes("4%") ||
    t.includes("4 %") ||
    t.includes("4+2") ||
    t.includes("4 + 2") ||
    t.includes("процент") ||
    t.includes("percent")
  ) {
    if (isRu)
      return (
        "В модели Mobil Truck каждая компания холдинга выделяет фиксированный процент своей чистой прибыли «на сеть».\n\n" +
        "Пример: 8% от прибыли компании идут вверх по цепочке предприятий:\n" +
        "• 1-й уровень выше получает 4%,\n" +
        "• 2-й уровень — 2%,\n" +
        "• 3-й уровень — 1%,\n" +
        "• 4-й уровень — 0,5% и так далее, каждый раз вдвое меньше.\n\n" +
        "Суммарно эта геометрическая прогрессия даёт 8%,\n" +
        "поэтому ни одна компания не отдаёт на сеть больше фиксированной доли.\n" +
        "Остальная прибыль делится между самим предприятием, фондами и холдингом."
      );
    if (isDe)
      return (
        "Im Mobil-Truck-Modell gibt jedes Unternehmen einen festen Prozentsatz seines Nettogewinns «für das Netzwerk» ab.\n\n" +
        "Beispiel: 8 % des Gewinns laufen nach oben durch die Kette:\n" +
        "• Ebene 1 über dem Unternehmen erhält 4 %, \n" +
        "• Ebene 2 – 2 %, \n" +
        "• Ebene 3 – 1 %, \n" +
        "• Ebene 4 – 0,5 % und so weiter, jeweils die Hälfte.\n\n" +
        "In Summe ergibt diese geometrische Reihe 8 %, \n" +
        "daher gibt kein Unternehmen mehr als diesen festen Anteil an das Netzwerk ab.\n" +
        "Der Rest des Gewinns wird zwischen Unternehmen, Fonds und Holding verteilt."
      );
    if (isEs)
      return (
        "En el modelo de Mobil Truck, cada empresa del holding destina un porcentaje fijo de su beneficio neto «a la red».\n\n" +
        "Ejemplo: el 8% del beneficio de la empresa sube por la cadena de empresas:\n" +
        "• el primer nivel superior recibe el 4%,\n" +
        "• el segundo nivel — el 2%,\n" +
        "• el tercer nivel — el 1%,\n" +
        "• el cuarto nivel — el 0,5% y así sucesivamente, cada vez la mitad.\n\n" +
        "En total, esta progresión geométrica da el 8%,\n" +
        "por lo que ninguna empresa entrega a la red más que ese porcentaje fijo.\n" +
        "El resto del beneficio se reparte entre la propia empresa, los fondos y el holding."
      );
    return (
      "In the Mobil Truck model, each company in the holding allocates a fixed percentage of its net profit “to the network”.\n\n" +
      "Example: 8% of the company's profit goes up the chain of enterprises:\n" +
      "• level 1 above gets 4%,\n" +
      "• level 2 – 2%,\n" +
      "• level 3 – 1%,\n" +
      "• level 4 – 0.5%, and so on, each time half as much.\n\n" +
      "In total this geometric series gives 8%,\n" +
      "so no company gives more than this fixed share to the network.\n" +
      "The remaining profit is split between the company itself, the funds and the holding."
    );
  }

  // Кто такой партнёр
  if (t.includes("партнер") || t.includes("partner") || t.includes("socio")) {
    if (isRu)
      return (
        "Партнёр Mobil Truck — это предприниматель, который управляет собственной компанией под общим брендом.\n\n" +
        "Обычно доля холдинга даёт контроль, а доля партнёра обеспечивает ему мотивацию.\n" +
        "Партнёр получает:\n" +
        "• прибыль своей компании,\n" +
        "• долю от компаний в своей ветке (через сетевой процент),\n" +
        "• доступ к контрактам, IT-инфраструктуре и бренду Mobil Truck.\n\n" +
        "Задача модели — совместить личную инициативу и общие правила безопасности."
      );
    if (isDe)
      return (
        "Ein Mobil-Truck-Partner ist ein Unternehmer, der sein eigenes Unternehmen unter der gemeinsamen Marke führt.\n\n" +
        "Typischerweise hält die Holding einen Kontrollanteil und der Partner einen wesentlichen Anteil.\n" +
        "Der Partner erhält:\n" +
        "• Gewinn seines Unternehmens,\n" +
        "• einen Anteil aus Unternehmen im eigenen Zweig (über den Netzwerk-Prozentsatz),\n" +
        "• Zugang zu Verträgen, IT-Infrastruktur und der Marke Mobil Truck.\n\n" +
        "Das Ziel: persönliche Initiative mit gemeinsamen Sicherheitsregeln verbinden."
      );
    if (isEs)
      return (
        "Un socio de Mobil Truck es un empresario que gestiona su propia empresa bajo la marca común.\n\n" +
        "Normalmente la matriz mantiene una participación de control y el socio una parte significativa.\n" +
        "El socio recibe:\n" +
        "• beneficio de su empresa,\n" +
        "• una parte de las empresas de su rama (a través del porcentaje de red),\n" +
        "• acceso a contratos, infraestructura IT y la marca Mobil Truck.\n\n" +
        "La idea es unir la iniciativa personal con reglas comunes de seguridad."
      );
    return (
      "A Mobil Truck partner is an entrepreneur who runs their own company under the shared brand.\n\n" +
      "Typically the holding keeps a controlling stake and the partner a substantial share.\n" +
      "The partner receives:\n" +
      "• profit of their company,\n" +
      "• a share from companies in their branch (via the network percentage),\n" +
      "• access to contracts, IT infrastructure and the Mobil Truck brand.\n\n" +
      "The goal is to combine personal initiative with shared safety rules."
    );
  }

  // Ответ по умолчанию
  if (isRu)
    return (
      "Я — помощник Mobil Truck.\n\n" +
      "Я могу коротко объяснить:\n" +
      "• как устроен холдинг и уровни компаний,\n" +
      "• чем отличается партнёр от наёмного водителя,\n" +
      "• как работает фиксированный процент на сетевое развитие,\n" +
      "• какие разделы сайта посмотреть сначала.\n\n" +
      "Попробуй спросить, например: «Как устроен холдинг?» или «Как водителю стать партнёром?»."
    );
  if (isDe)
    return (
      "Ich bin der Assistent von Mobil Truck.\n\n" +
      "Ich kann kurz erklären:\n" +
      "• wie der Holding aufgebaut ist,\n" +
      "• worin sich ein Partner von einem angestellten Fahrer unterscheidet,\n" +
      "• wie der feste Netzwerk-Prozentsatz funktioniert,\n" +
      "• welche Bereiche der Website du dir zuerst ansehen solltest.\n\n" +
      "Frag zum Beispiel: „Wie ist der Holding aufgebaut?“ oder „Wie kann ein Fahrer Partner werden?“."
    );
  if (isEs)
    return (
      "Soy el asistente de Mobil Truck.\n\n" +
      "Puedo explicar brevemente:\n" +
      "• cómo está estructurado el holding y los niveles de empresas,\n" +
      "• en qué se diferencia un socio de un conductor asalariado,\n" +
      "• cómo funciona el porcentaje fijo para el desarrollo de la red,\n" +
      "• qué secciones del sitio ver primero.\n\n" +
      "Por ejemplo, pregunta: «¿Cómo está estructurado el holding?» o «¿Cómo puede un conductor convertirse en socio?»."
    );
  return (
    "I am the Mobil Truck assistant.\n\n" +
    "I can briefly explain:\n" +
    "• how the holding and company levels are structured,\n" +
    "• how a partner differs from a hired driver,\n" +
    "• how the fixed network percentage works,\n" +
    "• which sections of the site to look at first.\n\n" +
    'For example, ask: "How is the holding structured?" or "How can a driver become a partner?".'
  );
}

// Стартовое сообщение
const initialMessages: ChatMessage[] = [];

const AssistantWidget: React.FC = () => {
  const { language } = useLanguage();
  const lang: LangCode = language || "en";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isListening, setIsListening] = useState(false);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(false);

  // загрузка истории
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as ChatMessage[];
        if (Array.isArray(data) && data.length > 0) {
          setMessages(data);
        } else {
          setMessages(initialMessages);
        }
      } else {
        setMessages(initialMessages);
      }
    } catch {
      setMessages(initialMessages);
    }
  }, []);

  // сохранение истории
  useEffect(() => {
    try {
      const trimmed =
        messages.length > 30 ? messages.slice(messages.length - 30) : messages;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch {
      // игнорируем
    }
  }, [messages]);

  // озвучка ответа
  useEffect(() => {
    if (!voiceOutputEnabled) return;
    if (typeof window === "undefined") return;

    const last = messages[messages.length - 1];
    if (!last || last.role !== "assistant") return;

    const synth = (window as any).speechSynthesis;
    if (!synth) return;

    const utter = new SpeechSynthesisUtterance(last.content);
    utter.lang =
      lang === "ru"
        ? "ru-RU"
        : lang === "de"
        ? "de-DE"
        : lang === "es"
        ? "es-ES"
        : "en-US";

    synth.cancel();
    synth.speak(utter);
  }, [messages, voiceOutputEnabled, lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text };

    setIsLoading(true);
    setError(null);
    setInput("");

    // формируем историю, которую отправим на сервер
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
    // всё хорошо, ответ от OpenAI
    replyText = data.reply.trim();
  } else if (data && data.error) {
    // ошибка от функции — покажем и локализованное сообщение, и текст ошибки
    const baseError = pickLabel(
      labelError,
      labelError.en,
      lang
    );
    setError(`${baseError}\n${String(data.error)}`);
  }

    } catch (err) {
      // сетевые или другие ошибки
      setError(
        pickLabel(
          labelError,
          "The assistant is temporarily unavailable. Please try again."
        )
      );
    }

    // если по какой-то причине не получили ответ от ИИ — используем локальный генератор как запасной вариант
    if (!replyText) {
      replyText = generateAnswer(text, lang);
    }

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: replyText,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setIsLoading(false);
  };

  // голосовой ввод
  const handleStartListening = () => {
    if (isListening) return;
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError(
        pickLabel(labelError, "Speech recognition is not supported in this browser.")
      );
      return;
    }

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

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = () => {
      setError(
        pickLabel(
          labelError,
          "Voice recognition error. Please try again or type your question."
        )
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const currentHints = pickLabel(labelHintsList, labelHintsList.en, lang);

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
        <div className="fixed bottom-16 right-4 z-40 w-[320px] max-h-[70vh] rounded-2xl border border-zinc-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 bg-zinc-50/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-zinc-800">
                  {pickLabel(labelTitle, labelTitle.en, lang)}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                {pickLabel(labelSubtitle, labelSubtitle.en, lang)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-zinc-400 hover:text-zinc-600"
            >
              ✕
            </button>
          </header>

          {/* Список сообщений */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-[12px] text-zinc-800">
            {messages.length === 0 && (
              <div className="rounded-lg bg-zinc-50 border border-zinc-100 p-2">
                <p className="font-medium text-[12px]">
                  {pickLabel(labelIntroTitle, labelIntroTitle.en, lang)}
                </p>
                <p className="text-[11px] text-zinc-600">
                  {pickLabel(
                    labelIntroDescription,
                    labelIntroDescription.en,
                    lang
                  )}
                </p>
              </div>
            )}

            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-xl bg-emerald-50 px-2 py-1"
                    : "mr-auto max-w-[85%] rounded-xl bg-zinc-50 px-2 py-1"
                }
              >
                <p className="whitespace-pre-wrap leading-snug">{m.content}</p>
              </div>
            ))}

            {isLoading && (
              <p className="text-[11px] text-zinc-500">
                {pickLabel(labelTyping, labelTyping.en, lang)}
              </p>
            )}

            {error && (
              <p className="text-[11px] text-red-500">
                {error}
              </p>
            )}
          </div>

          {/* Подсказки */}
          <div className="px-3 pb-1 text-[10px] text-zinc-500 space-y-0.5">
            <p className="font-medium">
              {pickLabel(labelHintsTitle, labelHintsTitle.en, lang)}
            </p>
            <ul className="list-disc pl-4 space-y-0.5">
              {currentHints.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Поле ввода */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-zinc-100 bg-white px-3 py-2 space-y-1"
          >
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleStartListening}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-[13px] text-zinc-600 hover:bg-zinc-50"
                title={pickLabel(labelVoiceIn, labelVoiceIn.en, lang)}
              >
                🎙
              </button>

              <input
                className="flex-1 rounded-full border border-zinc-200 px-2 py-1 text-[12px] focus:outline-none focus:ring-1 focus:ring-emerald-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={pickLabel(
                  labelInputPlaceholder,
                  labelInputPlaceholder.en,
                  lang
                )}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-1 text-[12px] font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                {pickLabel(labelAsk, labelAsk.en, lang)}
              </button>
            </div>

            <div className="flex items-center justify-between gap-2">
              <label className="flex items-center gap-1 text-[10px] text-zinc-600">
                <input
                  type="checkbox"
                  className="h-3 w-3"
                  checked={voiceOutputEnabled}
                  onChange={(e) => setVoiceOutputEnabled(e.target.checked)}
                />
                <span>{pickLabel(labelVoiceOut, labelVoiceOut.en, lang)}</span>
              </label>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AssistantWidget;
