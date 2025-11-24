import React from "react";
import { useLanguage } from "../context/LanguageContext";

type Section = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type StructureCopy = {
  badge: string;
  title: string;
  subtitle: string;
  sections: Section[];
  footerNote: string;
};

const structureText: Record<string, StructureCopy> = {
  ru: {
    badge: "Mobil Truck • структура холдинга",
    title: "Как устроен холдинг Mobil Truck",
    subtitle:
      "Mobil Truck — это не одна фирма, а сеть компаний, связанных единой моделью. Эта страница показывает, как распределяются роли, ответственность и риски между головной компанией, партнёрами и службами поддержки.",
    sections: [
      {
        title: "1. Зачем нужна структура",
        paragraphs: [
          "Классическая транспортная компания держится на одном человеке: он же владелец, он же диспетчер, он же кадровик и юрист. Это рискованно и плохо масштабируется.",
          "Структура Mobil Truck строится так, чтобы нагрузка и риски были распределены. Каждая компания отвечает за свою операционную работу, а холдинг берёт на себя стратегию, юридическую опору, фонды и IT-инфраструктуру."
        ],
        items: [
          "головная компания задаёт правила и обеспечивает защиту;",
          "партнёрские компании работают с водителями и клиентами;",
          "службы поддержки помогают считать, планировать и развиваться;",
          "риски и ответственность распределены по всей сети, а не сосредоточены в одной точке."
        ]
      },
      {
        title: "2. Уровни холдинга",
        paragraphs: ["В схеме Mobil Truck можно выделить несколько уровней."],
        items: [
          "Головная компания — ядро холдинга, владеет контрольными пакетами (обычно 51%) в партнёрских компаниях, ведёт консолидированную отчётность, управляет фондами, IT и логистикой.",
          "Партнёрские компании — самостоятельные юридические лица, принадлежащие местным предпринимателям (49%) и холдингу (51%). Они нанимают водителей, несут ответственность за технику и выполняют рейсы.",
          "Основатели веток — предприниматели, которые запускают несколько компаний и получают сетевой доход по модели 8%. Они помогают другим встать на ноги и следят за качеством в своей ветке.",
          "Службы поддержки — юристы, бухгалтерия, IT, логистика, обучение. Они не забирают прибыль у компаний, а усиливают их."
        ]
      },
      {
        title: "3. Кто за что отвечает",
        paragraphs: [
          "Чтобы не было хаоса, важно чётко понимать зону ответственности каждого уровня."
        ],
        items: [
          "Головная компания: стратегия, стандарты, фонды, IT-системы, ключевые договоры с крупными клиентами и банками.",
          "Партнёрская компания: операционная работа, наём и управление водителями, состояние транспорта, локальные клиенты и ежедневные решения.",
          "Основатель ветки: развитие сети на своём уровне, помощь новым партнёрам, контроль качества и соблюдение принципов Mobil Truck.",
          "Водители: безопасная и аккуратная работа на линии, корректное ведение документов, соблюдение режима труда и отдыха."
        ]
      },
      {
        title: "4. Распределение рисков",
        paragraphs: [
          "Одна из главных идей Mobil Truck — не складывать все яйца в одну корзину. Вместо одной гигантской компании создаётся сеть юридически самостоятельных фирм.",
          "Если одна из компаний временно сталкивается с проблемами, это не останавливает весь холдинг: другие компании продолжают работать, а фонды и головная компания помогают пройти сложный период."
        ],
        items: [
          "риски по долгам и обязательствам разделены между разными юридическими лицами;",
          "репутационные риски локализуются — одна ошибка не тянет всю сеть вниз;",
          "фонды развития и резервный фонд помогают выравнивать ситуацию и поддерживать партнёров."
        ]
      },
      {
        title: "5. Как принимаются решения",
        paragraphs: [
          "Операционные решения принимаются как можно ближе к месту, где происходит работа. Это задача партнёрской компании и её руководителя.",
          "Стратегические решения, развитие IT, открытие новых стран и крупных направлений — зона ответственности головной компании и ключевых партнёров.",
          "Так появляется баланс: каждая компания свободна в своём ежедневном управлении, но при этом двигается внутри общей логики холдинга."
        ]
      },
      {
        title: "6. Где в этой схеме место водителя и предпринимателя",
        paragraphs: [
          "Водитель видит только часть структуры — свою компанию, диспетчеров, технику и условия работы. Но за этим стоит целая система, которая обеспечивает стабильность рейсов и выплат.",
          "Предприниматель, становясь партнёром Mobil Truck, получает доступ ко всей этой архитектуре: фондам, IT, логистике и возможности строить свою ветку."
        ],
        items: [
          "для водителя структура — это гарантия, что компания не держится на одном человеке и не исчезнет из-за одной ошибки;",
          "для партнёра — это понятная лестница роста и защита от одиночной борьбы с бюрократией и рынком."
        ]
      }
    ],
    footerNote:
      "Эта схема — технический каркас. На её основе можно строить договоры, финансовые модели и планы развития холдинга в отдельных странах ЕС."
  },

  en: {
    badge: "Mobil Truck • holding structure",
    title: "How the Mobil Truck holding is organised",
    subtitle:
      "Mobil Truck is not a single company but a network of companies connected by one model. This page explains how roles, responsibilities and risks are distributed between the head company, partners and support services.",
    sections: [
      {
        title: "1. Why structure matters",
        paragraphs: [
          "A traditional transport company often depends on one person: the owner is also the dispatcher, HR and accountant. This is risky and hard to scale.",
          "Mobil Truck is built so that workload and risks are distributed. Each company is responsible for daily operations, while the holding takes care of strategy, legal framework, funds and IT infrastructure."
        ],
        items: [
          "the head company sets rules and provides protection;",
          "partner companies work with drivers and clients;",
          "support services help to calculate, plan and grow;",
          "risks are spread across the network instead of being concentrated in one place."
        ]
      },
      {
        title: "2. Levels of the holding",
        paragraphs: ["There are several levels inside the Mobil Truck scheme:"],
        items: [
          "Head company – the core of the holding. It holds controlling stakes (usually 51%), manages consolidated reporting, funds, IT and central logistics.",
          "Partner companies – independent legal entities owned by local entrepreneurs (49%) and the holding (51%). They hire drivers, manage vehicles and run daily operations.",
          "Branch founders – entrepreneurs who launch multiple companies and receive network income under the 8% model. They help new partners and control quality in their branch.",
          "Support services – legal, accounting, IT, logistics and training. They don't take profit away; they make companies stronger."
        ]
      },
      {
        title: "3. Who is responsible for what",
        paragraphs: [
          "To avoid chaos, each level has its clear area of responsibility."
        ],
        items: [
          "Head company: strategy, standards, funds, IT systems, major contracts with key clients and banks.",
          "Partner company: operations, drivers, vehicles, local clients and daily decisions.",
          "Branch founder: network growth on their level, support for new partners, quality and compliance with Mobil Truck principles.",
          "Drivers: safe work on the road, proper documents, compliance with EU working and rest time rules."
        ]
      },
      {
        title: "4. Risk distribution",
        paragraphs: [
          "One of the core ideas of Mobil Truck is not to put all eggs in one basket. Instead of a single giant company, the holding consists of many independent legal entities.",
          "If one company faces temporary difficulties, the holding does not collapse: other companies continue to work, and funds plus the head company help to stabilise the situation."
        ],
        items: [
          "financial and legal risks are split between different entities;",
          "reputational risks are localised – one mistake does not drag the whole network down;",
          "development and reserve funds help to support partners in tough periods."
        ]
      },
      {
        title: "5. How decisions are made",
        paragraphs: [
          "Operational decisions are made as close to the work as possible – on the level of each partner company.",
          "Strategic decisions, IT development, entering new countries and large directions are handled by the head company and key partners.",
          "This creates a balance: each company is free in its daily management but moves inside a clear, shared framework."
        ]
      },
      {
        title: "6. Where drivers and entrepreneurs fit in",
        paragraphs: [
          "A driver usually sees only his company: the truck, the dispatcher, the routes and the conditions. Behind this there is a system that keeps things stable.",
          "An entrepreneur who becomes a Mobil Truck partner gets access to this architecture: funds, IT, logistics and the ability to build his own branch."
        ],
        items: [
          "for the driver, structure is a guarantee that everything does not depend on one person;",
          "for the partner, it is a growth ladder and protection from fighting the market alone."
        ]
      }
    ],
    footerNote:
      "This scheme is a technical framework. On top of it, contracts, financial models and national growth plans for the holding can be built."
  },

  de: {
    badge: "Mobil Truck • Struktur des Holdings",
    title: "Wie der Mobil-Truck-Holding aufgebaut ist",
    subtitle:
      "Mobil Truck ist kein einzelnes Unternehmen, sondern ein Netzwerk von Firmen mit einem gemeinsamen Modell. Diese Seite erklärt, wie Rollen, Verantwortung und Risiken zwischen Muttergesellschaft, Partnern und Support-Diensten verteilt sind.",
    sections: [
      {
        title: "1. Warum Struktur wichtig ist",
        paragraphs: [
          "In einer klassischen Spedition hängt vieles an einer Person: Der Inhaber ist zugleich Disponent, Personalchef und Buchhalter. Das ist riskant und schwer skalierbar.",
          "Die Struktur von Mobil Truck ist so aufgebaut, dass Last und Risiken verteilt werden. Jede Firma ist für ihren operativen Betrieb verantwortlich, mientras der Holding sich um Strategie, Recht, Fonds und IT-Infrastruktur kümmert."
        ],
        items: [
          "die Muttergesellschaft setzt Regeln und bietet Schutz;",
          "Partnerfirmen arbeiten mit Fahrern und Kunden;",
          "Support-Dienste helfen beim Rechnen, Planen und Wachsen;",
          "Risiken werden im Netzwerk verteilt und nicht an einer Stelle gebündelt."
        ]
      },
      {
        title: "2. Ebenen im Holding",
        paragraphs: ["Im Mobil-Truck-Modell gibt es mehrere Ebenen:"],
        items: [
          "Muttergesellschaft – Kern des Holdings. Hält in der Regel 51 % der Anteile, führt konsolidierte Abschlüsse, verwaltet Fonds, IT und zentrale Logistik.",
          "Partnerfirmen – eigenständige juristische Personen, die lokalen Unternehmern (49 %) und dem Holding (51 %) gehören. Sie beschäftigen Fahrer, betreiben Fahrzeuge und organisieren den täglichen Betrieb.",
          "Zweiggründer – Unternehmer, die mehrere Firmen aufbauen und nach dem 8%-Netzwerkmodell Einkommen erzielen. Sie unterstützen neue Partner und achten auf Qualität in ihrem Zweig.",
          "Support-Dienste – Recht, Buchhaltung, IT, Logistik, Schulung. Sie nehmen den Firmen kein Geld weg, sondern stärken sie."
        ]
      },
      {
        title: "3. Wer wofür verantwortlich ist",
        paragraphs: [
          "Um Chaos zu vermeiden, ist für jede Ebene klar definiert, wofür sie verantwortlich ist."
        ],
        items: [
          "Muttergesellschaft: Strategie, Standards, Fonds, IT-Systeme, große Verträge mit Schlüssel-Kunden und Banken.",
          "Partnerfirma: operatives Geschäft, Fahrer, Fahrzeuge, lokale Kunden und tägliche Entscheidungen.",
          "Zweiggründer: Wachstum des Netzwerks im eigenen Bereich, Unterstützung neuer Partner, Qualität und Einhaltung der Prinzipien von Mobil Truck.",
          "Fahrer: sichere Arbeit auf der Straße, korrekte Dokumente, Einhaltung von Lenk- und Ruhezeiten."
        ]
      },
      {
        title: "4. Verteilung von Risiken",
        paragraphs: [
          "Eine der Grundideen von Mobil Truck ist es, nicht alles auf eine Karte zu setzen. Statt eines riesigen Unternehmens gibt es viele getrennte juristische Personen.",
          "Wenn eine Firma vorübergehend in Schwierigkeiten gerät, bricht der Holding nicht zusammen: andere Firmen arbeiten weiter und Fonds plus Muttergesellschaft helfen, die Lage zu stabilisieren."
        ],
        items: [
          "finanzielle und rechtliche Risiken werden auf mehrere Firmen verteilt;",
          "Reputationsrisiken werden lokal gehalten – ein Fehler zieht nicht das gesamte Netzwerk herunter;",
          "Entwicklungs- und Reservefonds unterstützen Partner in schwierigen Zeiten."
        ]
      },
      {
        title: "5. Wie Entscheidungen getroffen werden",
        paragraphs: [
          "Operative Entscheidungen werden so nah wie möglich am Geschehen getroffen – auf Ebene der Partnerfirmen.",
          "Strategische Fragen, IT-Entwicklung, neue Länder und große Projekte liegen bei der Muttergesellschaft und den Schlüsselpartnern.",
          "So entsteht ein Gleichgewicht: Jede Firma ist im Alltag frei, bewegt sich aber innerhalb eines klaren gemeinsamen Rahmens."
        ]
      },
      {
        title: "6. Platz von Fahrern und Unternehmern",
        paragraphs: [
          "Der Fahrer sieht meist nur seine Firma: Lkw, Disponent, Routen und Arbeitsbedingungen. Dahinter steht jedoch ein System, das für Stabilität sorgt.",
          "Ein Unternehmer, der Partner von Mobil Truck wird, erhält Zugang zu dieser Struktur: Fonds, IT, Logistik und der Möglichkeit, einen eigenen Zweig aufzubauen."
        ],
        items: [
          "für den Fahrer ist die Struktur eine Garantie, dass nicht alles an einer Person hängt;",
          "für den Partner ist sie eine Wachstumstreppe und ein Schutz davor, allein gegen den Markt zu kämpfen."
        ]
      }
    ],
    footerNote:
      "Diese Struktur ist ein technisches Gerüst. Darauf lassen sich Verträge, Finanzmodelle und Wachstumspläne für einzelne EU-Länder aufbauen."
  },

  es: {
    badge: "Mobil Truck • estructura del holding",
    title: "Cómo está organizado el holding Mobil Truck",
    subtitle:
      "Mobil Truck no es una sola empresa, sino una red de compañías unidas por un mismo modelo. Esta página explica cómo se reparten los roles, la responsabilidad y el riesgo entre la empresa matriz, los socios y los servicios de apoyo.",
    sections: [
      {
        title: "1. Por qué importa la estructura",
        paragraphs: [
          "En muchas empresas de transporte todo depende de una sola persona: el propietario es también el jefe de tráfico, recursos humanos y contabilidad. Eso es arriesgado y difícil de escalar.",
          "La estructura de Mobil Truck reparte la carga y el riesgo. Cada empresa es responsable de su operación diaria, mientras que el holding se ocupa de la estrategia, el marco legal, los fondos y la infraestructura IT."
        ],
        items: [
          "la empresa matriz fija las reglas y ofrece protección;",
          "las empresas socias trabajan con conductores y clientes;",
          "los servicios de apoyo ayudan a calcular, planificar y crecer;",
          "los riesgos se distribuyen por toda la red y no se concentran en un solo punto."
        ]
      },
      {
        title: "2. Niveles dentro del holding",
        paragraphs: ["En el modelo de Mobil Truck se distinguen varios niveles:"],
        items: [
          "Empresa matriz – núcleo del holding. Normalmente posee el 51 %, lleva la contabilidad consolidada y gestiona los fondos, IT y logística central.",
          "Empresas socias – sociedades independientes, propiedad de empresarios locales (49 %) y del holding (51 %). Contratan conductores, gestionan vehículos y el día a día.",
          "Fundadores de rama – empresarios que crean varias empresas y reciben ingresos de red con el modelo del 8 %. Ayudan a nuevos socios y cuidan la calidad en su rama.",
          "Servicios de apoyo – jurídico, contable, IT, logística, formación. No quitan beneficios, sino que fortalecen a las empresas."
        ]
      },
      {
        title: "3. Quién responde de qué",
        paragraphs: [
          "Para evitar el caos, cada nivel tiene una zona de responsabilidad clara."
        ],
        items: [
          "Empresa matriz: estrategia, normas, fondos, sistemas IT, grandes contratos con clientes clave y bancos.",
          "Empresa socia: operación, conductores, vehículos, clientes locales y decisiones diarias.",
          "Fundador de rama: crecimiento de la red en su zona, apoyo a nuevos socios, calidad y cumplimiento de los principios de Mobil Truck.",
          "Conductores: trabajo seguro en ruta, documentación correcta y respeto de los tiempos de trabajo y descanso."
        ]
      },
      {
        title: "4. Distribución del riesgo",
        paragraphs: [
          "Una de las ideas centrales de Mobil Truck es no ponerlo todo en una sola empresa. En lugar de un gigante, el holding está formado por muchas sociedades independientes.",
          "Si una empresa atraviesa problemas temporales, el holding no se paraliza: las otras siguen trabajando y los fondos más la matriz ayudan a estabilizar la situación."
        ],
        items: [
          "los riesgos financieros y legales se reparten entre varias entidades;",
          "el riesgo reputacional se limita – un error no arrastra a toda la red;",
          "los fondos de desarrollo y reserva ayudan a sostener a los socios en momentos difíciles."
        ]
      },
      {
        title: "5. Cómo se toman las decisiones",
        paragraphs: [
          "Las decisiones operativas se toman lo más cerca posible del trabajo real: en cada empresa socia.",
          "Las decisiones estratégicas, el desarrollo de IT, la entrada en nuevos países y proyectos grandes son tarea de la empresa matriz y de los socios clave.",
          "Así se crea un equilibrio: cada empresa es libre en su gestión diaria, pero se mueve dentro de un marco común claramente definido."
        ]
      },
      {
        title: "6. Papel del conductor y del empresario",
        paragraphs: [
          "El conductor suele ver solo su empresa: el camión, el despachador, las rutas y las condiciones. Pero detrás hay un sistema que le da estabilidad.",
          "El empresario que se convierte en socio de Mobil Truck accede a toda esta arquitectura: fondos, IT, logística y la posibilidad de construir su propia rama."
        ],
        items: [
          "para el conductor, la estructura es la garantía de que todo no depende de una sola persona;",
          "para el socio, es una escalera de crecimiento y una protección frente a pelear solo contra el mercado."
        ]
      }
    ],
    footerNote:
      "Esta estructura es un marco técnico. Encima se pueden construir contratos, modelos financieros y planes de expansión del holding en diferentes países de la UE."
  }
};

const StructurePage: React.FC = () => {
  const { language } = useLanguage();
  const t = structureText[language] || structureText["ru"];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </header>

        {/* Sections */}
        <section className="space-y-6">
          {t.sections.map((section, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3"
            >
              <h2 className="text-lg font-semibold text-zinc-900">
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-zinc-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.items && (
                <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        {/* Footer note */}
        <section className="pt-2 text-xs text-zinc-500 max-w-3xl">
          <p>{t.footerNote}</p>
        </section>
      </div>
    </main>
  );
};

export default StructurePage;
