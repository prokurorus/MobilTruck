import React, { useState } from "react";
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
      es: "Modelo del holding",
    },
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const renderLink = (
    item: NavItem,
    variant: "desktop" | "mobile" = "desktop"
  ) => {
    const isActive =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href));

    const baseDesktop =
      "nav-link inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap no-underline";
    const baseMobile =
      "nav-link inline-flex items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium no-underline";

    const activeClasses = "border-zinc-900 bg-zinc-900 text-white shadow-sm";
    const defaultClasses =
      "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50";

    const emphasis = item.id === "join" ? "font-semibold" : "";

    const base = variant === "desktop" ? baseDesktop : baseMobile;

    return (
      <a
        key={item.id}
        href={item.href}
        className={`${base} ${
          isActive ? activeClasses : defaultClasses
        } ${emphasis}`}
      >
        {item.labels[language] ?? item.labels["ru"]}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 backdrop-blur">
      {/* Верхняя строка */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Логотип */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-semibold tracking-wide text-zinc-800">
            Mobil Truck
          </span>
        </a>

        {/* Десктоп: меню + языки */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-between">
          <nav
            className="
              flex flex-wrap items-center justify-center
              gap-x-2 gap-y-2
              w-full
            "
          >
            {NAV_ITEMS.map((item) => renderLink(item, "desktop"))}
          </nav>

          <div className="shrink-0 ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Мобильная шапка: языки + бургер */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Открыть меню"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-transform ${
                isMobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-zinc-900 transition-transform ${
                isMobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileOpen && (
        <nav className="md:hidden border-t border-zinc-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => renderLink(item, "mobile"))}
          </div>
        </nav>
      )}
    </header>
  );
}
