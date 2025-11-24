import React from "react";
import { useLanguage } from "../context/LanguageContext";

const documentsText: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    sections: { title: string; items: string[] }[];
  }
> = {
  ru: {
    badge: "Mobil Truck • документы и модель",
    title: "Документы Mobil Truck",
    subtitle:
      "Здесь собраны ключевые материалы холдинга: договоры, правила, структура управления и юридическая модель. Все документы создаются в едином стиле — прозрачные, понятные и одинаковые для всех партнёров.",
    sections: [
      {
        title: "Юридическая структура",
        items: [
          "Партнёрская модель UG / GmbH.",
          "Независимые компании, работающие под единым брендом.",
          "Фиксированный сетевой процент — 8%.",
        ],
      },
      {
        title: "Базовые документы",
        items: [
          "Публичная модель распределения прибыли — /profit.",
          "Договор между головным холдингом и партнёрской компанией (в разработке).",
          "Договор между партнёрами внутри ветки (в разработке).",
        ],
      },
      {
        title: "Дорожные карты",
        items: [
          "Рост сети и запуск новых компаний.",
          "Модель автоматизации процессов.",
          "Расширение в другие страны ЕС.",
        ],
      },
    ],
  },

  en: {
    badge: "Mobil Truck • documents",
    title: "Mobil Truck Documents",
    subtitle:
      "Here you will find the core materials of the holding: agreements, rules, structure, and the legal model. All documents follow a unified style — transparent, simple, and identical for all partners.",
    sections: [
      {
        title: "Legal structure",
        items: [
          "Partner model based on UG / GmbH.",
          "Independent companies under one brand.",
          "Fixed network percent — 8%.",
        ],
      },
      {
        title: "Core documents",
        items: [
          "Profit distribution model — /profit.",
          "Agreement between the holding and a partner company (coming soon).",
          "Internal partner agreement (coming soon).",
        ],
      },
      {
        title: "Roadmaps",
        items: [
          "Network growth and launching new companies.",
          "Process automation model.",
          "Expansion to other EU countries.",
        ],
      },
    ],
  },

  de: {
    badge: "Mobil Truck • Dokumente",
    title: "Mobil Truck Dokumente",
    subtitle:
      "Hier finden Sie die wichtigsten Unterlagen des Holdings: Verträge, Regeln, Struktur und das rechtliche Modell. Alle Dokumente folgen einem klaren, einheitlichen Stil.",
    sections: [
      {
        title: "Rechtsstruktur",
        items: [
          "Partner-Modell auf Basis von UG / GmbH.",
          "Unabhängige Firmen unter einer Marke.",
          "Fester Netzwerkprozentsatz — 8%.",
        ],
      },
      {
        title: "Kernunterlagen",
        items: [
          "Modell zur Gewinnverteilung — /profit.",
          "Vertrag zwischen Holding und Partnerfirma (in Vorbereitung).",
          "Interner Partnervertrag (in Vorbereitung).",
        ],
      },
      {
        title: "Roadmaps",
        items: [
          "Netzwerkwachstum und neue Firmen.",
          "Automatisierungsmodell.",
          "Expansion in weitere EU-Länder.",
        ],
      },
    ],
  },

  es: {
    badge: "Mobil Truck • documentos",
    title: "Documentos de Mobil Truck",
    subtitle:
      "Aquí se recopilan los materiales clave del holding: contratos, reglas, estructura y modelo legal. Todo está diseñado para ser transparente y comprensible.",
    sections: [
      {
        title: "Estructura legal",
        items: [
          "Modelo de socios basado en UG / GmbH.",
          "Empresas independientes bajo una marca.",
          "Porcentaje fijo de red — 8%.",
        ],
      },
      {
        title: "Documentos principales",
        items: [
          "Modelo de distribución de beneficios — /profit.",
          "Contrato entre holding y empresa asociada (próximamente).",
          "Acuerdo interno entre socios (próximamente).",
        ],
      },
      {
        title: "Hojas de ruta",
        items: [
          "Crecimiento de la red y nuevas empresas.",
          "Modelo de automatización.",
          "Expansión a otros países de la UE.",
        ],
      },
    ],
  },
};

const DocumentsPage: React.FC = () => {
  const { language } = useLanguage();
  const t = documentsText[language] ?? documentsText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Заголовок и описание раздела */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <div className="space-y-2 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
              {t.title}
            </h1>
            <p className="text-sm text-zinc-600">{t.subtitle}</p>
          </div>
        </header>

        {/* Блоки с типами документов */}
        <section className="grid gap-6 lg:grid-cols-3">
          {t.sections.map((sec, i) => (
            <article key={i} className="card space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                {sec.title}
              </h2>
              <ul className="text-sm text-zinc-700 list-disc list-inside space-y-1">
                {sec.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default DocumentsPage;
