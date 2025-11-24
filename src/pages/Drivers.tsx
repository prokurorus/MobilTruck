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
      "Mobil Truck — это сеть европейских транспортных компаний. Для нас водитель — партнёр, а не расходный материал. Здесь важны стабильность, честность и возможность роста.",
    blocks: [
      {
        title: "Что мы предлагаем",
        items: [
          "Современные европейские тягачи и прицепы.",
          "Маршруты по ЕС — без серых схем и сомнительных рейсов.",
          "Своевременная выплата зарплаты и прозрачный учёт пробега и часов.",
          "Соблюдение режима труда и отдыха по нормам ЕС.",
          "Техническая поддержка, помощь с документами и навигацией.",
          "Реальная статистика и честные условия — без манипуляций и скрытых удержаний.",
          "Перспектива роста: от водителя до партнёра холдинга.",
        ],
      },
      {
        title: "Требования к водителю",
        items: [
          "Водительское удостоверение категории CE.",
          "Карта тахографа и готовность соблюдать режимы работы и отдыха.",
          "Ответственное отношение к технике и грузу.",
          "Аккуратность в документах и уважение к клиенту.",
          "Опыт работы по ЕС приветствуется, но не является обязательным.",
          "Готовность работать честно, без «серых» схем и обхода правил.",
        ],
      },
      {
        title: "Почему здесь можно расти",
        items: [
          "Ты видишь реальную экономику рейса и понимаешь, откуда берётся твой доход.",
          "Сильные водители могут стать старшими, диспетчерами или партнёрами.",
          "Холдинг помогает в будущем открыть свою фирму в структуре Mobil Truck.",
          "Сетевой доход по модели 8% даёт возможность создать пассивный доход.",
          "Риски распределены по сети — нет ситуации, когда один директор решает всё в одиночку.",
        ],
      },
    ],
    pathTitle: "Путь водителя в холдинге Mobil Truck",
    steps: [
      "1. Начать водителем — понять маршруты, клиентов, технику и реальные условия работы.",
      "2. Укрепиться в профессии — показать дисциплину, надёжность и умение работать с системой.",
      "3. Взять на себя больше ответственности — помощь в обучении, работе с клиентами, координации.",
      "4. Стать партнёром — открыть свою компанию в структуре Mobil Truck и постепенно строить собственную ветку.",
    ],
    note: "Если хочешь обсудить детали — напиши через страницу «Присоединиться» или на форуме. Отвечаем спокойно, по возможности быстро и по делу.",
  },

  en: {
    badge: "Mobil Truck • for drivers",
    title: "Driving with Mobil Truck",
    subtitle:
      "Mobil Truck is a network of European transport companies. For us, a driver is a partner, not a disposable resource. Stability, honesty and a real path for growth matter here.",
    blocks: [
      {
        title: "What we offer",
        items: [
          "Modern European trucks and trailers.",
          "EU routes only — no shady schemes or “grey” trips.",
          "On-time payment and transparent mileage & hours tracking.",
          "Working and rest hours strictly according to EU rules.",
          "24/7 support with documents, navigation and technical issues.",
          "Real statistics and clear rules — no hidden deductions.",
          "A clear path to grow from driver to partner of the holding.",
        ],
      },
      {
        title: "Requirements",
        items: [
          "Valid CE driving license.",
          "Tachograph card and readiness to follow working/rest time rules.",
          "Careful attitude to the truck and the cargo.",
          "Accuracy with documents and respectful communication with clients.",
          "Experience in EU transport is welcome but not mandatory.",
          "Willingness to work legally and transparently, without “grey” schemes.",
        ],
      },
      {
        title: "Why this is a place to grow",
        items: [
          "You see the real economics of each trip and understand your income.",
          "Strong drivers can become lead drivers, dispatchers or future partners.",
          "The holding can support you in opening your own company within Mobil Truck.",
          "The 8% network model allows you to build long-term passive income.",
          "Risks are distributed across the network — there is no single boss deciding everything alone.",
        ],
      },
    ],
    pathTitle: "Driver’s path inside Mobil Truck",
    steps: [
      "1. Start as a driver — learn routes, clients, trucks and real working conditions.",
      "2. Prove reliability — discipline, safe driving, clean documentation.",
      "3. Take more responsibility — help others, support coordination and communication.",
      "4. Become a partner — open your own company within Mobil Truck and build your own branch.",
    ],
    note: "If you want more details, write via the Join page or on the forum. We answer calmly and as clearly as possible.",
  },

  de: {
    badge: "Mobil Truck • für Fahrer",
    title: "Arbeiten als Fahrer bei Mobil Truck",
    subtitle:
      "Mobil Truck ist ein Netzwerk europäischer Transportunternehmen. Für uns ist der Fahrer ein Partner, kein Verbrauchsmaterial. Wichtig sind Stabilität, Ehrlichkeit und echte Entwicklungschancen.",
    blocks: [
      {
        title: "Was wir anbieten",
        items: [
          "Moderne europäische Lkw und Auflieger.",
          "Fahrten innerhalb der EU – ohne Grauzonen und dubiose Touren.",
          "Pünktliche Bezahlung mit transparenter Erfassung von Kilometern und Stunden.",
          "Arbeits- und Ruhezeiten strikt nach EU-Vorschriften.",
          "24/7 Unterstützung bei Technik, Dokumenten und Navigation.",
          "Echte Zahlen und klare Regeln – keine versteckten Abzüge.",
          "Eine klare Perspektive: vom Fahrer zum Partner im Holding.",
        ],
      },
      {
        title: "Anforderungen",
        items: [
          "Gültiger Führerschein der Klasse CE.",
          "Tachographenkarte und Bereitschaft, Lenk- und Ruhezeiten einzuhalten.",
          "Sorgsamer Umgang mit Fahrzeug und Ladung.",
          "Genauigkeit bei Dokumenten und respektvoller Kontakt mit Kunden.",
          "Erfahrung im EU-Verkehr ist willkommen, aber nicht zwingend.",
          "Bereitschaft, legal und transparent zu arbeiten – ohne „tricks“.",
        ],
      },
      {
        title: "Warum man hier wachsen kann",
        items: [
          "Du siehst die reale Wirtschaftlichkeit jeder Tour und verstehst deinen Lohn.",
          "Starke Fahrer können Vorarbeiter, Disponenten oder Partner werden.",
          "Der Holding kann dich später beim Aufbau einer eigenen Firma unterstützen.",
          "Das 8-Prozent-Netzwerkmodell ermöglicht langfristiges passives Einkommen.",
          "Risiken werden auf viele Firmen verteilt – keine einzelne Firma trägt alles allein.",
        ],
      },
    ],
    pathTitle: "Weg des Fahrers im Mobil-Truck-Holding",
    steps: [
      "1. Einstieg als Fahrer – Routen, Kunden, Technik und Abläufe kennenlernen.",
      "2. Zuverlässigkeit zeigen – Disziplin, sichere Fahrweise, saubere Dokumente.",
      "3. Mehr Verantwortung übernehmen – Kollegen unterstützen, Abläufe mitgestalten.",
      "4. Partner werden – eigene Firma innerhalb von Mobil Truck gründen und einen eigenen Zweig aufbauen.",
    ],
    note: "Wenn du Details besprechen möchtest, schreib uns über die Seite „Beitreten“ oder im Forum. Wir antworten so klar und ehrlich wie möglich.",
  },

  es: {
    badge: "Mobil Truck • para conductores",
    title: "Trabajar como conductor en Mobil Truck",
    subtitle:
      "Mobil Truck es una red de empresas de transporte europeas. Para nosotros el conductor es un socio, no un recurso desechable. Importan la estabilidad, la honestidad y las posibilidades reales de crecer.",
    blocks: [
      {
        title: "Qué ofrecemos",
        items: [
          "Camiones y semirremolques europeos modernos.",
          "Rutas dentro de la UE, sin esquemas dudosos ni viajes grises.",
          "Pago puntual y control transparente de kilómetros y horas.",
          "Jornadas y descansos según la normativa europea.",
          "Soporte 24/7 con documentación, navegación y cuestiones técnicas.",
          "Datos reales y normas claras, sin deducciones ocultas.",
          "Un camino definido para pasar de conductor a socio del holding.",
        ],
      },
      {
        title: "Requisitos",
        items: [
          "Permiso de conducir categoría CE.",
          "Tarjeta de tacógrafo y disposición a respetar los tiempos de trabajo y descanso.",
          "Cuidado del vehículo y de la carga.",
          "Orden con la documentación y trato respetuoso con el cliente.",
          "Experiencia en rutas dentro de la UE bienvenida, pero no obligatoria.",
          "Voluntad de trabajar de manera legal y transparente, sin atajos ni trampas.",
        ],
      },
      {
        title: "Por qué aquí se puede crecer",
        items: [
          "Ves la economía real de cada viaje y entiendes de dónde sale tu salario.",
          "Los buenos conductores pueden convertirse en jefes de equipo, gestores o futuros socios.",
          "El holding puede ayudarte a montar tu propia empresa dentro de Mobil Truck.",
          "El modelo de red del 8% permite crear ingresos pasivos a largo plazo.",
          "Los riesgos se reparten entre muchas empresas: no todo depende de un solo jefe.",
        ],
      },
    ],
    pathTitle: "Camino del conductor dentro de Mobil Truck",
    steps: [
      "1. Empezar como conductor — conocer rutas, clientes, vehículos y condiciones reales.",
      "2. Demostrar fiabilidad — disciplina, conducción segura, documentos en orden.",
      "3. Asumir más responsabilidad — ayudar a otros, apoyar la coordinación y la comunicación.",
      "4. Convertirse en socio — abrir tu propia empresa dentro de Mobil Truck y construir tu propia rama.",
    ],
    note: "Si quieres más información, escríbenos a través de la página «Unirse» o en el foro. Respondemos de forma tranquila y clara.",
  },
};

const DriversPage: React.FC = () => {
  const { language } = useLanguage();
  const t = driversText[language] || driversText["ru"];

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

        {/* Blocks */}
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

        {/* Path */}
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
