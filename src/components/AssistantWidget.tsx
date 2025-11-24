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

const labelSend: Record<Language, string>
