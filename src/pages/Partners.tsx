import React from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";

type Block = {
  title: string;
  items: string[];
};

type PartnersContent = {
  badge: string;
  badgeHint: string;
  title: string;
  intro: string;
  blocks: Block[];
};

const partnersText: Record<Language, PartnersContent> = {
  ru: {
    badge: "Mobil Truck • для партнёров и предпринимателей",
    badgeHint:
      "Холдинговая платформа для тех, кто хочет открыть свою компанию под единым брендом и строить ветку.",
    title: "Партнёрам и владельцам компаний",
    intro:
      "Mobil Truck — это холдинговая платформа. Ты можешь открыть свою компанию (UG/GmbH), работать под единым брендом и строить собственную ветку, получая пассивный доход по понятной формуле.",
    blocks: [
      {
        title: "Что даёт холдинг",
        items: [
          "Бренд и репутацию, которые не надо строить с нуля.",
          "Доступ к общей клиентской базе и контрактам.",
          "Типовые договоры, упаковку услуг, базовый документооборот.",
          "IT-инфраструктуру: сайт, домены, общие сервисы.",
          "Поддержку по запуску фирмы (UG/GmbH) и настройке процессов.",
        ],
      },
      {
        title: "Что остаётся за партнёром",
        items: [
          "Управление своей компанией: персонал, техника, дисциплина.",
          "Повседневная операционная деятельность.",
          "Соблюдение стандартов Mobil Truck по сервису и безопасности.",
          "Честная отчётность и прозрачные расчёты с холдингом.",
          "Развитие собственной ветки (по желанию).",
        ],
      },
      {
        title: "Как ты зарабатываешь",
        items: [
          "Прибыль своей компании после всех расходов.",
          "Сетевой процент с компаний, которые ты создаёшь (4% с их прибыли).",
          "Доля от сетевых процентов, если над тобой строятся новые уровни.",
          "Премии и бонусы по внутренним программам холдинга.",
          "Рост стоимости бизнеса при расширении ветки.",
        ],
      },
    ],
  },

  en: {
    badge: "Mobil Truck • for partners and company owners",
    badgeHint:
      "Holding platform for those who want to open their own company under a common brand and build a branch.",
    title: "For partners and company owners",
    intro:
      "Mobil Truck is a holding platform. You can open your own company (UG/GmbH), work under a shared brand and build your own branch while receiving passive income by a clear formula.",
    blocks: [
      {
        title: "What the holding provides",
        items: [
          "Brand and reputation — no need to build everything from scratch.",
          "Access to the shared client base and contracts.",
          "Template contracts, service packaging and basic paperwork.",
          "IT infrastructure: website, domains, shared services.",
          "Support with company setup (UG/GmbH) and process tuning.",
        ],
      },
      {
        title: "What stays under your control",
        items: [
          "Management of your company: staff, trucks, discipline.",
          "Everyday operational activities.",
          "Compliance with Mobil Truck standards for service and safety.",
          "Honest reporting and transparent settlements with the holding.",
          "Development of your own branch (if you wish).",
        ],
      },
      {
        title: "How you earn",
        items: [
          "Profit of your own company after all expenses.",
          "Network percentage from the companies you create (4% of their profit).",
          "Share of network percentages when new levels are built above you.",
          "Bonuses and rewards from internal programs of the holding.",
          "Growth of business value as your branch expands.",
        ],
      },
    ],
  },

  de: {
    badge: "Mobil Truck • für Partner und Inhaber",
    badgeHint:
      "Holding-Plattform für alle, die eine eigene Firma unter einer gemeinsamen Marke gründen und einen Zweig aufbauen wollen.",
    title: "Für Partner und Firmeninhaber",
    intro:
      "Mobil Truck ist eine Holding-Plattform. Du kannst deine eigene Firma (UG/GmbH) gründen, unter der Marke Mobil Truck arbeiten und deinen eigenen Zweig aufbauen – mit passivem Einkommen nach einer klaren Formel.",
    blocks: [
      {
        title: "Was der Holding gibt",
        items: [
          "Marke und Reputation – ohne alles von Null aufzubauen.",
          "Zugang zu gemeinsamem Kundenstamm und Verträgen.",
          "Standardverträge, Service-Verpackung und Basis-Dokumentenfluss.",
          "IT-Infrastruktur: Website, Domains, gemeinsame Services.",
          "Unterstützung bei Gründung (UG/GmbH) und beim Einrichten der Prozesse.",
        ],
      },
      {
        title: "Was beim Partner bleibt",
        items: [
          "Führung des eigenen Unternehmens: Personal, Fahrzeuge, Disziplin.",
          "Tägliche operative Tätigkeit.",
          "Einhaltung der Mobil-Truck-Standards für Service und Sicherheit.",
          "Ehrliche Berichte und transparente Abrechnung mit dem Holding.",
          "Aufbau des eigenen Zweigs (wenn gewünscht).",
        ],
      },
      {
        title: "Wie du verdienst",
        items: [
          "Gewinn deines eigenen Unternehmens nach allen Kosten.",
          "Netzwerk-Prozent von Firmen, die du gründest (4 % ihres Gewinns).",
          "Anteil an Netzwerk-Prozenten, wenn über dir neue Ebenen entstehen.",
          "Prämien und Boni aus internen Programmen des Holdings.",
          "Wachstum des Unternehmenswertes beim Ausbau deines Zweigs.",
        ],
      },
    ],
  },

  es: {
    badge: "Mobil Truck • para socios y propietarios",
    badgeHint:
      "Plataforma holding para quienes quieren abrir su propia empresa bajo una marca común y construir su propia rama.",
    title: "Para socios y dueños de empresas",
    intro:
      "Mobil Truck es una plataforma holding. Puedes abrir tu propia empresa (UG/GmbH), trabajar bajo la marca Mobil Truck y construir tu rama, recibiendo ingresos pasivos según una fórmula clara.",
    blocks: [
      {
        title: "Qué aporta el holding",
        items: [
          "Marca y reputación sin empezar desde cero.",
          "Acceso a la base de clientes y contratos comunes.",
          "Contratos tipo, empaquetado de servicios y flujo básico de documentos.",
          "Infraestructura IT: web, dominios y servicios compartidos.",
          "Apoyo para crear la empresa (UG/GmbH) y ajustar los procesos.",
        ],
      },
      {
        title: "Qué permanece en manos del socio",
        items: [
          "Gestión de su empresa: personal, flota, disciplina.",
          "Actividad operativa diaria.",
          "Cumplimiento de los estándares de Mobil Truck en servicio y seguridad.",
          "Informes honestos y liquidaciones transparentes con el holding.",
          "Desarrollo de su propia rama (si lo desea).",
        ],
      },
      {
        title: "Cómo ganas dinero",
        items: [
          "Beneficio de tu propia empresa después de todos los gastos.",
          "Porcentaje de red de las empresas que creas (4 % de su beneficio).",
          "Parte de los porcentajes de red cuando se construyen nuevos niveles sobre ti.",
          "Primas y bonos según los programas internos del holding.",
          "Crecimiento del valor del negocio al ampliar tu rama.",
        ],
      },
    ],
  },
};

export default function PartnersPage() {
  const { language } = useLanguage();
  const t = partnersText[language];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-8">
        {/* бейдж и подсказка */}
        <section className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>
          <p className="text-xs text-zinc-500 max-w-3xl">{t.badgeHint}</p>
        </section>

        {/* заголовок и интро */}
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
            {t.intro}
          </p>
        </header>

        {/* три карточки */}
        <section className="grid gap-6 lg:grid-cols-3">
          {t.blocks.map((block, index) => (
            <div key={index} className="card space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                {block.title}
              </h2>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <p className="text-xs text-zinc-500 max-w-3xl pt-2">
          Позже здесь можно будет добавить конкретные примеры веток, реальные
          цифры по доходности и ссылки на документы — чтобы партнёр видел не
          маркетинг, а честную модель.
        </p>
      </div>
    </main>
  );
}
