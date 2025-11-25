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

const labelTitle: Record<LangCode, string> = {
  ru: "Помощник Mobil Truck",
  en: "Mobil Truck Assistant",
  de: "Mobil Truck Assistent",
  es: "Asistente de Mobil Truck",
};

const labelSubtitle: Record<LangCode, string> = {
  ru: "Объясню структуру холдинга, роли и путь роста.",
  en: "I’ll explain the holding structure, roles, and growth path.",
  de: "Ich erkläre die Holdingstruktur, Rollen und den Weg zum Wachstum.",
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

const labelListening: Record<LangCode, string> = {
  ru: "Слушаю… говори.",
  en: "I’m listening… speak.",
  de: "Ich höre zu… sprich.",
  es: "Te escucho… habla.",
};

const labelHintsTitle: Record<LangCode, string> = {
  ru: "О чём можно спросить:",
  en: "What you can ask about:",
  de: "Worüber du fragen kannst:",
  es: "Sobre qué puedes preguntar:",
};

const labelHintsIntro: Record<LangCode, string> = {
  ru: "Попробуй спросить, например:",
  en: "Try asking, for example:",
  de: "Frag zum Beispiel:",
  es: "Prueba preguntar, por ejemplo:",
};

const labelError: Record<LangCode, string> = {
  ru: "Произошла ошибка. Попробуй ещё раз.",
  en: "Something went wrong. Try again.",
  de: "Etwas ist schiefgelaufen. Versuch es noch einmal.",
  es: "Algo ha salido mal. Inténtalo de nuevo.",
};

const labelVoiceOut: Record<LangCode, string> = {
  ru: "Озвучивать ответы",
  en: "Read answers aloud",
  de: "Antworten vorlesen",
  es: "Leer respuestas en voz alta",
};

const labelVoiceButton: Record<LangCode, string> = {
  ru: "Голосовой ответ",
  en: "Voice reply",
  de: "Sprachantwort",
  es: "Respuesta por voz",
};

const labelPoweredBy: Record<LangCode, string> = {
  ru: "Ответы основаны на ИИ OpenAI",
  en: "Answers powered by OpenAI AI",
  de: "Antworten basieren auf OpenAI-KI",
  es: "Respuestas basadas en IA de OpenAI",
};

// Подсказки по темам — можно расширять
const hintList: Record<LangCode, string[]> = {
  ru: [
    "Как устроен холдинг Mobil Truck",
    "Какие уровни компаний есть в структуре",
    "Как водителю вырасти до партнёра",
    "Как работает процент 4% + 2% + 1%…",
  ],
  en: [
    "How the Mobil Truck holding is structured",
    "What company levels exist in the structure",
    "How a driver can grow into a partner",
    "How the 4% + 2% + 1% network income works",
  ],
  de: [
    "Wie der Mobil Truck-Holding aufgebaut ist",
    "Welche Unternehmensebenen es in der Struktur gibt",
    "Wie ein Fahrer zum Partner werden kann",
    "Wie das 4% + 2% + 1%-Nettoeinkommen funktioniert",
  ],
  es: [
    "Cómo está estructurado el holding Mobil Truck",
    "Qué niveles de empresas existen en la estructura",
    "Cómo un conductor puede convertirse en socio",
    "Cómo funciona el ingreso de red 4% + 2% + 1%",
  ],
};

// ————— УТИЛИТЫ —————

function normalizeLang(lang: LangCode): LangCode {
  if (!lang) return "ru";
  const lower = lang.toLowerCase();
  if (lower.startsWith("ru")) return "ru";
  if (lower.startsWith("de")) return "de";
  if (lower.startsWith("es")) return "es";
  return "en";
}

function pickLabel<T extends string>(
  dict: Record<LangCode, T>,
  fallback: T,
  lang?: LangCode
): T {
  const normalized = normalizeLang(lang || "ru");
  return dict[normalized] || fallback;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

// ————— ЛОКАЛЬНАЯ ИСТОРИЯ В БРАУЗЕРЕ —————

function loadHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .slice(-40);
  } catch {
    return [];
  }
}

function saveHistory(history: ChatMessage[]) {
  if (typeof window === "undefined") return;
  try {
    const limited = history.slice(-40);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
  } catch {
    // игнорируем
  }
}

// ————— СОЛЯНКА ПО ВОПРОСАМ ПРО ХОЛДИНГ —————

function getAssistantReply(userMessage: string, lang: LangCode): string {
  const t = normalize(userMessage);

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
        "• Oben steht die Hauptgesellschaft, die Schlüsselkunden betreut, Fonds und Marke verwaltet.\n" +
        "• Darunter befinden sich Partnerunternehmen unter der Marke Mobil Truck (UG/GmbH).\n" +
        "• Jedes dieser Unternehmen kann eigene Tochtergesellschaften gründen und einen Ast bilden.\n" +
        "• Alle Unternehmen arbeiten nach einheitlichen Regeln der Gewinnverteilung und einem festen Prozentsatz für das Netzwerk."
      );
    if (isEs)
      return (
        "Mobil Truck se construye como un holding multinivel:\n\n" +
        "• En la parte superior está la empresa matriz, que lleva a los clientes clave y gestiona los fondos y la marca.\n" +
        "• Debajo hay empresas asociadas bajo la marca Mobil Truck (UG/GmbH).\n" +
        "• Cada una de estas empresas puede crear sus propias filiales, formando una rama.\n" +
        "• Todas las empresas trabajan según reglas unificadas de distribución de beneficios y un porcentaje fijo para la red."
      );
    return (
      "Mobil Truck is built as a multi-level holding:\n\n" +
      "• At the top is the head company that manages key clients, funds and the brand.\n" +
      "• Below are partner companies under the Mobil Truck brand (UG/GmbH).\n" +
      "• Each such company can create its own daughter companies, forming a branch.\n" +
      "• All companies follow unified profit-sharing rules and a fixed percentage for the network."
    );
  }

  // Партнёр vs наёмный водитель
  if (
    t.includes("партнер") ||
    t.includes("partner") ||
    t.includes("самостоятельн") ||
    t.includes("собственн") ||
    t.includes("наемн") ||
    t.includes("angestell") ||
    t.includes("emplead")
  ) {
    if (isRu)
      return (
        "Разница между наёмным водителем и партнёром Mobil Truck такая:\n\n" +
        "• Наёмный водитель работает за фиксированную ставку или проценты с рейса и не участвует в прибыли компании.\n" +
        "• Партнёр — это владелец или совладелец своей транспортной компании под брендом Mobil Truck.\n" +
        "• Он получает доход от работы своей фирмы и дополнительно — пассивный доход от развития своей сети дочерних компаний.\n" +
        "• Партнёр участвует в принятии решений, разделяет ответственность и получает часть прибыли холдинга по понятным правилам."
      );
    if (isDe)
      return (
        "Der Unterschied zwischen einem angestellten Fahrer und einem Mobil Truck-Partner ist folgender:\n\n" +
        "• Ein angestellter Fahrer arbeitet für einen festen Lohn oder einen Prozentsatz pro Fahrt und beteiligt sich nicht am Unternehmensgewinn.\n" +
        "• Ein Partner ist Eigentümer oder Miteigentümer seines eigenen Transportunternehmens unter der Marke Mobil Truck.\n" +
        "• Er erhält Einkommen aus der Arbeit seiner Firma und zusätzlich passives Einkommen aus der Entwicklung seines Tochternetzwerks.\n" +
        "• Der Partner ist an Entscheidungen beteiligt, teilt Verantwortung und erhält einen Teil des Holdinggewinns nach klaren Regeln."
      );
    if (isEs)
      return (
        "La diferencia entre un conductor asalariado y un socio de Mobil Truck es la siguiente:\n\n" +
        "• El conductor asalariado trabaja por un salario fijo o un porcentaje por viaje y no participa en las ganancias de la empresa.\n" +
        "• El socio es propietario o copropietario de su propia empresa de transporte bajo la marca Mobil Truck.\n" +
        "• Recibe ingresos del trabajo de su empresa y, además, ingresos pasivos del desarrollo de su red de filiales.\n" +
        "• El socio participa en la toma de decisiones, comparte la responsabilidad y recibe una parte de las ganancias del holding según reglas claras."
      );
    return (
      "The difference between a hired driver and a Mobil Truck partner is:\n\n" +
      "• A hired driver works for a fixed rate or a percentage per trip and does not share in the company’s profit.\n" +
      "• A partner is the owner or co-owner of their own transport company under the Mobil Truck brand.\n" +
      "• They earn income from their own company’s work and additionally passive income from the growth of their daughter-company network.\n" +
      "• A partner takes part in decision-making, shares responsibility, and receives part of the holding’s profit under transparent rules."
    );
  }

  // Фиксированный процент 4% + 2% + 1%…
  if (
    t.includes("процент") ||
    t.includes("%") ||
    t.includes("сетев") ||
    t.includes("network") ||
    t.includes("pasiv") ||
    t.includes("пассив")
  ) {
    if (isRu)
      return (
        "Процентная схема в Mobil Truck задумана так, чтобы вознаграждать развитие сети, но не превращать её в финансовую пирамиду:\n\n" +
        "• 4% — получает компания, которая непосредственно ведёт клиента и выполняет рейсы (операционный доход).\n" +
        "• 2% — получает компания-партнёр, у которой в структуре находится этот перевозчик (за развитие ветки и ответственность).\n" +
        "• 1% — может резервироваться в общий фонд холдинга: на сервис, страховые резервы, обучение и развитие.\n\n" +
        "Все проценты считаются с оборота по клиенту по прозрачным договорам. Точные цифры и формулы пока прорабатываются и могут быть скорректированы перед запуском."
      );
    if (isDe)
      return (
        "Das Prozentschema bei Mobil Truck ist so gedacht, dass es die Netzwerkentwicklung belohnt, ohne ein Schneeballsystem zu sein:\n\n" +
        "• 4% – erhält das Unternehmen, das den Kunden direkt betreut und die Fahrten ausführt (operative Einnahmen).\n" +
        "• 2% – erhält das Partnerunternehmen, in dessen Struktur sich dieser Frachtführer befindet (für Aufbau und Verantwortung der Linie).\n" +
        "• 1% – kann in einen gemeinsamen Holdingfonds fließen: für Service, Rücklagen, Schulung und Entwicklung.\n\n" +
        "Alle Prozente werden aus dem Kundenumsatz nach transparenten Verträgen berechnet. Die genauen Zahlen und Formeln werden noch ausgearbeitet und können vor dem Start angepasst werden."
      );
    if (isEs)
      return (
        "El esquema de porcentajes en Mobil Truck está pensado para recompensar el desarrollo de la red, pero sin convertirse en una pirámide financiera:\n\n" +
        "• 4%: lo recibe la empresa que trabaja directamente con el cliente y realiza los viajes (ingreso operativo).\n" +
        "• 2%: lo recibe la empresa socia en cuya estructura se encuentra ese transportista (por desarrollar la rama y asumir responsabilidad).\n" +
        "• 1%: puede reservarse para un fondo común del holding: servicio, reservas de seguridad, formación y desarrollo.\n\n" +
        "Todos los porcentajes se calculan sobre la facturación del cliente según contratos transparentes. Las cifras exactas y fórmulas se están afinando y pueden ajustarse antes del lanzamiento."
      );
    return (
      "The percentage scheme in Mobil Truck is designed to reward network development without turning into a financial pyramid:\n\n" +
      "• 4% – goes to the company that directly serves the client and drives the loads (operational income).\n" +
      "• 2% – goes to the partner company whose structure this carrier belongs to (for developing the branch and bearing responsibility).\n" +
      "• 1% – may be reserved into the common holding fund: service, reserves, training and development.\n\n" +
      "All percentages are calculated from the client’s turnover under transparent contracts. Exact figures and formulas are still being refined and may be adjusted before launch."
    );
  }

  // Вопросы про уровни и рост
  if (
    t.includes("уровн") ||
    t.includes("level") ||
    t.includes("рост") ||
    t.includes("karrier") ||
    t.includes("career")
  ) {
    if (isRu)
      return (
        "В Mobil Truck планируется несколько естественных уровней роста:\n\n" +
        "1) Водитель — работает на автомобиле (нанятом или лизинговом), получает достойную оплату и прозрачный график.\n" +
        "2) Старший водитель / наставник — помогает обучать новых, знает стандарты компании и помогает держать качество.\n" +
        "3) Партнёр-перевозчик — открывает свою компанию под брендом Mobil Truck и получает собственный парк и клиентов.\n" +
        "4) Основатель ветки — развивает сеть дочерних компаний и получает долю от их оборота по установленной схеме.\n\n" +
        "Цель — чтобы человек мог пройти путь
