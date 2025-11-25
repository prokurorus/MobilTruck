import React from "react";
import { useLanguage } from "../context/LanguageContext";

type SubSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
  note?: string;
};

type Section = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  orderedItems?: string[];
  note?: string;
  subSections?: SubSection[];
};

type HoldingCopy = {
  badge: string;
  title: string;
  subtitle: string;
  sections: Section[];
};

const holdingText: Record<string, HoldingCopy> = {
  ru: {
    badge: "Mobil Truck • модель холдинга",
    title: "Mobil Truck — как устроен и за счёт чего зарабатывает холдинг",
    subtitle:
      "Эта страница — простое объяснение для водителей, партнёров и предпринимателей. Без “магии”: кто за что отвечает, откуда берутся деньги и почему модель выгодна всем участникам, а не только головной компании.",
    sections: [
      {
        title: "1. Зачем вообще нужен холдинг, а не одна фирма",
        paragraphs: [
          "Одна транспортная фирма упирается в потолок: не хватает людей, денег, техники, времени владельца. Холдинг Mobil Truck решает это за счёт сети независимых компаний, работающих по единым правилам, под одним брендом и с общей поддержкой."
        ],
        items: [
          "водитель видит понятную систему оплаты и стабильные рейсы;",
          "предприниматель получает готовую модель: бренд, IT, базу клиентов, типовые документы и сетевой доход;",
          "головная компания не “душит” низы, а зарабатывает на росте сети и качестве сервиса, а не на скрытых процентах."
        ],
        note:
          "Важно: сеть растёт и горизонтально (больше компаний на одном уровне), и вертикально (глубина ветки). Отсюда и сетевой доход 8% — награда за развитие всей структуры, а не за давление “сверху”."
      },
      {
        title: "2. Кто есть кто в Mobil Truck",
        paragraphs: [
          "Внутри холдинга есть три ключевых роли — у каждой своя зона ответственности и свой источник дохода."
        ],
        items: [
          "Водитель — получает честную оплату за рейсы, прозрачный учёт времени и километров, поддержку диспетчеров и понятные правила.",
          "Партнёр — владелец компании. Владеет своей фирмой, сам нанимает людей, отвечает за технику и операционную работу. Получает 92% прибыли своей компании (после вычета 8% сетевого процента) и может строить свою ветку в сети.",
          "Головная компания / основатели ветвей — создают систему, стандарты, IT, логистику, формируют фонды, помогают запускать новые компании и получают сетевой доход по модели 8%, а также дивиденды от долей в компаниях."
        ],
        note:
          "Так уменьшается риск для одного центра и распределяется между участниками холдинга: бизнес опирается не на одну “фирму-гигант”, а на живую сеть компаний."
      },
      {
        title: "3. Что получает партнёр, входя в холдинг",
        paragraphs: [
          "Партнёр не просто регистрирует фирму. Он подключается к живой системе, где многие вещи уже сделаны за него."
        ],
        items: [
          "бренд и репутация, с которой легче работать с заказчиками и банками;",
          "IT-система: учёт рейсов, GPS-маршруты, аналитика, отчётность;",
          "типовые договоры, процессы, юридическая поддержка;",
          "логистическая инфраструктура Mobil Truck — диспетчеризация, планирование маршрутов, помощь с загрузками;",
          "возможность строить свою сеть компаний и получать пассивный доход по модели 8%."
        ],
        note:
          "Задача головной компании — создать понятные правила и защищённую среду, в которой партнёры могут спокойно развиваться, а не бороться с хаосом и бюрократией в одиночку."
      },
      {
        title: "4. Откуда берётся прибыль и как она делится",
        subSections: [
          {
            title: "4.1. База — прибыль каждой отдельной компании",
            paragraphs: [
              "Каждая компания сначала зарабатывает свою чистую прибыль. Это деньги после всех расходов: топливо, зарплаты, налоги, лизинг и обслуживание."
            ]
          },
          {
            title: "4.2. 8% — на сеть, 92% — остаются в компании",
            paragraphs: [
              "Из 100% чистой прибыли компании:"
            ],
            items: [
              "8% направляются в сеть — это сетевой процент;",
              "оставшиеся 92% остаются в компании — это её собственная прибыль, из которой затем делятся доли между владельцами (например, 51/49 между холдингом и местным партнёром)."
            ],
            note:
              "То есть компания в любом случае остаётся основным бенефициаром своей работы. Сетевой процент — это надстройка, а не замена её прибыли."
          },
          {
            title: "4.3. Модель 8% по ветке",
            paragraphs: [
              "8% идут вверх по ветке и делятся по фиксированной формуле:"
            ],
            items: [
              "4% — основателю конкретной компании;",
              "2% — уровню выше;",
              "1% — следующему уровню;",
              "0,5% — ещё одному уровню вверх;",
              "оставшиеся 0,5% могут быть использованы для более высоких уровней или резервов (настройка для будущей финмодели)."
            ],
            note:
              "Чем глубже и шире ветка, тем больше компаний дают свой небольшой процент наверх. Так формируется пассивный доход основателей веток — он растёт вместе с сетью, а не за счёт удушения одной компании."
          },
          {
            title: "4.4. Фонды холдинга: куда идут деньги головной компании",
            paragraphs: [
              "Доля холдинга (например, 51% от прибыли, оставшейся в компании) не “исчезает” в чьём-то кармане. Она собирается в фонды:"
            ],
            items: [
              "Фонд развития: запуск новых компаний, приобретение и ремонт транспорта, лизинг, обучение водителей и партнёров.",
              "Фонд IT и аналитики: развитие систем учёта рейсов, GPS-маршрутизация, отчётность, оптимизация загрузки и простоев.",
              "Резервный и защитный фонд: подушка на форс-мажоры, сложные периоды и поддержку компаний, которые временно попали в трудную ситуацию."
            ],
            note:
              "По немецкому законодательству холдинг может выстраивать единую структуру управления и отчётности. Консолидированный подход снижает бумажную нагрузку на отдельных партнёров и укрепляет доверие со стороны банков и крупных заказчиков."
          }
        ]
      },
      {
        title: "5. Путь: от водителя до основателя своей ветки",
        paragraphs: [
          "В модели Mobil Truck человек может развиваться по ступеням — без “закрытого клуба” и кулуарных договорённостей."
        ],
        orderedItems: [
          "Водитель приходит работать в компанию холдинга и видит, как реально устроены рейсы, учёт и деньги.",
          "Если у него есть желание и дисциплина — он может стать менеджером, формировать рейсы, работать с клиентами.",
          "Дальше — открыть свою компанию в структуре Mobil Truck, получив поддержку холдинга и доступ к IT, бренду и логистике.",
          "Со временем — строить свою ветку: помогать запускать компании ниже по структуре и получать сетевой доход по модели 8%."
        ],
        note:
          "Так формируется современный, живой холдинг: не “пирамидой”, где один забирает всё, а сетью, где каждый понимает, откуда берётся его доход, и видит прозрачные правила игры."
      }
    ]
  },

  en: {
    badge: "Mobil Truck • holding model",
    title: "Mobil Truck — how the holding works and where the profit comes from",
    subtitle:
      "This page gives a simple explanation for drivers, partners and entrepreneurs. No magic: who is responsible for what, where the money comes from and why the model is beneficial for all participants, not only for the head company.",
    sections: [
      {
        title: "1. Why a holding and not just one company",
        paragraphs: [
          "A single transport company quickly hits a ceiling: not enough people, money, trucks or owner’s time. The Mobil Truck holding solves this through a network of independent companies that work under one brand, with shared rules and support."
        ],
        items: [
          "the driver sees a clear payment system and stable routes;",
          "the entrepreneur gets a ready-made model: brand, IT, client base, standard contracts and network income;",
          "the head company does not squeeze the lower levels but earns on network growth and service quality, not on hidden fees."
        ],
        note:
          "The network grows both horizontally (more companies on one level) and vertically (deeper branches). This is where the 8% network income comes from — a reward for developing the whole structure, not for pressure from the top."
      },
      {
        title: "2. Who is who in Mobil Truck",
        paragraphs: [
          "Inside the holding there are three key roles — each with its own responsibility and source of income."
        ],
        items: [
          "Driver — receives fair payment per trip, transparent accounting of time and kilometres, dispatcher support and clear rules.",
          "Partner — owner of a company. Owns his firm, hires people, is responsible for vehicles and daily operations. Receives 92% of the company profit (after the 8% network share) and can build his own branch.",
          "Head company / branch founders — create the system, standards, IT and logistics, form the funds, help to launch new companies and receive network income under the 8% model plus dividends from shares in companies."
        ],
        note:
          "This reduces the risk for a single centre and spreads it across participants: the business relies not on one ‘giant firm’ but on a living network of companies."
      },
      {
        title: "3. What a partner gets when joining the holding",
        paragraphs: [
          "A partner does not just register a company. They connect to a living system where many things are already done for them."
        ],
        items: [
          "brand and reputation that make it easier to work with clients and banks;",
          "IT system: trip accounting, GPS routing, analytics and reporting;",
          "standard contracts, processes and legal support;",
          "Mobil Truck logistics infrastructure – dispatching, route planning, help with loads;",
          "the possibility to build their own network of companies and receive passive income under the 8% model."
        ],
        note:
          "The task of the head company is to create clear rules and a protected environment where partners can grow calmly instead of fighting chaos and bureaucracy alone."
      },
      {
        title: "4. Where profit comes from and how it is split",
        subSections: [
          {
            title: "4.1. Base — profit of each individual company",
            paragraphs: [
              "Each company first earns its own net profit. This is the money after all expenses: fuel, salaries, taxes, leasing and maintenance."
            ]
          },
          {
            title: "4.2. 8% for the network, 92% stay in the company",
            paragraphs: ["Out of 100% of the company’s net profit:"],
            items: [
              "8% go to the network — this is the network share;",
              "the remaining 92% stay in the company — this is its own profit, which is then divided between owners (for example 51/49 between the holding and the local partner)."
            ],
            note:
              "The company remains the main beneficiary of its work. The network share is an extra layer, not a replacement of its profit."
          },
          {
            title: "4.3. The 8% branch model",
            paragraphs: [
              "The 8% go up the branch and are distributed by a fixed formula:"
            ],
            items: [
              "4% — to the founder of the specific company;",
              "2% — to the level above;",
              "1% — to the next level;",
              "0.5% — to one more level above;",
              "the remaining 0.5% can be used for higher levels or reserves (a setting for the future financial model)."
            ],
            note:
              "The deeper and wider the branch, the more companies send their small share upwards. This is how passive income for branch founders is formed — it grows with the network, not by suffocating a single company."
          },
          {
            title: "4.4. Holding funds: where the head company’s money goes",
            paragraphs: [
              "The holding’s share (for example 51% of the profit that remains in the company) does not ‘disappear’ into someone’s pocket. It is collected into funds:"
            ],
            items: [
              "Development fund: launching new companies, buying and repairing vehicles, leasing, training drivers and partners.",
              "IT and analytics fund: development of trip accounting systems, GPS routing, reporting, optimisation of loading and downtimes.",
              "Reserve and protection fund: a cushion for force majeure, difficult periods and support of companies that temporarily face problems."
            ],
            note:
              "Under German law, a holding can build a unified management and reporting structure. A consolidated approach reduces paperwork for individual partners and increases trust from banks and large clients."
          }
        ]
      },
      {
        title: "5. Path: from driver to branch founder",
        paragraphs: [
          "In the Mobil Truck model, a person can grow step by step — without a ‘closed club’ or backroom deals."
        ],
        orderedItems: [
          "A driver joins a company in the holding and sees how trips, accounting and money really work.",
          "If they have motivation and discipline, they can become a manager – planning routes and working with clients.",
          "Next step — open their own company inside the Mobil Truck structure with support from the holding and access to IT, brand and logistics.",
          "Over time — build their own branch: help launch companies below in the structure and receive network income under the 8% model."
        ],
        note:
          "This is how a modern, living holding is formed: not as a pyramid where one person takes everything, but as a network where everyone understands where their income comes from and sees transparent rules."
      }
    ]
  },

  de: {
    badge: "Mobil Truck • Modell des Holdings",
    title: "Mobil Truck – wie der Holding funktioniert und womit er verdient",
    subtitle:
      "Diese Seite erklärt das Modell für Fahrer, Partner und Unternehmer in einfachen Worten. Ohne Magie: wer wofür verantwortlich ist, woher das Geld kommt und warum das Modell nicht nur der Zentrale, sondern allen Beteiligten nützt.",
    sections: [
      {
        title: "1. Warum ein Holding und nicht nur eine Firma",
        paragraphs: [
          "Eine einzelne Spedition stößt schnell an ihre Grenzen: zu wenig Menschen, Geld, Fahrzeuge und Zeit des Inhabers. Der Mobil-Truck-Holding löst das durch ein Netzwerk unabhängiger Firmen, die unter einer Marke nach gemeinsamen Regeln arbeiten und unterstützt werden."
        ],
        items: [
          "der Fahrer sieht ein klares Bezahlsystem und stabile Touren;",
          "der Unternehmer erhält ein fertiges Modell: Marke, IT, Kundenbasis, Musterverträge und Netzwerk-Einkommen;",
          "die Zentrale „erdrosselt“ die unteren Ebenen nicht, sondern verdient am Wachstum des Netzes und an der Servicequalität – nicht an versteckten Gebühren."
        ],
        note:
          "Das Netz wächst horizontal (mehr Firmen auf einer Ebene) und vertikal (größere Tiefe der Zweige). Daher kommt das 8%-Netzwerk-Einkommen – als Belohnung für die Entwicklung der Struktur, nicht für Druck von oben."
      },
      {
        title: "2. Wer ist wer bei Mobil Truck",
        paragraphs: [
          "Im Holding gibt es drei zentrale Rollen – jede mit eigener Verantwortung und eigener Einkommensquelle."
        ],
        items: [
          "Fahrer – erhält faire Bezahlung pro Tour, transparente Erfassung von Zeit und Kilometern, Unterstützung durch Disponenten und klare Regeln.",
          "Partner – Inhaber eines Unternehmens. Er besitzt seine Firma, stellt Mitarbeiter ein, ist für Fahrzeuge und operative Arbeit verantwortlich. Er erhält 92 % des Unternehmensgewinns (nach Abzug der 8 % Netzwerkanteil) und kann seinen eigenen Zweig aufbauen.",
          "Zentrale / Zweiggründer – schaffen das System, Standards, IT und Logistik, bilden Fonds, helfen beim Start neuer Firmen und erhalten das 8%-Netzwerk-Einkommen sowie Dividenden aus Firmenanteilen."
        ],
        note:
          "So wird das Risiko nicht in einem Punkt konzentriert, sondern zwischen den Teilnehmern verteilt: Das Geschäft stützt sich nicht auf eine „Riesenfirma“, sondern auf ein lebendiges Netz von Unternehmen."
      },
      {
        title: "3. Was ein Partner beim Eintritt in den Holding erhält",
        paragraphs: [
          "Ein Partner gründet nicht einfach nur eine Firma. Er schließt sich einem lebendigen System an, in dem vieles bereits vorbereitet ist."
        ],
        items: [
          "Marke und Ruf, mit denen es leichter ist, mit Kunden und Banken zu arbeiten;",
          "IT-System: Tourenerfassung, GPS-Routen, Analytik und Berichte;",
          "Musterverträge, Prozesse und juristische Unterstützung;",
          "Mobil-Truck-Logistikinfrastruktur – Disposition, Routenplanung, Unterstützung bei Ladungen;",
          "die Möglichkeit, ein eigenes Netz von Firmen aufzubauen und passives Einkommen nach dem 8%-Modell zu erhalten."
        ],
        note:
          "Aufgabe der Zentrale ist es, klare Regeln und ein geschütztes Umfeld zu schaffen, in dem Partner sich entwickeln können, statt alleine gegen Chaos und Bürokratie zu kämpfen."
      },
      {
        title: "4. Woher der Gewinn kommt und wie er verteilt wird",
        subSections: [
          {
            title: "4.1. Grundlage – Gewinn jeder einzelnen Firma",
            paragraphs: [
              "Jede Firma erwirtschaftet zuerst ihren eigenen Nettogewinn. Das ist das Geld nach allen Kosten: Kraftstoff, Löhne, Steuern, Leasing und Wartung."
            ]
          },
          {
            title: "4.2. 8 % für das Netz, 92 % bleiben in der Firma",
            paragraphs: ["Von 100 % Nettogewinn der Firma:"],
            items: [
              "8 % fließen ins Netzwerk – das ist der Netzwerkanteil;",
              "die übrigen 92 % bleiben in der Firma – das ist ihr eigener Gewinn, der anschließend zwischen den Eigentümern aufgeteilt wird (z. B. 51/49 zwischen Holding und lokalem Partner)."
            ],
            note:
              "Die Firma bleibt in jedem Fall Hauptnutznießer ihrer Arbeit. Der Netzwerkanteil ist eine zusätzliche Schicht, kein Ersatz für ihren Gewinn."
          },
          {
            title: "4.3. Das 8%-Modell in der Struktur",
            paragraphs: [
              "Die 8 % laufen den Zweig nach oben und werden nach einer festen Formel verteilt:"
            ],
            items: [
              "4 % – an den Gründer der konkreten Firma;",
              "2 % – an die Ebene darüber;",
              "1 % – an die nächste Ebene;",
              "0,5 % – an eine weitere Ebene;",
              "die übrigen 0,5 % können für höhere Ebenen oder Reserven genutzt werden (Einstellung für das zukünftige Finanzmodell)."
            ],
            note:
              "Je tiefer und breiter der Zweig, desto mehr Firmen geben ihren kleinen Anteil nach oben. So entsteht ein passives Einkommen der Zweiggründer – es wächst mit dem Netz, nicht durch das „Aussaugen“ einer einzigen Firma."
          },
          {
            title:
              "4.4. Fonds des Holdings: wohin das Geld der Zentrale fließt",
            paragraphs: [
              "Der Anteil des Holdings (z. B. 51 % des in der Firma verbleibenden Gewinns) verschwindet nicht in einer Tasche. Er fließt in Fonds:"
            ],
            items: [
              "Entwicklungsfonds: Start neuer Firmen, Kauf und Reparatur von Fahrzeugen, Leasing, Schulung von Fahrern und Partnern.",
              "IT- und Analysefonds: Entwicklung von Tourenerfassung, GPS-Routing, Berichten, Optimierung von Auslastung und Standzeiten.",
              "Reserve- und Schutzfonds: Puffer für höhere Gewalt, schwierige Phasen und Unterstützung von Firmen in vorübergehenden Problemen."
            ],
            note:
              "Nach deutschem Recht kann ein Holding eine einheitliche Leitungs- und Berichtsstruktur aufbauen. Ein konsolidierter Ansatz reduziert Bürokratie für einzelne Partner und stärkt das Vertrauen von Banken und Großkunden."
          }
        ]
      },
      {
        title: "5. Weg: vom Fahrer zum Gründer eines eigenen Zweigs",
        paragraphs: [
          "Im Mobil-Truck-Modell kann sich ein Mensch stufenweise entwickeln – ohne „geschlossenen Club“ und Hinterzimmer-Absprachen."
        ],
        orderedItems: [
          "Ein Fahrer kommt in eine Firma des Holdings und sieht, wie Touren, Abrechnung und Geld in Wirklichkeit funktionieren.",
          "Wenn er Motivation und Disziplin hat, kann er Manager werden, Touren planen und mit Kunden arbeiten.",
          "Nächster Schritt – eine eigene Firma innerhalb der Struktur von Mobil Truck gründen, mit Unterstützung des Holdings und Zugang zu IT, Marke und Logistik.",
          "Mit der Zeit – einen eigenen Zweig aufbauen: beim Start neuer Firmen helfen und Netzwerk-Einkommen nach dem 8%-Modell erhalten."
        ],
        note:
          "So entsteht ein moderner, lebendiger Holding: keine Pyramide, in der einer alles nimmt, sondern ein Netz, in dem jeder versteht, woher sein Einkommen kommt, und klare Spielregeln sieht."
      }
    ]
  },

  es: {
    badge: "Mobil Truck • modelo de holding",
    title: "Mobil Truck — cómo funciona el holding y de dónde viene el beneficio",
    subtitle:
      "Esta página explica el modelo para conductores, socios y emprendedores de forma sencilla. Sin magia: quién es responsable de qué, de dónde viene el dinero y por qué el modelo beneficia a todos los participantes, no solo a la empresa matriz.",
    sections: [
      {
        title: "1. Por qué un holding y no solo una empresa",
        paragraphs: [
          "Una sola empresa de transporte choca rápido con un techo: faltan personas, dinero, vehículos y tiempo del propietario. El holding Mobil Truck lo resuelve mediante una red de empresas independientes que trabajan bajo una misma marca, con reglas comunes y apoyo central."
        ],
        items: [
          "el conductor ve un sistema de pago claro y rutas estables;",
          "el emprendedor recibe un modelo listo: marca, IT, base de clientes, contratos tipo e ingresos de red;",
          "la empresa matriz no ahoga a las capas inferiores, sino que gana con el crecimiento de la red y la calidad del servicio, no con comisiones ocultas."
        ],
        note:
          "La red crece en horizontal (más empresas en un mismo nivel) y en vertical (mayor profundidad de las ramas). De ahí salen los ingresos de red del 8 %: una recompensa por desarrollar toda la estructura, no por ejercer presión desde arriba."
      },
      {
        title: "2. Quién es quién en Mobil Truck",
        paragraphs: [
          "Dentro del holding hay tres roles clave, cada uno con su zona de responsabilidad y su fuente de ingresos."
        ],
        items: [
          "Conductor — recibe un pago justo por viaje, control transparente de tiempo y kilómetros, apoyo de los operadores y reglas claras.",
          "Socio — propietario de una empresa. Posee su firma, contrata personal, se responsabiliza de los vehículos y del trabajo operativo. Recibe el 92 % del beneficio de su empresa (tras el 8 % de red) y puede construir su propia rama.",
          "Empresa matriz / fundadores de ramas — crean el sistema, los estándares, la IT y la logística, forman los fondos, ayudan a lanzar nuevas empresas y reciben el ingreso de red del 8 %, además de dividendos por sus participaciones."
        ],
        note:
          "Así se reduce el riesgo concentrado en un solo punto y se reparte entre los participantes: el negocio no se apoya en una “megaempresa”, sino en una red viva de compañías."
      },
      {
        title: "3. Qué recibe un socio al entrar en el holding",
        paragraphs: [
          "El socio no solo registra una empresa. Se conecta a un sistema vivo donde muchas cosas ya están preparadas."
        ],
        items: [
          "marca y reputación que facilitan trabajar con clientes y bancos;",
          "sistema IT: registro de viajes, rutas GPS, analítica e informes;",
          "contratos tipo, procesos y apoyo jurídico;",
          "infraestructura logística de Mobil Truck: planificación de rutas, despacho, ayuda con las cargas;",
          "posibilidad de construir su propia red de empresas y recibir ingresos pasivos según el modelo del 8 %."
        ],
        note:
          "La tarea de la empresa matriz es crear reglas claras y un entorno protegido en el que los socios puedan desarrollarse sin luchar solos contra el caos y la burocracia."
      },
      {
        title: "4. De dónde viene el beneficio y cómo se reparte",
        subSections: [
          {
            title: "4.1. Base — beneficio de cada empresa individual",
            paragraphs: [
              "Cada empresa genera primero su propio beneficio neto. Es el dinero que queda después de todos los gastos: combustible, salarios, impuestos, leasing y mantenimiento."
            ]
          },
          {
            title: "4.2. 8 % para la red, 92 % permanece en la empresa",
            paragraphs: ["Del 100 % del beneficio neto de la empresa:"],
            items: [
              "8 % se dirige a la red — este es el porcentaje de red;",
              "el 92 % restante permanece en la empresa — es su propio beneficio, que luego se reparte entre los propietarios (por ejemplo, 51/49 entre el holding y el socio local)."
            ],
            note:
              "La empresa sigue siendo el principal beneficiario de su trabajo. El porcentaje de red es una capa adicional, no un sustituto de su beneficio."
          },
          {
            title: "4.3. Modelo del 8 % en la rama",
            paragraphs: [
              "El 8 % sube por la rama y se distribuye según una fórmula fija:"
            ],
            items: [
              "4 % — al fundador de la empresa concreta;",
              "2 % — al nivel superior;",
              "1 % — al siguiente nivel;",
              "0,5 % — a otro nivel más arriba;",
              "el 0,5 % restante puede usarse para niveles más altos o para reservas (ajuste para el modelo financiero futuro)."
            ],
            note:
              "Cuanto más profunda y ancha es la rama, más empresas aportan su pequeño porcentaje hacia arriba. Así se forma el ingreso pasivo de los fundadores de ramas: crece junto con la red, no a costa de estrangular a una sola empresa."
          },
          {
            title:
              "4.4. Fondos del holding: adónde va el dinero de la empresa matriz",
            paragraphs: [
              "La parte del holding (por ejemplo, el 51 % del beneficio que queda en la empresa) no ‘desaparece’ en un bolsillo. Se acumula en fondos:"
            ],
            items: [
              "Fondo de desarrollo: lanzamiento de nuevas empresas, compra y reparación de vehículos, leasing, formación de conductores y socios.",
              "Fondo de IT y analítica: desarrollo de sistemas de control de viajes, rutas GPS, informes, optimización de cargas y tiempos muertos.",
              "Fondo de reserva y protección: colchón para imprevistos, periodos difíciles y apoyo a las empresas que pasan por una situación complicada."
            ],
            note:
              "Según la legislación alemana, un holding puede construir una estructura unificada de gestión y reporte. El enfoque consolidado reduce la carga burocrática de los socios individuales y refuerza la confianza de bancos y grandes clientes."
          }
        ]
      },
      {
        title: "5. Camino: del conductor al fundador de su propia rama",
        paragraphs: [
          "En el modelo de Mobil Truck, una persona puede crecer por etapas — sin ‘club cerrado’ ni acuerdos de pasillo."
        ],
        orderedItems: [
          "El conductor entra a trabajar en una empresa del holding y ve cómo funcionan realmente los viajes, el control y el dinero.",
          "Si tiene ganas y disciplina, puede convertirse en gestor, organizar rutas y trabajar con clientes.",
          "Después — abrir su propia empresa dentro de la estructura de Mobil Truck con apoyo del holding y acceso a IT, marca y logística.",
          "Con el tiempo — construir su propia rama: ayudar a lanzar empresas por debajo en la estructura y recibir ingresos de red según el modelo del 8 %."
        ],
        note:
          "Así se forma un holding moderno y vivo: no como una pirámide donde uno se queda con todo, sino como una red en la que cada uno entiende de dónde viene su ingreso y ve reglas de juego transparentes."
      }
    ]
  }
};

const HoldingModelPage: React.FC = () => {
  const { language } = useLanguage();
  const t = holdingText[language] ?? holdingText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Шапка / Header */}
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

        {/* Секции / Sections */}
        {t.sections.map((section, index) => (
          <section
            key={index}
            className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3"
          >
            <h2 className="text-lg font-semibold text-zinc-900">
              {section.title}
            </h2>

            {section.paragraphs &&
              section.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-zinc-700">
                  {p}
                </p>
              ))}

            {section.items && (
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.orderedItems && (
              <ol className="text-sm text-zinc-700 space-y-1 list-decimal list-inside">
                {section.orderedItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            )}

            {section.subSections &&
              section.subSections.map((sub, i) => (
                <div key={i} className="space-y-2 pt-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {sub.title}
                  </h3>
                  {sub.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-zinc-700">
                      {p}
                    </p>
                  ))}
                  {sub.items && (
                    <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                      {sub.items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {sub.note && (
                    <p className="text-xs text-zinc-500">{sub.note}</p>
                  )}
                </div>
              ))}

            {section.note && (
              <p className="text-xs text-zinc-500">{section.note}</p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
};

export default HoldingModelPage;
