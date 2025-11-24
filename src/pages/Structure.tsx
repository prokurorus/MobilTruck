import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const structureText: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    levelsTitle: string;
    levels: string[];
    percentTitle: string;
    percentIntro: string;
    percentList: string[];
    percentNote: string;
    rolesTitle: string;
    roles: string[];
    pathTitle: string;
    pathSteps: string[];
    backHint: string;
  }
> = {
  ru: {
    badge: "Mobil Truck • структура холдинга",
    title: "Как устроен холдинг Mobil Truck",
    subtitle:
      "Mobil Truck — это сеть взаимосвязанных компаний. Водители, партнёры и головной холдинг зарабатывают по прозрачной, заранее понятной модели. Ниже — краткая схема, без красивых слов.",
    levelsTitle: "Уровни структуры",
    levels: [
      "1. Головной холдинг — бренд, общая стратегия, ключевые договоры с заказчиками, поддержка и IT-инфраструктура.",
      "2. Партнёрские компании (UG / GmbH) — независимые юрлица под брендом Mobil Truck, работающие по единой модели.",
      "3. Ветки внутри холдинга — цепочка компаний, которые основал один предприниматель (основатель ветки).",
      "4. Операционный уровень — водители, диспетчеры, механики и вся команда, которая двигает груз и зарабатывает деньги."
    ],
    percentTitle: "Фиксированный сетевой процент 8%",
    percentIntro:
      "Каждая компания холдинга отдаёт заранее оговорённую долю прибыли на развитие сети. Эта доля фиксирована и одинакова для всех — 8%. Она делится по уровням вверх по ветке:",
    percentList: [
      "4% — основателю компании (создал эту конкретную фирму).",
      "2% — компании уровнем выше в ветке.",
      "1% — следующему уровню.",
      "0,5% — ещё выше."
    ],
    percentNote:
      "Дальше проценты могут продолжаться по убывающей, но общая сумма никогда не выходит за предел 8%. Так основатель ветки заинтересован развивать сеть до любой глубины, не забирая чужую прибыль и не ломая экономику низового уровня.",
    rolesTitle: "Роли участников",
    roles: [
      "Водитель — получает ставку и/или процент по прозрачной схеме, знает, откуда берётся его доход и какие расходы несёт компания.",
      "Партнёр (владелец компании) — отвечает за свою фирму, команду и технику, подключён к общему бренду и получает долю сетевого процента от созданных им компаний.",
      "Основатель ветки — предприниматель, который строит свою цепочку компаний внутри холдинга и получает пассивный доход от всей ветки (в рамках тех же 8%).",
      "Холдинг — отвечает за правила игры, защиту бренда, общие сервисы и поддержку. Не забирает «скрытые» проценты поверх согласованной модели."
    ],
    pathTitle: "Типичный путь участника",
    pathSteps: [
      "1. Водитель: устроиться, понять реальную экономику рейсов, убедиться в прозрачности расчётов.",
      "2. Партнёр: открыть свою компанию (UG/GmbH) под брендом Mobil Truck по понятной модели договоров.",
      "3. Основатель ветки: помогать другим запускать свои компании и получать долю сетевого процента с созданных фирм."
    ],
    backHint:
      "Если хочешь вникнуть глубже — напиши через страницу «Присоединиться» или задай вопросы на форуме. Структура — это только каркас, детали обсудим лично."
  },

  en: {
    badge: "Mobil Truck • holding structure",
    title: "How the Mobil Truck holding works",
    subtitle:
      "Mobil Truck is a network of connected companies. Drivers, partners and the head holding earn by a clear, predefined model. Below is a short, honest overview — without marketing fluff.",
    levelsTitle: "Structure levels",
    levels: [
      "1. Head holding — brand, overall strategy, key customer contracts, support and IT infrastructure.",
      "2. Partner companies (UG / GmbH) — independent legal entities under the Mobil Truck brand, working by a unified model.",
      "3. Branches inside the holding — a chain of companies founded by one entrepreneur (branch founder).",
      "4. Operational level — drivers, dispatchers, mechanics and the whole team that actually moves cargo and generates revenue."
    ],
    percentTitle: "Fixed network share: 8%",
    percentIntro:
      "Each company in the holding allocates a predefined share of its profit to the network. This share is fixed and the same for everyone — 8%. It is distributed upwards along the branch:",
    percentList: [
      "4% — to the founder of the company (who created this specific firm).",
      "2% — to the company one level above in the branch.",
      "1% — to the next level.",
      "0.5% — to the next level above."
    ],
    percentNote:
      "Further levels can continue with decreasing percentages, but the total never exceeds 8%. This way, the branch founder is motivated to grow the network to any depth without destroying unit economics at the lower levels.",
    rolesTitle: "Roles in the system",
    roles: [
      "Driver — receives salary and/or percentage by a transparent scheme, understands where the money comes from and what costs the company has.",
      "Partner (company owner) — responsible for their own firm, team and trucks, connected to the common brand and receiving a share of the network percentage from the companies they create.",
      "Branch founder — entrepreneur who builds their own chain of companies inside the holding and receives passive income from the whole branch (within the same 8%).",
      "Holding — responsible for the rules of the game, brand protection, common services and support. It does not secretly take extra margins above the agreed model."
    ],
    pathTitle: "Typical path inside Mobil Truck",
    pathSteps: [
      "1. Driver: join, understand the real economics of routes and see that payouts are honest.",
      "2. Partner: open your own company (UG/GmbH) under the Mobil Truck brand with clear contracts.",
      "3. Branch founder: help others launch companies and receive a share of the network percent from the firms you create."
    ],
    backHint:
      "If you want to go deeper, send a message via the Join page or ask on the forum. The structure is just the skeleton — details we will discuss personally."
  },

  de: {
    badge: "Mobil Truck • Holding-Struktur",
    title: "Wie der Mobil-Truck-Holding aufgebaut ist",
    subtitle:
      "Mobil Truck ist ein Netzwerk miteinander verbundener Unternehmen. Fahrer, Partner und der Holdingkopf verdienen nach einem klaren, vorher festgelegten Modell. Unten eine kurze, ehrliche Übersicht.",
    levelsTitle: "Ebenen der Struktur",
    levels: [
      "1. Kopfholding – Marke, Gesamtstrategie, Hauptverträge mit Auftraggebern, Support und IT-Infrastruktur.",
      "2. Partnerfirmen (UG / GmbH) – rechtlich selbständige Gesellschaften unter der Marke Mobil Truck, die nach einem einheitlichen Modell arbeiten.",
      "3. Äste innerhalb der Holding – eine Kette von Firmen, die von einem Unternehmer gegründet wurden (Gründer des Astes).",
      "4. Operative Ebene – Fahrer, Disponenten, Mechaniker und das gesamte Team, das die Ladung bewegt und Geld verdient."
    ],
    percentTitle: "Fester Netzwerkanteil: 8 %",
    percentIntro:
      "Jede Firma im Holdingverbund gibt einen vorher vereinbarten Gewinnanteil für die Entwicklung des Netzwerks ab. Dieser Anteil ist fest und für alle gleich – 8 %. Er wird stufenweise nach oben im Ast verteilt:",
    percentList: [
      "4 % – an den Gründer der jeweiligen Firma.",
      "2 % – an die Firma eine Ebene darüber im Ast.",
      "1 % – an die nächste Ebene.",
      "0,5 % – an die nächste Ebene darüber."
    ],
    percentNote:
      "Weitere Ebenen können mit kleineren Prozentsätzen folgen, aber die Gesamtsumme überschreitet nie 8 %. So ist der Astgründer motiviert, das Netzwerk in die Tiefe zu entwickeln, ohne die Wirtschaftlichkeit der unteren Ebene zu zerstören.",
    rolesTitle: "Rollen im System",
    roles: [
      "Fahrer – erhält Lohn und/oder Prozentsatz nach einem transparenten Schema und versteht, woher das Geld kommt und welche Kosten die Firma trägt.",
      "Partner (Unternehmensinhaber) – verantwortet seine eigene Firma, sein Team und die Technik, ist an die gemeinsame Marke angeschlossen und erhält einen Anteil am Netzwerkprozentsatz der von ihm gegründeten Firmen.",
      "Astgründer – Unternehmer, der seine eigene Firmenkette innerhalb der Holding aufbaut und passives Einkommen aus dem gesamten Ast erhält (innerhalb der gleichen 8 %).",
      "Holding – verantwortet die Spielregeln, den Markenschutz, gemeinsame Dienste und Unterstützung. Sie nimmt keine „versteckten“ Prozente über dem vereinbarten Modell."
    ],
    pathTitle: "Typischer Weg im Mobil-Truck-System",
    pathSteps: [
      "1. Fahrer: einsteigen, die reale Route-Ökonomie verstehen und sehen, dass die Abrechnungen fair sind.",
      "2. Partner: eigene Firma (UG/GmbH) unter der Marke Mobil Truck mit klaren Verträgen gründen.",
      "3. Astgründer: anderen beim Start ihrer Firmen helfen und einen Anteil am Netzwerkprozent der aufgebauten Firmen erhalten."
    ],
    backHint:
      "Wenn du tiefer einsteigen willst, melde dich über die Seite „Prисоединиться/Join“ oder im Forum. Die Struktur ist nur das Gerüst – die Details besprechen wir persönlich."
  },

  es: {
    badge: "Mobil Truck • estructura del holding",
    title: "Cómo está organizado el holding Mobil Truck",
    subtitle:
      "Mobil Truck es una red de empresas conectadas. Conductores, socios y la holding principal ganan según un modelo claro y definido de antemano. A continuación, un esquema breve y honesto.",
    levelsTitle: "Niveles de la estructura",
    levels: [
      "1. Holding principal: marca, estrategia general, contratos clave con clientes, soporte e infraestructura de TI.",
      "2. Empresas socias (UG / GmbH): entidades legales independientes bajo la marca Mobil Truck que trabajan con un modelo unificado.",
      "3. Ramas dentro del holding: cadena de empresas fundadas por un mismo emprendedor (fundador de la rama).",
      "4. Nivel operativo: conductores, despachadores, mecánicos y todo el equipo que realmente mueve la carga y genera ingresos."
    ],
    percentTitle: "Porcentaje de red fijo: 8%",
    percentIntro:
      "Cada empresa del holding destina una parte de su beneficio al desarrollo de la red. Esta parte es fija e igual para todos: 8%. Se reparte hacia arriba a lo largo de la rama:",
    percentList: [
      "4% — al fundador de la empresa (quien creó esta firma concreta).",
      "2% — a la empresa un nivel por encima en la rama.",
      "1% — al siguiente nivel.",
      "0,5% — al siguiente nivel superior."
    ],
    percentNote:
      "Los niveles pueden continuar con porcentajes decrecientes, pero el total nunca supera el 8%. Así, el fundador de la rama está interesado en desarrollar la red en profundidad sin romper la economía de las empresas de base.",
    rolesTitle: "Roles en el sistema",
    roles: [
      "Conductor: recibe salario y/o porcentaje según un esquema transparente, entiende de dónde viene el dinero y qué gastos tiene la empresa.",
      "Socio (propietario de empresa): responsable de su propia firma, equipo y camiones; conectado a la marca común y recibiendo parte del porcentaje de red de las empresas que crea.",
      "Fundador de rama: emprendedor que construye su propia cadena de empresas dentro del holding y recibe ingresos pasivos de toda la rama (dentro del mismo 8%).",
      "Holding: responsable de las reglas del juego, protección de la marca, servicios comunes y soporte. No toma porcentajes ocultos por encima del modelo acordado."
    ],
    pathTitle: "Camino típico dentro de Mobil Truck",
    pathSteps: [
      "1. Conductor: entrar, entender la economía real de las rutas y ver que los pagos son honestos.",
      "2. Socio: abrir tu propia empresa (UG/GmbH) bajo la marca Mobil Truck con contratos claros.",
      "3. Fundador de rama: ayudar a otros a lanzar empresas y recibir una parte del porcentaje de red de las firmas que creas."
    ],
    backHint:
      "Si quieres profundizar, escribe a través de la página «Join / Присоединиться» o pregunta en el foro. La estructura es solo el esqueleto; los detalles los hablamos personalmente."
  }
};

const StructurePage: React.FC = () => {
  const { language } = useLanguage();
  const t = structureText[language] ?? structureText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Верхний блок */}
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

          <div className="flex flex-col items-end gap-2">
            <LanguageSwitcher />
            <nav className="flex flex-wrap gap-2 text-[11px] text-zinc-600 mt-1">
              <a
                href="/"
                className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-50 transition"
              >
                Главная
              </a>
              <a
                href="/join"
                className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-50 transition"
              >
                Присоединиться
              </a>
              <a
                href="/forum"
                className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-50 transition"
              >
                Форум
              </a>
            </nav>
          </div>
        </div>

        {/* Блоки структуры */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              {t.levelsTitle}
            </h2>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              {t.levels.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              {t.percentTitle}
            </h2>
            <p className="text-sm text-zinc-700">{t.percentIntro}</p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              {t.percentList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-zinc-500">{t.percentNote}</p>
          </div>

          <div className="card space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              {t.rolesTitle}
            </h2>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              {t.roles.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Путь участника */}
        <section className="card space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            {t.pathTitle}
          </h2>
          <ol className="text-sm text-zinc-700 space-y-1 list-decimal list-inside">
            {t.pathSteps.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
          <p className="text-xs text-zinc-500">{t.backHint}</p>
        </section>
      </div>
    </main>
  );
};

export default StructurePage;
