import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";

type LabelMap = Record<Language, string>;

interface NavItem {
  id: string;
  href: string;
  labels: LabelMap;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    href: "/",
    labels: {
      ru: "Главная",
      en: "Home",
      de: "Start",
      es: "Inicio",
    },
  },
    {
    id: "holding",
    href: "/holding",
    labels: {
      ru: "Модель холдинга",
      en: "Holding model",
      de: "Holding-Modell",
      es: "Modelo del holding"
    }
  },

  {
    id: "structure",
    href: "/structure",
    labels: {
      ru: "Структура",
      en: "Structure",
      de: "Struktur",
      es: "Estructura",
    },
  },
  {
    id: "drivers",
    href: "/drivers",
    labels: {
      ru: "Водителям",
      en: "Drivers",
      de: "Fahrer",
      es: "Conductores",
    },
  },
  {
    id: "partners",
    href: "/partners",
    labels: {
      ru: "Партнёрам",
      en: "Partners",
      de: "Partner",
      es: "Socios",
    },
  },
  {
    id: "profit",
    href: "/profit",
    labels: {
      ru: "Модель 8%",
      en: "8% model",
      de: "8%-Modell",
      es: "Modelo 8%",
    },
  },
  {
    id: "documents",
    href: "/documents",
    labels: {
      ru: "Документы",
      en: "Documents",
      de: "Dokumente",
      es: "Documentos",
    },
  },
  {
    id: "contact",
    href: "/contact",
    labels: {
      ru: "Контакты",
      en: "Contacts",
      de: "Kontakt",
      es: "Contacto",
    },
  },
  {
    id: "forum",
    href: "/forum",
    labels: {
      ru: "Форум",
      en: "Forum",
      de: "Forum",
      es: "Foro",
    },
  },
  {
    id: "join",
    href: "/join",
    labels: {
      ru: "Присоединиться",
      en: "Join",
      de: "Beitreten",
      es: "Unirse",
    },
  },
];

export default function Header() {
  const { language } = useLanguage();
  const pathname = window.location.pathname;

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        {/* Логотип / бренд */}
        <a href="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold tracking-wide text-zinc-800">
            Mobil Truck
          </span>
        </a>

{/* Навигация */}
<nav
  className="
    nav-scroll
    flex flex-wrap md:flex-nowrap items-center gap-2
    text-xs sm:text-sm
    w-full md:w-auto
    overflow-x-auto md:overflow-visible
    [-webkit-overflow-scrolling:touch]
  "
>
  {NAV_ITEMS.map((item, index) => {
    const isActive =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href));

    const baseClasses =
      "inline-flex items-center justify-center rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 transition text-sm flex-shrink-0 whitespace-nowrap";
    const activeClasses =
      "border-zinc-900 bg-zinc-900 text-white shadow-sm";
    const defaultClasses =
      "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50";
    const emphasisClasses =
      index === NAV_ITEMS.length - 1 ? "font-semibold" : "";

    return (
      <a
        key={item.id}
        href={item.href}
        className={`${baseClasses} ${
          isActive ? activeClasses : defaultClasses
        } ${emphasisClasses}`}
      >
        {item.labels[currentLanguage] ?? item.labels["ru"]}
      </a>
    );
  })}
</nav>


        {/* Переключатель языков */}
        <div className="shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
