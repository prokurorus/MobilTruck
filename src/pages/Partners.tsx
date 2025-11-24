import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const partnersText: Record<
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
    badge: "Mobil Truck • для партнёров и предпринимателей",
    title: "Партнёрам и владельцам компаний",
    subtitle:
      "Mobil Truck — это холдинговая платформа. Ты можешь открыть свою компанию (UG/GmbH), работать под единым брендом и строить собственную ветку, получая пассивный доход по понятной формуле.",

    blocks: [
      {
        title: "Что даёт холдинг",
        items: [
          "Бренд и репутацию, которые не надо строить с нуля.",
          "Доступ к общей клиентской базе и контрактам.",
          "Типовые договоры, упаковку услуг, базовый документооборот.",
          "IT-инфраструктуру: сайт, домены, общие сервисы.",
          "Поддержку по запуску фирмы (UG/GmbH) и настройке процессов."
        ]
      },
      {
        title: "Что остаётся за партнёром",
        items: [
          "Управление своей компанией: персонал, техника, дисциплина.",
          "Повседневная операционная деятельность.",
          "Соблюдение стандартов Mobil Truck по сервису и безопасности.",
          "Честная отчётность и прозрачные расчёты с холдингом.",
          "Развитие собственной ветки (по желанию)."
        ]
      },
      {
        title: "Как ты зарабатываешь",
        items: [
          "Прибыль своей компании после всех расходов.",
          "Сетевой процент с компаний, которые ты создаёшь (4% с их прибыли).",
          "Доля от сетевых процентов, если над тобой строятся новые уровни.",
          "Премии и бонусы по внутренним программам холдинга.",
          "Рост стоимости бизнеса при расширении ветки."
        ]
      }
    ],

    pathTitle: "Путь партнёра в Mobil Truck",
    steps: [
      "1. Обсудить условия — понять модель, обязанности и перспективу.",
      "2. Зарегистрировать свою компанию (UG/GmbH) в Германии или другой юрисдикции по согласованию.",
      "3. Подписать договор с холдингом и подключиться к общей структуре.",
      "4. Нанять водителей / подключить технику, выйти на первые рейсы.",
      "5. Запустить свою ветку — помочь другим открыть компании и получать с них сетевой процент."
    ],

    note: "Эта страница — краткий обзор. Все детали фиксируются в договорах. Если хочешь обсудить вход, напиши через «Присоединиться» или напрямую основателю."
  },

  en: {
    badge: "Mobil Truck • for partners and entrepreneurs",
    title: "For partners and company owners",
    subtitle:
      "Mobil Truck is a holding platform. You can open your own company (UG/GmbH), work under a common brand and build your own branch, earning passive income through a clear formula.",

    blocks: [
      {
        title: "What the holding provides",
        items: [
          "Brand and reputation you don’t need to build from scratch.",
          "Access to a common client base and contracts.",
          "Standard contracts, service packaging and basic admin support.",
          "IT infrastructure: website, domains, shared tools.",
          "Support in setting up your company (UG/GmbH) and processes."
        ]
      },
      {
        title: "What remains your responsibility",
        items: [
          "Managing your company: staff, trucks, discipline.",
          "Daily operations.",
          "Following Mobil Truck standards for service and safety.",
          "Honest reporting and transparent settlements with the holding.",
          "Developing your own branch (if you choose to)."
        ]
      },
      {
        title: "How you earn",
        items: [
          "Profit of your own company after all costs.",
          "Network percent from companies you create (4% of their profit).",
          "Share of network percent if branches grow above you.",
          "Bonuses under internal holding programs.",
          "Growth in business value as your branch expands."
        ]
      }
    ],

    pathTitle: "Partner path in Mobil Truck",
    steps: [
      "1. Discuss conditions — understand model, responsibilities and perspective.",
      "2. Register your company (UG/GmbH) in Germany or another agreed jurisdiction.",
      "3. Sign a contract with the holding and connect to the structure.",
      "4. Hire drivers / connect trucks and start operations.",
      "5. Build your branch — help others start companies and receive network percent from them."
    ],

    note: "This page is a short overview. Details are fixed in contracts. If you’re interested, write via the Join page or contact the founder directly."
  },

  de: {
    badge: "Mobil Truck • für Partner und Unternehmer",
    title: "Für Partner und Firmeninhaber",
    subtitle:
      "Mobil Truck ist eine Holding-Plattform. Du kannst deine eigene Firma (UG/GmbH) gründen, unter der gemeinsamen Marke arbeiten und deinen eigenen Ast aufbauen.",

    blocks: [
      {
        title: "Was der Holdingverbund bietet",
        items: [
          "Marke und Ruf, die du nicht von null aufbauen musst.",
          "Zugang zu gemeinsamer Kundenbasis und Verträgen.",
          "Standardverträge, Leistungsbeschreibung, Grunddokumentation.",
          "IT-Infrastruktur: Website, Domains, gemeinsame Tools.",
          "Unterstützung bei der Gründung deiner UG/GmbH und der Prozessgestaltung."
        ]
      },
      {
        title: "Was in deiner Verantwortung bleibt",
        items: [
          "Führung deiner Firma: Personal, Fahrzeuge, Disziplin.",
          "Tägliches operative Geschäft.",
          "Einhaltung der Mobil-Truck-Standards für Service und Sicherheit.",
          "Ehrliche Berichte und transparente Abrechnung mit der Holding.",
          "Aufbau eines eigenen Astes (wenn du willst)."
        ]
      },
      {
        title: "Womit du verdienst",
        items: [
          "Gewinn deiner eigenen Firma nach allen Kosten.",
          "Netzwerkprozent von Firmen, die du gründest (4 % ihres Gewinns).",
          "Anteil an Netzwerkprozenten, wenn über dir weitere Ebenen entstehen.",
          "Boni aus internen Programmen der Holding.",
          "Wertzuwachs deines Unternehmens beim Ausbau des Astes."
        ]
      }
    ],

    pathTitle: "Der Weg des Partners bei Mobil Truck",
    steps: [
      "1. Bedingungen besprechen – Modell, Pflichten und Perspektive verstehen.",
      "2. Eigene Firma (UG/GmbH) gründen.",
      "3. Vertrag mit der Holding unterschreiben und Strukturanschluss herstellen.",
      "4. Fahrer einstellen / Fahrzeuge anbinden und in den Betrieb starten.",
      "5. Eigenen Ast aufbauen – anderen beim Start ihrer Firmen helfen und Netzwerkprozente erhalten."
    ],

    note: "Die Details stehen in den Verträgen. Wenn du Interesse hast, melde dich über die Seite „Join“ oder direkt beim Gründer."
  },

  es: {
    badge: "Mobil Truck • para socios y emprendedores",
    title: "Para socios y propietarios de empresas",
    subtitle:
      "Mobil Truck es una plataforma holding. Puedes abrir tu propia empresa (UG/GmbH), trabajar bajo la marca común y construir tu propia rama.",

    blocks: [
      {
        title: "Lo que ofrece el holding",
        items: [
          "Marca y reputación listas para usar.",
          "Acceso a la base de clientes y contratos comunes.",
          "Contratos estándar e infraestructura básica.",
          "Infraestructura IT: web, dominios, herramientas comunes.",
          "Apoyo para crear tu empresa y organizar los procesos."
        ]
      },
      {
        title: "Lo que sigue siendo tu responsabilidad",
        items: [
          "Gestión de tu empresa: personal, camiones, disciplina.",
          "Operación diaria.",
          "Cumplir los estándares de Mobil Truck.",
          "Informes claros y acuerdos transparentes con el holding.",
          "Desarrollar tu propia rama (si lo deseas)."
        ]
      },
      {
        title: "Cómo ganas",
        items: [
          "Beneficio de tu propia empresa.",
          "Porcentaje de red de las empresas que creas (4 % de su beneficio).",
          "Parte de los porcentajes de red si se crean niveles por encima de ti.",
          "Bonos internos del holding.",
          "Mayor valor de tu negocio a medida que crece tu rama."
        ]
      }
    ],

    pathTitle: "Camino del socio en Mobil Truck",
    steps: [
      "1. Hablar de condiciones — entender el modelo y las responsabilidades.",
      "2. Registrar tu empresa (UG/GmbH).",
      "3. Firmar contrato con el holding y conectarse a la estructura.",
      "4. Incorporar conductores / camiones y empezar a trabajar.",
      "5. Construir tu propia rama — ayudar a otros a crear empresas y recibir el porcentaje de red."
    ],

    note: "Los detalles se fijan en los contratos. Si te interesa, escribe en la página «Join» o contacta directamente con el fundador."
  }
};

const PartnersPage: React.FC = () => {
  const { language } = useLanguage();
  const t = partnersText[language] ?? partnersText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        <div className="flex items-start justify-between gap-4">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
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

          <LanguageSwitcher />
        </div>

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

        <section className="card space-y-3">
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

export default PartnersPage;
