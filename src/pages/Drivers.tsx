import React from "react";
import { useLanguage } from "../context/LanguageContext";

type DriverContent = {
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
};

const driversText: Record<string, DriverContent> = {
  // ———————————————————————————
  // 🇷🇺 RUSSIAN
  // ———————————————————————————
  ru: {
    badge: "Mobil Truck • для водителей",
    title: "Работа водителем в Mobil Truck",
    subtitle:
      "Mobil Truck — это европейский транспортный холдинг, где водитель — партнёр, а не расходный материал. Официальный немецкий контракт, стабильность и условия, в которых можно жить нормально, а не выживать.",
    blocks: [
      {
        title: "Что мы предлагаем",
        items: [
          "Работа строго по официальному немецкому трудовому контракту.",
          "Современные европейские тягачи — почти все новые, с малым пробегом.",
          "Рабочие расстояния не более 300 км в одну сторону (работа «по месту»).",
          "99% рейсов — по Германии, без бесконечных многодневных рейсов по всей Европе.",
          "Суббота и воскресенье — гарантированные выходные на базе компании.",
          "Работа в субботу — только по желанию и оплачивается по двойному тарифу.",
          "Соблюдение режима труда и отдыха строго по нормам ЕС.",
          "Своевременная выплата зарплаты и прозрачный учёт часов и пробега.",
          "Реальная статистика и понятные правила — без скрытых удержаний.",
          "Спецодежда и спецобувь (включая обувь для ADR при необходимости).",
        ],
      },
      {
        title: "Условия на базе Mobil Truck",
        items: [
          "Большая чистая кухня-столовая — можно спокойно приготовить и поесть.",
          "Стиральные и сушильные машины на базе — не нужно искать платную прачечную.",
          "Чистые душевые и санузлы, за порядком следят.",
          "Корпоративный транспорт для поездок в магазин по выходным.",
          "Бесплатная корпоративная парилка (сауна) для водителей и сотрудников офиса.",
          "В большие национальные праздники — вечеринки и встречи за счёт компании.",
          "Водители без собственного жилья в Германии могут жить на базе.",
          "Собственная станция технического обслуживания на территории базы.",
          "Мобильная выездная техбригада — помощь на дороге при поломках.",
        ],
      },
      {
        title: "Социальный пакет и оформление",
        items: [
          "Полное официальное оформление в Германии: налоги, пенсия, больничные.",
          "Медицинская страховка оформляется предприятием.",
          "Помощь в получении банковской карты немецкого банка.",
          "Сопровождение в оформлении всех необходимых документов.",
          "Помощь в поиске жилья рядом с базой.",
          "Администрация помогает с адаптацией и решением бытовых вопросов.",
          "Культура уважения: мы ценим людей, которые работают с нами.",
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
          "Сильные водители могут стать старшими, диспетчерами или наставниками.",
          "Холдинг помогает в будущем открыть свою фирму внутри структуры Mobil Truck.",
          "Модель сетевого дохода даёт шанс создать долгосрочный стабильный доход.",
          "Риски распределены по структуре — нет «одного хозяина, который решает всё».",
        ],
      },
    ],
    pathTitle: "Путь водителя в холдинге Mobil Truck",
    steps: [
      "1. Начать водителем — понять маршруты, клиентов, технику и организацию работы.",
      "2. Укрепиться — показать надёжность, дисциплину и качество вождения и документооборота.",
      "3. Взять больше ответственности — помогать коллегам, участвовать в организации процессов.",
      "4. Стать партнёром — открыть свою фирму внутри Mobil Truck и строить собственную ветку.",
    ],
    note:
      "Хочешь обсудить детали — напиши через страницу «Присоединиться» или на форуме. Отвечаем спокойно и по делу.",
  },

  // ———————————————————————————
  // 🇬🇧 ENGLISH
  // ———————————————————————————
  en: {
    badge: "Mobil Truck • for drivers",
    title: "Driving for Mobil Truck",
    subtitle:
      "Mobil Truck is a European transport holding where a driver is a partner, not expendable material. Official German contract, stability, and conditions where you can live like a human being, not just survive.",
    blocks: [
      {
        title: "What we offer",
        items: [
          "Work strictly under an official German employment contract.",
          "Modern European trucks — most of them are new, with low mileage.",
          "Typical working distance up to 300 km one way (local/regional work).",
          "99% of routes are within Germany, no endless pan-European long-haul.",
          "Saturday and Sunday are guaranteed days off at the company base.",
          "Saturday work is only if you want it and is paid at double rate.",
          "Working and rest times strictly according to EU regulations.",
          "On-time salary payment and transparent tracking of hours and mileage.",
          "Real statistics and clear rules — no hidden deductions or tricks.",
          "Workwear and safety footwear provided (including ADR shoes if needed).",
        ],
      },
      {
        title: "Conditions at the Mobil Truck base",
        items: [
          "Large, clean kitchen-dining area — you can cook and eat in peace.",
          "Washing machines and dryers available at the base.",
          "Clean showers and toilets with regular cleaning.",
          "Company transport for supermarket trips on weekends.",
          "Free company sauna for drivers and office staff.",
          "Company-funded parties and gatherings on major national holidays.",
          "Drivers without their own accommodation in Germany can live at the base.",
          "In-house workshop (service station) on the company premises.",
          "Mobile roadside assistance team for breakdowns on the road.",
        ],
      },
      {
        title: "Social package and paperwork",
        items: [
          "Full official employment in Germany: taxes, pension, sick leave.",
          "Health insurance arranged by the company.",
          "Support in opening a bank account in a German bank.",
          "Help with all necessary documents and registrations.",
          "Support in finding accommodation near the base.",
          "Management helps with adaptation and everyday questions.",
          "Respectful communication culture — we value people who work with us.",
        ],
      },
      {
        title: "Driver requirements",
        items: [
          "Valid CE driving licence.",
          "Tachograph card and readiness to follow driving/rest time regulations.",
          "Responsible attitude towards the vehicle and cargo.",
          "Accuracy with documents and respectful communication with customers.",
          "Experience within the EU is welcome but not mandatory.",
          "Readiness to work legally and transparently, without “grey” schemes.",
        ],
      },
      {
        title: "Why you can grow here",
        items: [
          "You see the real economics of each trip and understand your income.",
          "Strong drivers can become shift leaders, dispatchers, or mentors.",
          "The holding can help you later open your own company within Mobil Truck.",
          "The network income model allows you to build a long-term stable income.",
          "Risks are distributed across the structure — there is no single “owner of everything”.",
        ],
      },
    ],
    pathTitle: "Driver’s path in the Mobil Truck holding",
    steps: [
      "1. Start as a driver — learn the routes, customers, vehicles and work organisation.",
      "2. Consolidate — show reliability, discipline, and quality in driving and paperwork.",
      "3. Take more responsibility — help colleagues and participate in organising processes.",
      "4. Become a partner — open your own company within Mobil Truck and build your own branch.",
    ],
    note:
      "If you want to discuss details, contact us via the “Join” page or in the forum. We answer calmly and to the point.",
  },

  // ———————————————————————————
  // 🇩🇪 GERMAN
  // ———————————————————————————
  de: {
    badge: "Mobil Truck • für Fahrer",
    title: "Arbeiten als Fahrer bei Mobil Truck",
    subtitle:
      "Mobil Truck ist ein europäischer Transport-Holding, in dem der Fahrer Partner ist – kein Verbrauchsmaterial. Offizieller deutscher Arbeitsvertrag, Stabilität und Bedingungen, in denen man normal leben kann, nicht nur überleben.",
    blocks: [
      {
        title: "Was wir anbieten",
        items: [
          "Arbeit ausschließlich mit offiziellem deutschen Arbeitsvertrag.",
          "Moderne europäische Lkw – die meisten sind neu und haben wenig Laufleistung.",
          "Übliche Entfernungen bis ca. 300 km je Strecke (regionaler Einsatz).",
          "99 % der Touren finden innerhalb Deutschlands statt.",
          "Samstag und Sonntag sind garantierte freie Tage auf dem Betriebsgelände.",
          "Arbeit am Samstag nur auf Wunsch und mit doppelter Bezahlung.",
          "Lenk- und Ruhezeiten streng nach EU-Vorschriften.",
          "Pünktliche Lohnzahlungen und transparente Erfassung von Stunden und Kilometern.",
          "Klare Regeln, keine versteckten Abzüge oder „Tricks“. ",
          "Arbeitskleidung und Sicherheitsschuhe (inkl. ADR-Schuhe, falls nötig).",
        ],
      },
      {
        title: "Bedingungen auf dem Betriebsgelände",
        items: [
          "Große, saubere Küche mit Essbereich – man kann in Ruhe kochen und essen.",
          "Waschmaschinen und Trockner stehen auf dem Gelände zur Verfügung.",
          "Saubere Duschen und WCs, regelmäßige Reinigung.",
          "Firmenfahrzeug für Einkäufe am Wochenende.",
          "Kostenlose firmeneigene Sauna für Fahrer und Büroangestellte.",
          "Firmeneigene Feiern und Treffen an großen nationalen Feiertagen.",
          "Fahrer ohne eigene Wohnung in Deutschland können auf dem Gelände wohnen.",
          "Eigene Werkstatt (Service-Station) auf dem Firmengelände.",
          "Mobile Pannenhilfe-Crew für Unterstützung auf der Straße.",
        ],
      },
      {
        title: "Sozialpaket und Formalitäten",
        items: [
          "Vollständige offizielle Anstellung in Deutschland: Steuern, Rente, Lohnfortzahlung.",
          "Krankenversicherung wird vom Unternehmen organisiert.",
          "Unterstützung bei der Kontoeröffnung bei einer deutschen Bank.",
          "Hilfe bei allen notwendigen Behördengängen und Dokumenten.",
          "Unterstützung bei der Wohnungssuche in der Nähe des Betriebsgeländes.",
          "Die Unternehmensleitung hilft bei der Eingewöhnung und Alltagsfragen.",
          "Respektvolle Unternehmenskultur – wir schätzen die Menschen, die mit uns fahren.",
        ],
      },
      {
        title: "Anforderungen an den Fahrer",
        items: [
          "Führerschein der Klasse CE.",
          "Fahrerkarte und Bereitschaft, Lenk- und Ruhezeiten einzuhalten.",
          "Verantwortungsbewusster Umgang mit Fahrzeug und Ladung.",
          "Sorgfalt bei Papieren und respektvoller Umgang mit Kunden.",
          "Erfahrung im EU-Verkehr ist willkommen, aber keine Pflicht.",
          "Bereitschaft, legal und transparent zu arbeiten – ohne „graue“ Modelle.",
        ],
      },
      {
        title: "Warum man sich hier entwickeln kann",
        items: [
          "Du siehst die tatsächliche Wirtschaftlichkeit deiner Touren und verstehst deinen Verdienst.",
          "Starke Fahrer können Schichtleiter, Disponenten oder Mentoren werden.",
          "Der Holding kann dich später beim Aufbau einer eigenen Firma innerhalb von Mobil Truck unterstützen.",
          "Das Netzwerk-Einkommensmodell erlaubt den Aufbau eines stabilen, langfristigen Einkommens.",
          "Risiken sind über die Struktur verteilt – es gibt keinen einzigen „Allmachts-Chef“. ",
        ],
      },
    ],
    pathTitle: "Entwicklungsweg eines Fahrers im Mobil Truck Holding",
    steps: [
      "1. Einstieg als Fahrer – Routen, Kunden, Fahrzeuge und Abläufe kennenlernen.",
      "2. Festigen – Zuverlässigkeit, Disziplin und Qualität bei Fahren und Papierarbeit zeigen.",
      "3. Mehr Verantwortung übernehmen – Kollegen unterstützen und Abläufe mitgestalten.",
      "4. Partner werden – eine eigene Firma innerhalb von Mobil Truck gründen und eine eigene Linie aufbauen.",
    ],
    note:
      "Wenn du Details besprechen willst, melde dich über die Seite „Join“ oder im Forum. Wir antworten ruhig und sachlich.",
  },

  // ———————————————————————————
  // 🇪🇸 SPANISH
  // ———————————————————————————
  es: {
    badge: "Mobil Truck • para conductores",
    title: "Trabajar como conductor en Mobil Truck",
    subtitle:
      "Mobil Truck es un holding de transporte europeo donde el conductor es un socio, no material desechable. Contrato laboral alemán oficial, estabilidad y condiciones en las que se puede vivir con dignidad.",
    blocks: [
      {
        title: "Qué ofrecemos",
        items: [
          "Trabajo estrictamente con contrato laboral alemán oficial.",
          "Camiones europeos modernos, la mayoría nuevos y con poco kilometraje.",
          "Distancias de trabajo habituales hasta 300 km por trayecto (trabajo regional).",
          "El 99 % de las rutas son dentro de Alemania.",
          "Sábado y domingo son días libres garantizados en la base de la empresa.",
          "El trabajo en sábado es sólo si tú quieres y se paga al doble.",
          "Horas de conducción y descanso según la normativa de la UE.",
          "Pago puntual del salario y registro transparente de horas y kilómetros.",
          "Reglas claras, sin deducciones ocultas ni trucos.",
          "Ropa de trabajo y calzado de seguridad (incluido ADR si es necesario).",
        ],
      },
      {
        title: "Condiciones en la base de Mobil Truck",
        items: [
          "Cocina-comedor grande y limpia, donde puedes cocinar y comer con calma.",
          "Lavadoras y secadoras disponibles en la base.",
          "Duchas y aseos limpios, con mantenimiento regular.",
          "Transporte corporativo para ir al supermercado los fines de semana.",
          "Sauna corporativa gratuita para conductores y personal de oficina.",
          "Fiestas y encuentros organizados por la empresa en grandes fiestas nacionales.",
          "Los conductores que aún no tienen vivienda propia en Alemania pueden vivir en la base.",
          "Taller propio (estación de servicio) en el recinto de la empresa.",
          "Equipo móvil de asistencia en carretera para averías durante el viaje.",
        ],
      },
      {
        title: "Paquete social y documentación",
        items: [
          "Empleo oficial completo en Alemania: impuestos, pensión, baja por enfermedad.",
          "Seguro médico tramitado por la empresa.",
          "Ayuda para abrir una cuenta bancaria en un banco alemán.",
          "Asistencia con todos los documentos y registros necesarios.",
          "Apoyo en la búsqueda de vivienda cerca de la base.",
          "La administración ayuda con la adaptación y la vida diaria.",
          "Cultura de respeto: valoramos a las personas que trabajan con nosotros.",
        ],
      },
      {
        title: "Requisitos para el conductor",
        items: [
          "Permiso de conducir categoría CE válido.",
          "Tarjeta de tacógrafo y disposición a cumplir las normas de trabajo y descanso.",
          "Actitud responsable hacia el camión y la carga.",
          "Cuidado con los documentos y trato respetuoso con los clientes.",
          "Experiencia previa en la UE es bienvenida, pero no obligatoria.",
          "Voluntad de trabajar de forma legal y transparente, sin esquemas “grises”.",
        ],
      },
      {
        title: "Por qué aquí se puede crecer",
        items: [
          "Ves la economía real de cada ruta y entiendes de dónde viene tu ingreso.",
          "Los mejores conductores pueden convertirse en jefes de equipo, coordinadores o mentores.",
          "El holding puede ayudar más adelante a crear tu propia empresa dentro de Mobil Truck.",
          "El modelo de ingresos en red permite construir un ingreso estable a largo plazo.",
          "Los riesgos están repartidos en la estructura: no hay un único jefe absoluto.",
        ],
      },
    ],
    pathTitle: "Camino del conductor dentro de Mobil Truck",
    steps: [
      "1. Empezar como conductor: conocer rutas, clientes, vehículos y organización del trabajo.",
      "2. Consolidarse: demostrar fiabilidad, disciplina y calidad en la conducción y la documentación.",
      "3. Asumir más responsabilidad: ayudar a los compañeros y participar en la organización de los procesos.",
      "4. Convertirse en socio: crear tu propia empresa dentro de Mobil Truck y desarrollar tu propia rama.",
    ],
    note:
      "Si quieres hablar de detalles, escríbenos a través de la página “Unirse” o en el foro. Respondemos con calma y claridad.",
  },
};

const DriversPage: React.FC = () => {
  const { language } = useLanguage();
  const t = driversText[language] || driversText["en"];

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

        {/* Main blocks */}
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

        {/* Path block */}
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
