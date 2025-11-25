import React from "react";
import { useLanguage } from "../context/LanguageContext";

type Card = {
  title: string;
  text: string;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: string[];
  cards?: Card[];
};

type PartnersCopy = {
  title: string;
  intro: string;
  sections: Section[];
};

const partnersText: Record<string, PartnersCopy> = {
  ru: {
    title: "Партнёрам Mobil Truck",
    intro:
      "Mobil Truck — это не просто автопарк. Это сеть компаний, объединённых едиными принципами: честностью, прозрачностью, технологичностью и взаимной выгодой. Каждый партнёр получает инфраструктуру, процессы и поддержку, которые обычно доступны только крупным холдингам.",
    sections: [
      {
        title: "Кто такой партнёр Mobil Truck?",
        paragraphs: [
          "Партнёр — это предприниматель, который создаёт собственную транспортную компанию в составе холдинга. Он работает под защитой Mobil Truck, но остаётся владельцем 49% своей фирмы — и распоряжается её ростом. Холдинг получает 51% долей для обеспечения юридической поддержки, фондов и стабильности.",
          "Важно: партнёр — это не сотрудник и не франчайзи. Это самостоятельный владелец компании, который пользуется всеми преимуществами холдинга и при этом сохраняет личную свободу, инициативу и прибыль."
        ]
      },
      {
        title: "Что получает партнёр?",
        cards: [
          {
            title: "1. Полный юридический каркас",
            text:
              "Открытие фирмы, бухгалтерия, отчётность, договора, кадровые документы — всё это обеспечивает головная структура холдинга. Партнёр может сосредоточиться на работе и развитии бизнеса."
          },
          {
            title: "2. Логистика и управление рейсами",
            text:
              "Mobil Truck предоставляет IT-системы для учёта рейсов, GPS-контроля, расчётов, аналитики и оптимизации загрузок. Это уровень, который одиночная фирма не сможет позволить себе самостоятельно."
          },
          {
            title: "3. Финансовые фонды",
            text:
              "Холдинг формирует фонды развития: покупка транспорта, ремонт, поддержка в кризисных ситуациях, страхование, инструменты для роста. Это снижает риски партнёров и повышает устойчивость всей сети."
          },
          {
            title: "4. Клиенты и заказы",
            text:
              "Партнёр получает доступ к существующему пулу заказчиков и к централизованной системе распределения рейсов. Это помогает обеспечить стабильную загрузку даже на старте."
          }
        ]
      },
      {
        title: "Модель распределения прибыли",
        paragraphs: ["Чистая прибыль компании делится так:"],
        bullets: [
          "92% остаются в компании — именно на эти деньги живёт и растёт фирма партнёра.",
          "8% — сетевой процент, который распределяется по ветке холдинга, создавая для каждого предпринимателя стабильный пассивный доход."
        ],
        paragraphs: [
          "Чистая прибыль компании делится так:",
          "Эта модель мотивирует партнёров развивать собственную сеть дочерних компаний — чем сильнее структура, тем выше совокупный доход."
        ]
      },
      {
        title: "Почему Mobil Truck — это современная модель?",
        paragraphs: [
          "В классической схеме единая компания несёт на себе огромные риски: судебные, финансовые, операционные. Mobil Truck распределяет эти риски между множеством независимых структур, сохраняя при этом единую систему управления.",
          "Вместо жёсткой вертикали используется горизонтальная сеть — гибкая, живучая и саморастущая. Каждый новый партнёр укрепляет систему, повышает устойчивость и расширяет возможности для всех участников.",
          "Это не франшиза и не MLM. Это равноправное объединение компаний, где каждый приносит пользу структуре и получает пользу от неё."
        ]
      },
      {
        title: "Как стать партнёром Mobil Truck?",
        paragraphs: ["Процесс состоит из трёх шагов:"],
        ordered: [
          "Выбор направления работы и региона.",
          "Открытие юридического лица под крылом холдинга.",
          "Получение процессов, IT-доступов, логистики и первых заказов."
        ],
        paragraphs: [
          "Процесс состоит из трёх шагов:",
          "После старта партнёр начинает получать сетевой доход (8% распределённых процентов), а также всю прибыль своей компании (92% после распределения по модели)."
        ]
      }
    ]
  },

  en: {
    title: "For Mobil Truck partners",
    intro:
      "Mobil Truck is not just a truck fleet. It is a network of companies united by the same principles: honesty, transparency, technology and mutual benefit. Each partner receives infrastructure, processes and support that are usually available only to large holdings.",
    sections: [
      {
        title: "Who is a Mobil Truck partner?",
        paragraphs: [
          "A partner is an entrepreneur who creates their own transport company within the holding. They work under the protection of Mobil Truck but remain the owner of 49% of their company — and manage its growth. The holding receives 51% of the shares to provide legal support, funds and stability.",
          "Important: a partner is not an employee and not a franchisee. They are an independent company owner who uses all the advantages of the holding while keeping personal freedom, initiative and profit."
        ]
      },
      {
        title: "What does a partner receive?",
        cards: [
          {
            title: "1. Full legal framework",
            text:
              "Company registration, accounting, reporting, contracts, HR documents — all this is provided by the head structure of the holding. The partner can focus on work and business growth."
          },
          {
            title: "2. Logistics and trip management",
            text:
              "Mobil Truck provides IT systems for trip accounting, GPS control, settlements, analytics and load optimisation. This is a level that a standalone company usually cannot afford."
          },
          {
            title: "3. Financial funds",
            text:
              "The holding forms development funds: vehicle purchase, repairs, support in crisis situations, insurance and growth tools. This reduces partner risks and increases the stability of the entire network."
          },
          {
            title: "4. Clients and orders",
            text:
              "The partner gets access to an existing pool of customers and to a centralised trip allocation system. This helps secure stable loading even at the start."
          }
        ]
      },
      {
        title: "Profit distribution model",
        paragraphs: [
          "The company’s net profit is split as follows:"
        ],
        bullets: [
          "92% remain in the company — this is what keeps the partner’s firm alive and growing.",
          "8% is the network share that is distributed along the holding’s branch, creating stable passive income for every entrepreneur."
        ],
        paragraphs: [
          "The company’s net profit is split as follows:",
          "This model motivates partners to develop their own network of daughter companies — the stronger the structure, the higher the total income."
        ]
      },
      {
        title: "Why Mobil Truck is a modern model",
        paragraphs: [
          "In the classic scheme, a single company carries huge risks: legal, financial and operational. Mobil Truck spreads these risks across many independent structures while keeping one management system.",
          "Instead of a rigid vertical, a horizontal network is used — flexible, resilient and self-growing. Each new partner strengthens the system, increases stability and expands opportunities for everyone.",
          "This is not a franchise and not MLM. It is an equal association of companies where everyone brings value to the structure and receives value from it."
        ]
      },
      {
        title: "How to become a Mobil Truck partner?",
        paragraphs: ["The process consists of three steps:"],
        ordered: [
          "Choose the field of work and region.",
          "Register a legal entity under the umbrella of the holding.",
          "Receive processes, IT access, logistics and the first orders."
        ],
        paragraphs: [
          "The process consists of three steps:",
          "After the launch, the partner starts receiving network income (8% distributed share) as well as all the profit of their company (92% after distribution under the model)."
        ]
      }
    ]
  },

  de: {
    title: "Für Mobil-Truck-Partner",
    intro:
      "Mobil Truck ist nicht nur ein Fuhrpark. Es ist ein Netzwerk von Unternehmen, vereint durch dieselben Prinzipien: Ehrlichkeit, Transparenz, Technologie und gegenseitigen Nutzen. Jeder Partner erhält Infrastruktur, Prozesse und Unterstützung, wie sie normalerweise nur großen Holdings zur Verfügung stehen.",
    sections: [
      {
        title: "Wer ist ein Mobil-Truck-Partner?",
        paragraphs: [
          "Ein Partner ist ein Unternehmer, der sein eigenes Transportunternehmen innerhalb des Holdings gründet. Er arbeitet unter dem Schutz von Mobil Truck, bleibt aber Eigentümer von 49 % seiner Firma und steuert deren Wachstum. Der Holding erhält 51 % der Anteile, um rechtliche Unterstützung, Fonds und Stabilität zu sichern.",
          "Wichtig: Ein Partner ist weder Mitarbeiter noch Franchisenehmer. Er ist eigenständiger Inhaber eines Unternehmens, der alle Vorteile des Holdings nutzt und dabei persönliche Freiheit, Initiative und Gewinn behält."
        ]
      },
      {
        title: "Was erhält ein Partner?",
        cards: [
          {
            title: "1. Vollständiges juristisches Gerüst",
            text:
              "Firmengründung, Buchhaltung, Berichte, Verträge, Personalunterlagen – all das stellt die Zentrale des Holdings bereit. Der Partner kann sich auf die Arbeit und den Ausbau des Geschäfts konzentrieren."
          },
          {
            title: "2. Logistik und Tourensteuerung",
            text:
              "Mobil Truck stellt IT-Systeme für Tourenerfassung, GPS-Kontrolle, Abrechnungen, Analytik und Optimierung der Auslastung zur Verfügung. Ein Niveau, das sich eine einzelne Firma meist nicht leisten kann."
          },
          {
            title: "3. Finanzielle Fonds",
            text:
              "Der Holding bildet Entwicklungsfonds: Fahrzeugkauf, Reparaturen, Unterstützung in Krisensituationen, Versicherungen und Wachstumsinstrumente. Das senkt das Risiko für Partner und erhöht die Stabilität des gesamten Netzes."
          },
          {
            title: "4. Kunden und Aufträge",
            text:
              "Der Partner erhält Zugang zu einem bestehenden Kundenstamm und zu einem zentralen System zur Tourenvergabe. So lässt sich schon am Anfang eine stabile Auslastung erreichen."
          }
        ]
      },
      {
        title: "Modell der Gewinnverteilung",
        paragraphs: ["Der Nettogewinn des Unternehmens wird wie folgt verteilt:"],
        bullets: [
          "92 % bleiben im Unternehmen – von diesem Geld lebt und wächst die Firma des Partners.",
          "8 % sind der Netzwerkanteil, der entlang des Zweigs des Holdings verteilt wird und für jeden Unternehmer ein stabiles passives Einkommen schafft."
        ],
        paragraphs: [
          "Der Nettogewinn des Unternehmens wird wie folgt verteilt:",
          "Dieses Modell motiviert Partner, ihr eigenes Netz von Tochterunternehmen aufzubauen – je stärker die Struktur, desto höher das Gesamteinkommen."
        ]
      },
      {
        title: "Warum Mobil Truck ein modernes Modell ist",
        paragraphs: [
          "Im klassischen Modell trägt eine einzelne Firma enorme Risiken: juristisch, finanziell und operativ. Mobil Truck verteilt diese Risiken auf viele unabhängige Strukturen und behält gleichzeitig ein einheitliches Managementsystem.",
          "Statt einer starren Vertikale wird ein horizontales Netzwerk genutzt – flexibel, widerstandsfähig und selbstwachsend. Jeder neue Partner stärkt das System, erhöht die Stabilität und erweitert die Möglichkeiten für alle.",
          "Dies ist weder eine Franchise noch ein MLM-System. Es ist ein Zusammenschluss gleichberechtigter Unternehmen, in dem jeder dem Netzwerk Nutzen bringt und Nutzen daraus zieht."
        ]
      },
      {
        title: "Wie wird man Partner von Mobil Truck?",
        paragraphs: ["Der Prozess besteht aus drei Schritten:"],
        ordered: [
          "Auswahl des Tätigkeitsfeldes und der Region.",
          "Gründung einer juristischen Person unter dem Dach des Holdings.",
          "Erhalt von Prozessen, IT-Zugängen, Logistik und den ersten Aufträgen."
        ],
        paragraphs: [
          "Der Prozess besteht aus drei Schritten:",
          "Nach dem Start beginnt der Partner, Netzwerkeinkommen (8 % verteilte Anteile) sowie den gesamten Gewinn seines Unternehmens (92 % nach der Modellverteilung) zu erhalten."
        ]
      }
    ]
  },

  es: {
    title: "Para los socios de Mobil Truck",
    intro:
      "Mobil Truck no es solo una flota de camiones. Es una red de empresas unidas por los mismos principios: honestidad, transparencia, tecnología y beneficio mutuo. Cada socio recibe infraestructura, procesos y apoyo que normalmente solo están disponibles para grandes holdings.",
    sections: [
      {
        title: "¿Quién es un socio de Mobil Truck?",
        paragraphs: [
          "Un socio es un emprendedor que crea su propia empresa de transporte dentro del holding. Trabaja bajo la protección de Mobil Truck, pero sigue siendo propietario del 49 % de su empresa y gestiona su crecimiento. El holding recibe el 51 % de las participaciones para garantizar el soporte jurídico, los fondos y la estabilidad.",
          "Importante: el socio no es empleado ni franquiciado. Es un propietario independiente que utiliza todas las ventajas del holding y, al mismo tiempo, conserva su libertad personal, iniciativa y beneficio."
        ]
      },
      {
        title: "¿Qué recibe el socio?",
        cards: [
          {
            title: "1. Estructura jurídica completa",
            text:
              "Constitución de la empresa, contabilidad, informes, contratos, documentación de personal: todo esto lo proporciona la estructura central del holding. El socio puede centrarse en el trabajo y en el crecimiento del negocio."
          },
          {
            title: "2. Logística y gestión de rutas",
            text:
              "Mobil Truck proporciona sistemas IT para el registro de viajes, control GPS, liquidaciones, analítica y optimización de cargas. Es un nivel que una empresa pequeña normalmente no puede permitirse."
          },
          {
            title: "3. Fondos financieros",
            text:
              "El holding forma fondos de desarrollo: compra de vehículos, reparaciones, apoyo en situaciones de crisis, seguros y herramientas de crecimiento. Esto reduce los riesgos de los socios y aumenta la estabilidad de toda la red."
          },
          {
            title: "4. Clientes y pedidos",
            text:
              "El socio obtiene acceso a una cartera existente de clientes y a un sistema centralizado de asignación de rutas. Esto ayuda a asegurar una carga estable incluso en la fase inicial."
          }
        ]
      },
      {
        title: "Modelo de distribución de beneficios",
        paragraphs: ["El beneficio neto de la empresa se reparte así:"],
        bullets: [
          "El 92 % permanece en la empresa — con este dinero vive y crece la empresa del socio.",
          "El 8 % es el porcentaje de red que se distribuye a lo largo de la rama del holding, creando un ingreso pasivo estable para cada emprendedor."
        ],
        paragraphs: [
          "El beneficio neto de la empresa se reparte así:",
          "Este modelo motiva a los socios a desarrollar su propia red de filiales: cuanto más fuerte es la estructura, mayor es el ingreso total."
        ]
      },
      {
        title: "Por qué Mobil Truck es un modelo moderno",
        paragraphs: [
          "En el esquema clásico, una sola empresa asume enormes riesgos: jurídicos, financieros y operativos. Mobil Truck distribuye estos riesgos entre muchas estructuras independientes, manteniendo al mismo tiempo un sistema de gestión unificado.",
          "En lugar de una vertical rígida, se utiliza una red horizontal: flexible, resistente y autoexpansiva. Cada nuevo socio refuerza el sistema, aumenta la estabilidad y amplía las posibilidades de todos.",
          "No es una franquicia ni un esquema multinivel. Es una unión de empresas en igualdad de condiciones, donde cada una aporta valor a la estructura y recibe valor de ella."
        ]
      },
      {
        title: "¿Cómo convertirse en socio de Mobil Truck?",
        paragraphs: ["El proceso consta de tres pasos:"],
        ordered: [
          "Elegir el ámbito de trabajo y la región.",
          "Constituir una entidad jurídica bajo el paraguas del holding.",
          "Recibir los procesos, accesos IT, logística y los primeros pedidos."
        ],
        paragraphs: [
          "El proceso consta de tres pasos:",
          "Tras el inicio, el socio comienza a recibir el ingreso de red (8 % del porcentaje distribuido), así como todo el beneficio de su empresa (el 92 % después de la distribución según el modelo)."
        ]
      }
    ]
  }
};

const PartnersPage: React.FC = () => {
  const { language } = useLanguage();
  const t = partnersText[language] ?? partnersText.ru;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 text-zinc-800">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-zinc-900">{t.title}</h1>
        <p className="text-lg text-zinc-700 leading-relaxed">{t.intro}</p>
      </div>

      {t.sections.map((section, index) => (
        <section key={index} className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">
            {section.title}
          </h2>

          {section.paragraphs &&
            section.paragraphs.map((p, i) => (
              <p key={i} className="text-zinc-700 leading-relaxed">
                {p}
              </p>
            ))}

          {section.cards && (
            <div className="grid md:grid-cols-2 gap-6">
              {section.cards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white"
                >
                  <h3 className="font-semibold text-zinc-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-zinc-700">{card.text}</p>
                </div>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="list-disc pl-6 space-y-2 text-zinc-700">
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {section.ordered && (
            <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
              {section.ordered.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ol>
          )}
        </section>
      ))}
    </div>
  );
};

export default PartnersPage;
