import React from "react";
import { useLanguage } from "../context/LanguageContext";

const driversText: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    blocks: {
      title: string;
      items: string[];
    }[];
    pathTitle: string;
    steps: string[];
    note: string;
  }
> = {
  ru: {
    badge: "Mobil Truck • для водителей",
    title: "Работа водителем в Mobil Truck",
    subtitle:
      "Mobil Truck — это не просто компания. Это сеть, в которой водитель знает, откуда берётся его доход, как считаются рейсы и что он может получить в будущем. Всё честно, без магии и скрытых списаний.",
    blocks: [
      {
        title: "Что мы предлагаем",
        items: [
          "Работа на современных грузовиках европейского парка.",
          "Маршруты по ЕС, без «серых» схем.",
          "Стабильная загрузка и прозрачные условия.",
          "Режимы труда и отдыха строго по правилам ЕС.",
          "Поддержка 24/7 по технике, документам и навигации.",
        ],
      },
      {
        title: "Требования",
        items: [
          "Категория CE.",
          "Опыт по Европе желателен, но не обязателен.",
          "Дисциплина, ответственность и аккуратность.",
          "Готовность учиться и расти.",
          "Желание перейти со временем в партнёры (по желанию).",
        ],
      },
      {
        title: "Как считаются выплаты",
        items: [
          "Фиксированная ставка + бонусы за рейсы / километры.",
          "Все расчёты прозрачны: водитель видит экономику рейса.",
          "Никаких скрытых удержаний.",
          "Отдельные премии за экономичность, надёжность и дисциплину.",
          "Возможность участия в доходе компании (при переходе в партнёры).",
        ],
      },
    ],
    pathTitle: "Путь водителя в холдинге",
    steps: [
      "1. Начать водителем — понять реальные процессы, маршруты и расчёты.",
      "2. Повысить квалификацию — техника, документы, работа с платформой.",
      "3. Стать партнёром — открыть свою компанию в структуре Mobil Truck.",
      "4. Построить свою ветку — подключить других водителей и заработать сетевой процент.",
    ],
    note: "Если хочешь обсудить детали — напиши через страницу «Присоединиться» или на форуме. Отвечаем быстро.",
  },

  en: {
    badge: "Mobil Truck • for drivers",
    title: "Driving for Mobil Truck",
    subtitle:
      "Mobil Truck is not just a company. It’s a network where the driver understands how pay is calculated, how routes work, and what opportunities exist for the future. Honest and transparent.",
    blocks: [
      {
        title: "What we offer",
        items: [
          "Modern European trucks.",
          "EU routes only, no shady schemes.",
          "Stable workload and transparent terms.",
          "Work & rest hours strictly by EU rules.",
          "24/7 support for documents, navigation and truck issues.",
        ],
      },
      {
        title: "Requirements",
        items: [
          "CE category.",
          "Experience in the EU is welcome, but not required.",
          "Discipline and responsibility.",
          "Willingness to learn.",
          "Optional: grow into a partner in the future.",
        ],
      },
      {
        title: "How pay is calculated",
        items: [
          "Fixed salary + bonuses per trip / km.",
          "Transparent economics — driver sees real numbers.",
          "No hidden deductions.",
          "Extra bonuses for efficiency and discipline.",
          "Possibility to grow into profit-sharing as a partner.",
        ],
      },
    ],
    pathTitle: "Driver path in the holding",
    steps: [
      "1. Start as a driver — learn routes, processes and economics.",
      "2. Improve qualification — technique and platform.",
      "3. Become a partner — open your own company under Mobil Truck.",
      "4. Build your branch — connect other drivers and earn the network percent.",
    ],
    note: "If you want details — write via the Join page or ask in the forum.",
  },

  de: {
    badge: "Mobil Truck • für Fahrer",
    title: "Arbeiten als Fahrer bei Mobil Truck",
    subtitle:
      "Mobil Truck ist nicht nur eine Firma. Es ist ein Netzwerk, in dem der Fahrer versteht, wie die Auszahlungen berechnet werden, wie die Routen funktionieren und welche Zukunftschancen bestehen.",
    blocks: [
      {
        title: "Was wir anbieten",
        items: [
          "Moderne europäische Lkw.",
          "EU-Strecken ohne Grauzonen.",
          "Stabile Auslastung und klare Bedingungen.",
          "Arbeits- und Ruhezeiten streng nach EU-Regeln.",
          "24/7 Unterstützung bei Technik, Dokumenten und Navigation.",
        ],
      },
      {
        title: "Anforderungen",
        items: [
          "Führerschein CE.",
          "EU-Erfahrung erwünscht, aber nicht erforderlich.",
          "Disziplin und Zuverlässigkeit.",
          "Lernbereitschaft.",
          "Optional: später Partner werden.",
        ],
      },
      {
        title: "Wie die Bezahlung berechnet wird",
        items: [
          "Fester Lohn + Bonus pro Fahrt / km.",
          "Transparente Zahlen, keine versteckten Abzüge.",
          "Zusätzliche Prämien für Effizienz und Disziplin.",
          "Möglichkeit, später am Gewinn beteiligt zu werden.",
        ],
      },
    ],
    pathTitle: "Der Weg des Fahrers",
    steps: [
      "1. Fahrerstart — Prozesse, Routen und Abrechnung verstehen.",
      "2. Qualifikation erhöhen — Technik, Dokumente, Plattform.",
      "3. Partner werden — eigene Firma unter Mobil Truck gründen.",
      "4. Eigenen Ast aufbauen — andere Fahrer einbinden und Netzwerkprozente verdienen.",
    ],
    note: "Wenn du Details willst — schreib über die Seite „Join“ oder im Forum.",
  },

  es: {
    badge: "Mobil Truck • para conductores",
    title: "Trabajo para conductores en Mobil Truck",
    subtitle:
      "Mobil Truck no es solo una empresa. Es una red donde el conductor entiende cómo se calcula el pago, cómo funcionan las rutas y qué oportunidades existen para el futuro.",
    blocks: [
      {
        title: "Lo que ofrecemos",
        items: [
          "Camiones modernos europeos.",
          "Rutas dentro de la UE, sin esquemas dudosos.",
          "Carga estable y reglas claras.",
          "Horas de trabajo y descanso según normativa europea.",
          "Soporte 24/7 para documentación, navegación y técnica.",
        ],
      },
      {
        title: "Requisitos",
        items: [
          "Categoría CE.",
          "Experiencia en la UE bienvenida, no obligatoria.",
          "Disciplina y responsabilidad.",
          "Ganas de aprender.",
          "Opción de convertirse en socio más adelante.",
        ],
      },
      {
        title: "Cómo se calcula el salario",
        items: [
          "Salario fijo + bonos por viaje/kilómetro.",
          "Transparencia total en los cálculos.",
          "Sin deducciones ocultas.",
          "Premios adicionales por eficiencia.",
          "Posibilidad de participación como socio.",
        ],
      },
    ],
    pathTitle: "Camino del conductor",
    steps: [
      "1. Empezar como conductor — aprender rutas y procesos.",
      "2. Mejorar la cualificación.",
      "3. Convertirse en socio — abrir una empresa propia en Mobil Truck.",
      "4. Construir su propia rama — integrar nuevos conductores.",
    ],
    note: "Si quieres detalles — escribe en la página «Join» o en el foro.",
  },
};

const DriversPage: React.FC = () => {
  const { language } = useLanguage();
  const t = driversText[language] ?? driversText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Верхний блок: бейдж + заголовок + подзаголовок */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
              {t.title}
            </h1>
            <p className="text-sm text-zinc-600 max-w-2xl">{t.subtitle}</p>
          </div>
        </header>

        {/* Основные блоки */}
        <section className="grid gap-6 lg:grid-cols-3">
          {t.blocks.map((block, index) => (
            <article
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3"
            >
              <h2 className="text-lg font-semibold text-zinc-900">
                {block.title}
              </h2>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Путь водителя */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">{t.pathTitle}</h2>
          <ol className="text-sm text-zinc-700 space-y-1 list-decimal list-inside">
            {t.steps.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <p className="text-xs text-zinc-500">{t.note}</p>
        </section>
      </div>
    </main>
  );
};

export default DriversPage;
