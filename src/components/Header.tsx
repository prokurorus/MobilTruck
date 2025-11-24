import React from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const labels = {
  ru: {
    home: "Главная",
    structure: "Структура",
    drivers: "Водителям",
    partners: "Партнёрам",
    profit: "Модель 8%",
    documents: "Документы",
    contact: "Контакты",
    forum: "Форум",
    join: "Присоединиться",
  },
  en: {
    home: "Home",
    structure: "Structure",
    drivers: "Drivers",
    partners: "Partners",
    profit: "Profit model",
    documents: "Documents",
    contact: "Contact",
    forum: "Forum",
    join: "Join",
  },
  de: {
    home: "Startseite",
    structure: "Struktur",
    drivers: "Fahrer",
    partners: "Partner",
    profit: "8%-Modell",
    documents: "Dokumente",
    contact: "Kontakt",
    forum: "Forum",
    join: "Beitreten",
  },
  es: {
    home: "Inicio",
    structure: "Estructura",
    drivers: "Conductores",
    partners: "Socios",
    profit: "Modelo 8%",
    documents: "Documentos",
    contact: "Contacto",
    forum: "Foro",
    join: "Unirse",
  },
};

export default function Header() {
  const { language } = useLanguage();
  const t = labels[language];

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Навигационное меню */}
        <nav className="flex flex-wrap gap-3 text-sm text-zinc-700">
          <a href="/" className="hover:text-black">{t.home}</a>
          <a href="/structure" className="hover:text-black">{t.structure}</a>
          <a href="/drivers" className="hover:text-black">{t.drivers}</a>
          <a href="/partners" className="hover:text-black">{t.partners}</a>
          <a href="/profit" className="hover:text-black">{t.profit}</a>
          <a href="/documents" className="hover:text-black">{t.documents}</a>
          <a href="/contact" className="hover:text-black">{t.contact}</a>
          <a href="/forum" className="hover:text-black">{t.forum}</a>

          {/* Кнопка присоединиться */}
          <a
            href="/join"
            className="ml-2 px-3 py-1 rounded-full border border-zinc-300 hover:bg-zinc-100"
          >
            {t.join}
          </a>
        </nav>

        {/* Переключатель языка */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
