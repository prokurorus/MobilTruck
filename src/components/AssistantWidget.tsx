import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// Новое имя ключа — отдельная история для Mobil Truck
const STORAGE_KEY = "mobiltruck_assistant_history_v1";

const labelOpen: Record<Language, string> = {
  ru: "Спросить помощника",
  en: "Ask the assistant",
  de: "Assistent fragen",
  es: "Preguntar al asistente",
};

const labelTitle: Record<Language, string> = {
  ru: "Помощник Mobil Truck",
  en: "Mobil Truck Assistant",
  de: "Mobil-Truck-Assistent",
  es: "Asistente de Mobil Truck",
};

const labelSubtitle: Record<Language, string> = {
  ru: "Структура • сеть • партнёрство",
  en: "Structure • Network • Partnership",
  de: "Struktur • Netzwerk • Partnerschaft",
  es: "Estructura • Red • Asociación",
};

const labelPlaceholder: Record/Language, string> = {
  ru: "Задай вопрос о Mobil Truck, структуре или партнёрстве…",
  en: "Ask about Mobil Truck, structure or partnership…",
  de: "Frag nach Mobil Truck, Struktur oder Partnerschaft…",
  es: "Pregunta sobre Mobil Truck, estructura o asociación…",
};

const labelSend: Record<Language, string> = {
  ru: "Спросить",
  en: "Ask",
  de: "Fragen",
  es: "Preguntar",
};

const labelThinking: Record<Language, string> = {
  ru: "Помощник думает…",
  en: "Assistant is thinking…",
  de: "Assistent denkt nach…",
  es: "El asistente está pensando…",
};

const labelError: Record<Language, string> = {
  ru: "Произошла ошибка. Попробуй ещё раз.",
  en: "Something went wrong. Try again.",
  de: "Etwas ist schiefgelaufen. Versuch es noch einmal.",
  es: "Algo ha salido mal. Inténtalo de nuevo.",
};

const labelVoiceIn: Record<Language, string> = {
  ru: "Голосовой ввод",
  en: "Voice input",
  de: "Spracheingabe",
  es: "Entrada por voz",
};

const labelVoiceOut: Record<Language, string> = {
  ru: "Озвучка ответа",
  en: "Read answers aloud",
  de: "Antworten vorlesen",
  es: "Leer respuestas en voz alta",
};

const labelListening: Record<Language, string> = {
  ru: "Слушаю… скажи свой вопрос.",
  en: "Listening… say your question.",
  de: "Ich höre zu… stell deine Frage.",
  es: "Escuchando… di tu pregunta.",
};

// Короткие подсказки под чатом
const labelHintsTitle: Record<Language, string> = {
  ru: "О чём можно спросить:",
  en: "You can ask about:",
  de: "Du kannst fragen nach:",
  es: "Puedes preguntar sobre:",
};

const labelHintsList: Record<Language, string[]> = {
  ru: [
    "как устроен холдинг Mobil Truck",
    "какие уровни компаний есть в структуре",
    "как водителю вырасти до партнёра",
    "как работает процент 4% + 2% + 1%…",
  ],
  en: [
    "how the Mobil Truck holding is structured",
    "what company levels exist in the network",
    "how a driver can grow into a partner",
    "how the 4% + 2% + 1%… model works",
  ],
  de: [
    "wie der Mobil-Truck-Holding aufgebaut ist",
    "welche Unternehmensebenen es gibt",
    "wie ein Fahrer Partner werden kann",
    "wie das 4% + 2% + 1%…-Modell funktioniert",
  ],
  es: [
    "cómo está estructurado el holding Mobil Truck",
    "qué niveles de empresas existen en la red",
    "cómo un conductor puede convertirse en socio",
    "cómo funciona el modelo 4% + 2% + 1%…",
  ],
};

// --- Локальный генератор ответов без обращения к серверу ---

function normalize(text: string): string {
  return text.toLowerCase();
}

function generateAnswer(text: string, language: Language): string {
  const t = normalize(text);

  const isRu = language === "ru";
  const isDe = language === "de";
  const isEs = language === "es";

  // Структура холдинга
  if (t.includes("структур") || t.includes("holding") || t.includes("структура")) {
    if (isRu)
      return (
        "Mobil Truck строится как многоуровневый холдинг:\n\n" +
        "• Вверху — головная компания, которая ведёт ключевых клиентов, управляет фондами и брендом.\n" +
        "• Ниже — партнёрские компании под брендом Mobil Truck (UG/GmbH), в которых предприниматели владеют долями и отвечают за операционную работу.\n" +
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
      "• All companies follow the same profit-sharing rules and a fixed percentage for the network."
    );
  }

  // Водители и рост
  if (t.includes("водител") || t.includes("driver")) {
    if (isRu)
      return (
        "Водитель в Mobil Truck — это не тупо наёмный сотрудник.\n\n" +
        "Лестница роста выглядит так:\n" +
        "1) Водитель с прозрачной системой оплаты.\n" +
        "2) Старший водитель / наставник.\n" +
        "3) Младший партнёр с долей в машине или мини-компании.\n" +
        "4) Полноправный партнёр с долей в собственной компании под брендом Mobil Truck.\n\n" +
        "Задача платформы — дать водителю понятную дорогу от руля до партнёрства."
      );
    if (isDe)
      return (
        "Ein Fahrer bei Mobil Truck ist nicht nur ein Angestellter.\n\n" +
        "Die Wachstumstreppe:\n" +
        "1) Fahrer mit transparenter Entlohnung.\n" +
        "2) Senior-Fahrer / Mentor.\n" +
        "3) Junior-Partner mit Anteil am Fahrzeug oder einer kleinen Einheit.\n" +
        "4) Vollwertiger Partner mit Anteil am eigenen Unternehmen unter der Marke Mobil Truck.\n\n" +
        "Das Ziel ist ein klarer Weg: vom Lenkrad zur Partnerschaft."
      );
    if (isEs)
      return (
        "Un conductor en Mobil Truck no es solo un empleado.\n\n" +
        "La escalera de crecimiento:\n" +
        "1) Conductor con pago transparente.\n" +
        "2) Conductor sénior / mentor.\n" +
        "3) Socio júnior con participación en el camión o en una mini-empresa.\n" +
        "4) Socio pleno con participación en su propia empresa bajo la marca Mobil Truck.\n\n" +
        "La idea es dar al conductor un camino claro: del volante a la asociación."
      );
    return (
      "A driver in Mobil Truck is not just an employee.\n\n" +
      "Typical growth path:\n" +
      "1) Driver with transparent pay.\n" +
      "2) Senior driver / mentor.\n" +
      "3) Junior partner with a share in a truck or small unit.\n" +
      "4) Full partner owning a share in their own company under the Mobil Truck brand.\n\n" +
      "The platform’s goal is to give drivers a clear road from wheel to partnership."
    );
  }

  // Процент 4%+2%+1%...
  if (t.includes("4%") || t.includes("4 %") || t.includes("4 + 2") || t.includes("процент") || t.includes("%")) {
    if (isRu)
      return (
        "В модели Mobil Truck каждая компания холдинга выделяет фиксированный процент своей чистой прибыли «на сеть».\n\n" +
        "Пример: 8% от прибыли компании идут вверх по цепочке предприятий:\n" +
        "• 1-й уровень выше получает 4%,\n" +
        "• 2-й уровень — 2%,\n" +
        "• 3-й уровень — 1%,\n" +
        "• 4-й уровень — 0,5% и так далее, каждый раз вдвое меньше.\n\n" +
        "Сумма этой геометрической прогрессии ограничена (4 + 2 + 1 + 0,5 + … = 8%),\n" +
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
        "• Ebene 4 – 0,5 % usw., jeweils halbiert.\n\n" +
        "Die Summe dieser geometrischen Reihe ist begrenzt (4 + 2 + 1 + 0,5 + … = 8 %).\n" +
        "So gibt kein Unternehmen mehr als diesen festen Anteil an das Netzwerk ab.\n" +
        "Der Rest wird zwischen dem Unternehmen selbst, den Fonds und der Holding verteilt."
      );
    if (isEs)
      return (
        "En el modelo de Mobil Truck cada empresa entrega un porcentaje fijo de su beneficio neto «a la red».\n\n" +
        "Ejemplo: el 8 % del beneficio de la empresa sube por la cadena:\n" +
        "• el primer nivel por encima recibe el 4 %,\n" +
        "• el segundo nivel — el 2 %,\n" +
        "• el tercero — el 1 %,\n" +
        "• el cuarto — el 0,5 % y así sucesivamente, cada vez la mitad.\n\n" +
        "La suma de esta serie geométrica está limitada (4 + 2 + 1 + 0,5 + … = 8 %),\n" +
        "por lo que ninguna empresa entrega a la red más que ese porcentaje fijo.\n" +
        "El resto del beneficio se reparte entre la propia empresa, los fondos y la matriz."
      );
    return (
      "In the Mobil Truck model every company allocates a fixed percentage of its net profit “to the network”.\n\n" +
      "Example: 8% of the company’s profit flows up through the chain:\n" +
      "• level 1 above gets 4%,\n" +
      "• level 2 – 2%,\n" +
      "• level 3 – 1%,\n" +
      "• level 4 – 0.5%, and so on, each time half.\n\n" +
      "The sum of this geometric series is capped (4 + 2 + 1 + 0.5 + … = 8%),\n" +
      "so no company gives more than this fixed share to the network.\n" +
      "The remaining profit is split between the company itself, funds and the holding."
    );
  }

  // Партнёры / предприниматели
  if (t.includes("партнер") || t.includes("partner") || t.includes("предприним")) {
    if (isRu)
      return (
        "Партнёр Mobil Truck — это предприниматель, который управляет своей компанией под общим брендом.\n\n" +
        "Обычно структура долей выглядит так: контрольный пакет у холдинга, существенная доля у партнёра.\n" +
        "Партнёр получает:\n" +
        "• прибыль своей компании,\n" +
        "• долю от компаний в собственной ветке (через сетевой процент),\n" +
        "• доступ к контрактам, IT-инфраструктуре и бренду Mobil Truck.\n\n" +
        "Задача модели — совместить личную инициативу и общие правила безопасности."
      );
    if (isDe)
      return (
        "Ein Mobil-Truck-Partner ist ein Unternehmer, der sein eigenes Unternehmen unter der gemeinsamen Marke führt.\n\n" +
        "Typischerweise hält die Holding einen Kontrollanteil, der Partner einen wesentlichen Anteil.\n" +
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
      "Typically the holding keeps a controlling stake and the partner holds a substantial share.\n" +
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
      "• какие разделы сайта стоит посмотреть сначала.\n\n" +
      "Попробуй спросить, например: «Как устроен холдинг?» или «Как водителю стать партнёром?»."
    );
  if (isDe)
    return (
      "Ich bin der Assistent von Mobil Truck.\n\n" +
      "Ich kann kurz erklären:\n" +
      "• wie der Holding aufgebaut ist,\n" +
      "• worin sich ein Partner von einem angestellten Fahrer unterscheidet,\n" +
      "• wie der feste Prozentsatz für das Netzwerk funktioniert,\n" +
      "• welche Bereiche der Website du dir zuerst ansehen solltest.\n\n" +
      "Frag zum Beispiel: „Wie ist der Holding aufgebaut?“ oder „Wie kann ein Fahrer Partner werden?“."
    );
  if (isEs)
    return (
      "Soy el asistente de Mobil Truck.\n\n" +
      "Puedo explicar brevemente:\n" +
      "• cómo está organizado el holding,\n" +
      "• en qué se diferencia un socio de un conductor empleado,\n" +
      "• cómo funciona el porcentaje fijo para la red,\n" +
      "• qué secciones del sitio deberías mirar primero.\n\n" +
      "Prueba con algo como: «¿Cómo está estructurado el holding?» o «¿Cómo puede un conductor convertirse en socio?»."
    );
  return (
    "I am the Mobil Truck assistant.\n\n" +
    "I can briefly explain:\n" +
    "• how the holding is structured,\n" +
    "• how partners differ from hired drivers,\n" +
    "• how the fixed percentage for the network works,\n" +
    "• which sections of the site to start with.\n\n" +
    "Try asking: “How is the holding structured?” or “How can a driver become a partner?”."
  );
}

const AssistantWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isListening, setIsListening] = useState(false);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(false);

  // --- Загрузка истории из localStorage ---
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[];
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      }
    } catch {
      // игнорируем
    }
  }, []);

  // --- Сохранение истории ---
  useEffect(() => {
    try {
      const trimmed =
        messages.length > 30 ? messages.slice(messages.length - 30) : messages;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch {
      // игнорируем
    }
  }, [messages]);

  // --- Озвучка ответа, если включена ---
  useEffect(() => {
    if (!voiceOutputEnabled) return;
    if (typeof window === "undefined") return;
    const last = messages[messages.length - 1];
    if (!last || last.role !== "assistant") return;

    const synth = (window as any).speechSynthesis;
    if (!synth) return;

    const utter = new SpeechSynthesisUtterance(last.content);
    utter.lang =
      language === "ru"
        ? "ru-RU"
        : language === "de"
        ? "de-DE"
        : language === "es"
        ? "es-ES"
        : "en-US";
    synth.cancel();
    synth.speak(utter);
  }, [messages, voiceOutputEnabled, language]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const replyText = generateAnswer(text, language);
    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: replyText,
    };

    setIsLoading(true);
    setError(null);
    setInput("");

    // Небольшая задержка, чтобы выглядело живее
    setTimeout(() => {
      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setIsLoading(false);
    }, 300);
  };

  // --- Голосовой ввод (Web Speech API) ---
  const handleStartListening = () => {
    if (isListening) return;
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError(
        language === "ru"
          ? "Браузер не поддерживает распознавание речи."
          : language === "de"
          ? "Dieser Browser unterstützt keine Spracherkennung."
          : language === "es"
          ? "Este navegador no admite reconocimiento de voz."
          : "This browser does not support speech recognition."
      );
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang =
      language === "ru"
        ? "ru-RU"
        : language === "de"
        ? "de-DE"
        : language === "es"
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
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setError(
        language === "ru"
          ? "Ошибка распознавания речи."
          : language === "de"
          ? "Fehler bei der Spracherkennung."
          : language === "es"
          ? "Error en el reconocimiento de voz."
          : "Speech recognition error."
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const sendDisabled = isLoading || !input.trim();

  const hints = labelHintsList[language];

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        type="button"
        onClick={handleToggle}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-zinc-800 active:bg-zinc-900 transition"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[11px] text-zinc-900 font-bold">
          AI
        </span>
        <span>{labelOpen[language]}</span>
      </button>

      {/* Панель помощника */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-[320px] max-w-[100vw] rounded-2xl border border-zinc-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 bg-zinc-50/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-zinc-800">
                  {labelTitle[language]}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                {labelSubtitle[language]}
              </p>
            </div>
            <button
              type="button"
              onClick={handleToggle}
              className="text-xs text-zinc-500 hover:text-zinc-800"
            >
              ✕
            </button>
          </header>

          {/* Лента сообщений */}
          <div className="flex-1 max-h-72 overflow-y-auto px-3 py-2 space-y-2 text-[13px]">
            {messages.length === 0 && (
              <p className="text-zinc-500 text-xs">
                {labelPlaceholder[language]}
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-3 py-1.5 max-w-[80%] whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-900"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <p className="text-[11px] text-zinc-500">
                {labelThinking[language]}
              </p>
            )}
            {isListening && (
              <p className="text-[11px] text-emerald-600">
                {labelListening[language]}
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
            <p className="font-medium">{labelHintsTitle[language]}</p>
            <ul className="list-disc list-inside space-y-0.5">
              {hints.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Форма ввода + голос */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-zinc-100 bg-white px-3 py-2 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleStartListening}
                className={`h-8 w-8 rounded-full border flex items-center justify-center text-[13px] ${
                  isListening
                    ? "bg-emerald-100 border-emerald-400 text-emerald-700"
                    : "border-zinc-300 text-zinc-500 hover:bg-zinc-50"
                }`}
                title={labelVoiceIn[language]}
              >
                🎙
              </button>

              <input
                type="text"
                className="flex-1 text-xs border border-zinc-200 rounded-full px-3 py-1.5 outline-none focus:ring-2 focus:ring-zinc-300"
                placeholder={labelPlaceholder[language]}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={sendDisabled}
                className={`text-xs font-semibold rounded-full px-3 py-1.5 transition ${
                  sendDisabled
                    ? "bg-zinc-200 text-zinc-500 cursor-not-allowed"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {labelSend[language]}
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-500">
              <label className="inline-flex items-center gap-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-3 w-3"
                  checked={voiceOutputEnabled}
                  onChange={(e) => setVoiceOutputEnabled(e.target.checked)}
                />
                <span>{labelVoiceOut[language]}</span>
              </label>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AssistantWidget;
