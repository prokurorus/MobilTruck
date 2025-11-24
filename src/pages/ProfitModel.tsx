import React from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";

const profitText: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle: string;
    blocks: {
      title: string;
      items: string[];
    }[];
    exampleTitle: string;
    exampleIntro: string;
    example: {
      label: string;
      value: string;
    }[];
    // новый блок про глубину
    dynamicTitle: string;
    dynamicIntro: string;
    dynamicHeaders: {
      level: string;
      companies: string;
      percent: string;
    };
    dynamicRows: {
      level: string;
      companies: string;
      percent: string;
    }[];
    dynamicNote: string;
    dynamicConclusion: string;

    conclusionTitle: string;
    conclusion: string;
  }
> = {
  ru: {
    badge: "Mobil Truck • модель распределения прибыли",
    title: "Как работает модель распределения прибыли",
    subtitle:
      "В Mobil Truck нет скрытых процентов и «чёрных ящиков». Есть фиксированная структура: каждая компания передаёт 8% своей прибыли наверх по ветке. Эти 8% делятся по простой формуле, одинаковой для всех.",

    blocks: [
      {
        title: "Фиксированные уровни распределения",
        items: [
          "4% — основателю (создателю) компании.",
          "2% — компании, стоящей уровнем выше.",
          "1% — ещё выше.",
          "0,5% — следующий уровень."
        ]
      },
      {
        title: "Почему модель устойчива",
        items: [
          "8% — фиксированный потолок, не зависящий от глубины ветки.",
          "Доход основателей растёт за счёт расширения сети, а не за счёт давления на нижние уровни.",
          "Компания на нижнем уровне не теряет экономику: 92% остаются внутри фирмы.",
          "Все компании холдинга работают по одним и тем же правилам.",
          "Партнёры заинтересованы помогать друг другу, так как никто не может забирать больше 8%."
        ]
      },
      {
        title: "Что получает основатель ветки",
        items: [
          "4% со всех компаний, которые он лично создал.",
          "2%–1%–0,5% с компаний, созданных его «внуками» и дальше по ветке.",
          "Пассивный доход при нулевой операционной нагрузке.",
          "Рост стоимости всей ветки при увеличении числа компаний."
        ]
      }
    ],

    exampleTitle: "Пример расчёта на одной компании",
    exampleIntro:
      "Допустим, компания в ветке заработала 10 000 € чистой прибыли в месяц. Смотрим, как распределяются только сетевые 8%:",

    example: [
      { label: "Общая прибыль компании", value: "10 000 €" },
      { label: "8% сетевого процента", value: "800 €" },
      { label: "4% • основателю компании", value: "400 €" },
      { label: "2% • следующему уровню", value: "200 €" },
      { label: "1% • ещё выше", value: "100 €" },
      { label: "0,5% • следующий уровень", value: "50 €" },
      {
        label: "Оставшиеся 0,5%",
        value: "могут быть использованы для более высоких уровней или резервов"
      },
      { label: "92% остаются в компании", value: "9 200 €" }
    ],

    // --- динамика по 10 уровням ---
    dynamicTitle: "Почему глубина приносит деньги (пример на 10 уровнях)",
    dynamicIntro:
      "Представим, что каждая компания зарабатывает 10 000 € в месяц, а сеть развивалась несколько лет. На верхних уровнях компаний мало, в глубине — гораздо больше. Процент падает, но количество фирм растёт быстрее.",
    dynamicHeaders: {
      level: "Уровень",
      companies: "Компаний в уровне",
      percent: "Процент основателя"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %" },
      { level: "2", companies: "5", percent: "2 %" },
      { level: "3", companies: "12", percent: "1 %" },
      { level: "4", companies: "30", percent: "0,5 %" },
      { level: "5", companies: "70", percent: "0,25 %" },
      { level: "6", companies: "150", percent: "0,125 %" },
      { level: "7", companies: "300", percent: "0,0625 %" },
      { level: "8", companies: "600", percent: "0,03125 %" },
      { level: "9", companies: "1 000", percent: "0,015625 %" },
      { level: "10", companies: "1 500", percent: "0,0078125 %" }
    ],
    dynamicNote:
      "Важно не запоминать цифры, а увидеть логику: чем глубже уровень, тем меньше процент, но тем больше компаний. Маленький процент, умноженный на большое количество фирм, даёт серьёзный доход.",
    dynamicConclusion:
      "В таком примере совокупный пассивный доход основателя со всех 10 уровней сети получается около 15 000 € в месяц только от сети — без учёта прибыли его собственных компаний.",

    conclusionTitle: "Итог",
    conclusion:
      "Модель проста, честна и математически предсказуема. Что заработал — то и получил. Каждый участник понимает, за что он получает деньги и кому платит: водители — свою зарплату, компания — 92% прибыли, сеть — фиксированные 8%."
  },

  en: {
    badge: "Mobil Truck • profit distribution model",
    title: "How the profit distribution model works",
    subtitle:
      "Mobil Truck has no hidden margins or black boxes. Every company passes 8% of its profit upward in the branch. This 8% is split by a simple, predictable formula that is the same for everyone.",

    blocks: [
      {
        title: "Fixed distribution levels",
        items: [
          "4% — to the founder of the company.",
          "2% — to the level above.",
          "1% — to the next level.",
          "0.5% — to the next one above."
        ]
      },
      {
        title: "Why this model is stable",
        items: [
          "8% is a fixed cap that never changes with depth.",
          "Branch founders grow income through network expansion, not pressure on lower levels.",
          "92% always stays inside the company, so its own unit economics remain healthy.",
          "All companies operate under the same clear rules.",
          "Partners are motivated to support each other, because no one can take more than 8%."
        ]
      },
      {
        title: "What a branch founder earns",
        items: [
          "4% from the companies they personally created.",
          "2–1–0.5% from companies created by their ‘children’ and further down the branch.",
          "Passive income with zero operational load.",
          "Growth of the branch value as new companies appear."
        ]
      }
    ],

    exampleTitle: "Example for a single company",
    exampleIntro:
      "Assume a company in the branch earns 10 000 € net profit per month. The 8% network share is distributed as follows:",

    example: [
      { label: "Company net profit", value: "10 000 €" },
      { label: "8% network percent", value: "800 €" },
      { label: "4% • founder of the company", value: "400 €" },
      { label: "2% • next level", value: "200 €" },
      { label: "1% • higher level", value: "100 €" },
      { label: "0.5% • next one above", value: "50 €" },
      {
        label: "Remaining 0.5%",
        value: "may be used for higher levels or reserves"
      },
      { label: "92% remains in the company", value: "9 200 €" }
    ],

    dynamicTitle: "Why depth still pays (10-level example)",
    dynamicIntro:
      "Imagine each company earns 10 000 € per month and the network has been growing for a few years. At the top there are only a few companies; deeper there are many more. The percent goes down, but the number of firms grows faster.",
    dynamicHeaders: {
      level: "Level",
      companies: "Companies in level",
      percent: "Founder’s percent"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %" },
      { level: "2", companies: "5", percent: "2 %" },
      { level: "3", companies: "12", percent: "1 %" },
      { level: "4", companies: "30", percent: "0.5 %" },
      { level: "5", companies: "70", percent: "0.25 %" },
      { level: "6", companies: "150", percent: "0.125 %" },
      { level: "7", companies: "300", percent: "0.0625 %" },
      { level: "8", companies: "600", percent: "0.03125 %" },
      { level: "9", companies: "1 000", percent: "0.015625 %" },
      { level: "10", companies: "1 500", percent: "0.0078125 %" }
    ],
    dynamicNote:
      "The point is not to memorise numbers but to see the logic: a small percent on many companies can pay more than a big percent on a few companies.",
    dynamicConclusion:
      "In this example the founder receives roughly 15 000 € per month in passive income from the 10 levels of the network alone — not counting the profit of their own operating companies.",

    conclusionTitle: "Summary",
    conclusion:
      "The model is simple and mathematically clean. Earned — received. Everyone understands who pays whom and for what: drivers get their wages, the company keeps 92% of profit, the network receives a fixed 8%."
  },

  de: {
    badge: "Mobil Truck • Gewinnverteilungsmodell",
    title: "Wie das Gewinnverteilungsmodell funktioniert",
    subtitle:
      "Bei Mobil Truck gibt es keine versteckten Prozentsätze. Jede Firma gibt 8 % ihres Gewinns nach oben in der Kette. Diese 8 % werden nach einer einfachen, für alle gleichen Formel verteilt.",

    blocks: [
      {
        title: "Feste Verteilungsebenen",
        items: [
          "4 % — an den Gründer der Firma.",
          "2 % — an die Ebene darüber.",
          "1 % — an die nächste Ebene.",
          "0,5 % — an die Ebene darüber."
        ]
      },
      {
        title: "Warum dieses Modell stabil ist",
        items: [
          "8 % sind eine feste Obergrenze, unabhängig von der Tiefe.",
          "Gründer verdienen durch Wachstum des Netzwerks, nicht durch Druck auf die unteren Ebenen.",
          "92 % bleiben im Unternehmen, die eigene Wirtschaftlichkeit bleibt erhalten.",
          "Alle Firmen arbeiten nach denselben klaren Regeln.",
          "Alle sind motiviert, sich gegenseitig zu unterstützen – niemand kann mehr als 8 % nehmen."
        ]
      },
      {
        title: "Was der Astgründer verdient",
        items: [
          "4 % von Firmen, die er persönlich gegründet hat.",
          "2–1–0,5 % von tieferen Ebenen.",
          "Passives Einkommen ohne operative Belastung.",
          "Wertzuwachs des ganzen Astes durch neue Firmen."
        ]
      }
    ],

    exampleTitle: "Beispiel für eine Firma",
    exampleIntro:
      "Eine Firma erwirtschaftet 10 000 € Nettogewinn im Monat. So werden die 8 % Netzwerkanteil verteilt:",

    example: [
      { label: "Nettogewinn der Firma", value: "10 000 €" },
      { label: "8 % Netzwerkanteil", value: "800 €" },
      { label: "4 % • Gründer der Firma", value: "400 €" },
      { label: "2 % • nächste Ebene", value: "200 €" },
      { label: "1 % • Ebene darüber", value: "100 €" },
      { label: "0,5 % • nächste Ebene darüber", value: "50 €" },
      {
        label: "Verbleibende 0,5 %",
        value: "können für höhere Ebenen oder Reserven genutzt werden"
      },
      { label: "92 % bleiben im Unternehmen", value: "9 200 €" }
    ],

    dynamicTitle: "Warum Tiefe Geld bringt (Beispiel mit 10 Ebenen)",
    dynamicIntro:
      "Nehmen wir an, jede Firma verdient 10 000 € pro Monat und das Netzwerk wächst seit einigen Jahren. Oben gibt es nur wenige Firmen, in der Tiefe deutlich mehr. Der Prozentsatz sinkt, aber die Anzahl der Firmen wächst schneller.",
    dynamicHeaders: {
      level: "Ebene",
      companies: "Firmen in der Ebene",
      percent: "Prozent des Gründers"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %" },
      { level: "2", companies: "5", percent: "2 %" },
      { level: "3", companies: "12", percent: "1 %" },
      { level: "4", companies: "30", percent: "0,5 %" },
      { level: "5", companies: "70", percent: "0,25 %" },
      { level: "6", companies: "150", percent: "0,125 %" },
      { level: "7", companies: "300", percent: "0,0625 %" },
      { level: "8", companies: "600", percent: "0,03125 %" },
      { level: "9", companies: "1 000", percent: "0,015625 %" },
      { level: "10", companies: "1 500", percent: "0,0078125 %" }
    ],
    dynamicNote:
      "Wichtig ist nicht, sich alle Zahlen zu merken, sondern das Prinzip zu verstehen: kleinere Prozentsätze auf viele Firmen können mehr bringen als große Prozentsätze auf wenige Firmen.",
    dynamicConclusion:
      "In diesem Beispiel erhält der Gründer aus allen 10 Ebenen zusammen rund 15 000 € pro Monat an passivem Einkommen – zusätzlich zum Gewinn seiner eigenen operativen Firmen.",

    conclusionTitle: "Fazit",
    conclusion:
      "Das Modell ist einfach und sauber. Was verdient wird, wird ausgezahlt. Jeder versteht, wer wofür bezahlt: Fahrer, Firma und Netzwerk."
  },

  es: {
    badge: "Mobil Truck • modelo de distribución de beneficios",
    title: "Cómo funciona el modelo de distribución",
    subtitle:
      "En Mobil Truck no hay porcentajes ocultos. Cada empresa destina un 8 % de su beneficio a la red. Estos 8 % se reparten mediante una fórmula simple e igual para todos.",

    blocks: [
      {
        title: "Niveles fijos de distribución",
        items: [
          "4 % — al fundador de la empresa.",
          "2 % — al nivel superior.",
          "1 % — al siguiente nivel.",
          "0,5 % — al nivel superior."
        ]
      },
      {
        title: "Por qué el modelo es estable",
        items: [
          "8 % es un límite fijo que no cambia con la profundidad.",
          "El crecimiento del fundador viene de la expansión de la red, no de presionar a las empresas pequeñas.",
          "El 92 % queda dentro de la empresa, preservando su economía.",
          "Todas las empresas siguen las mismas reglas claras.",
          "Todos están motivados para ayudarse mutuamente: nadie puede llevarse más del 8 %."
        ]
      },
      {
        title: "Qué gana el fundador de la rama",
        items: [
          "4 % de las empresas que crea personalmente.",
          "2–1–0,5 % de los niveles inferiores.",
          "Ingreso pasivo sin carga operativa.",
          "Aumento del valor de toda la rama al crecer la red."
        ]
      }
    ],

    exampleTitle: "Ejemplo para una empresa",
    exampleIntro:
      "Una empresa gana 10 000 € netos al mes. Así se reparte el 8 % de la red:",

    example: [
      { label: "Beneficio neto de la empresa", value: "10 000 €" },
      { label: "8 % para la red", value: "800 €" },
      { label: "4 % • fundador de la empresa", value: "400 €" },
      { label: "2 % • nivel superior", value: "200 €" },
      { label: "1 % • siguiente nivel", value: "100 €" },
      { label: "0,5 % • nivel superior", value: "50 €" },
      {
        label: "0,5 % restante",
        value: "puede usarse para niveles superiores o reservas"
      },
      { label: "92 % queda en la empresa", value: "9 200 €" }
    ],

    dynamicTitle: "Por qué la profundidad sigue pagando (ejemplo de 10 niveles)",
    dynamicIntro:
      "Imaginemos que cada empresa gana 10 000 € al mes y que la red ha crecido durante varios años. Arriba hay pocas empresas; en niveles profundos hay muchas más. El porcentaje baja, pero el número de empresas crece más rápido.",
    dynamicHeaders: {
      level: "Nivel",
      companies: "Empresas en el nivel",
      percent: "Porcentaje del fundador"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %" },
      { level: "2", companies: "5", percent: "2 %" },
      { level: "3", companies: "12", percent: "1 %" },
      { level: "4", companies: "30", percent: "0,5 %" },
      { level: "5", companies: "70", percent: "0,25 %" },
      { level: "6", companies: "150", percent: "0,125 %" },
      { level: "7", companies: "300", percent: "0,0625 %" },
      { level: "8", companies: "600", percent: "0,03125 %" },
      { level: "9", companies: "1 000", percent: "0,015625 %" },
      { level: "10", companies: "1 500", percent: "0,0078125 %" }
    ],
    dynamicNote:
      "Lo importante no es memorizar las cifras, sino entender la lógica: un porcentaje pequeño sobre muchas empresas puede generar más que un porcentaje grande sobre pocas.",
    dynamicConclusion:
      "En este ejemplo, el fundador recibe alrededor de 15 000 € al mes de ingresos pasivos solo de los 10 niveles de la red, sin contar el beneficio de sus propias empresas operativas.",

    conclusionTitle: "Conclusión",
    conclusion:
      "Es un modelo simple, limpio y predecible. Lo que se gana, se reparte. Cada parte entiende quién paga, a quién y por qué."
  }
};

const ProfitModelPage: React.FC = () => {
  const { language } = useLanguage();
  const t = profitText[language] ?? profitText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Заголовок и пояснение */}
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

        {/* Основные блоки с объяснением модели */}
        <section className="grid gap-6 lg:grid-cols-3">
          {t.blocks.map((block, index) => (
            <article key={index} className="card space-y-3">
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

        {/* Пример расчёта */}
        <section className="card space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-900">
              {t.exampleTitle}
            </h2>
            <p className="text-sm text-zinc-600">{t.exampleIntro}</p>
          </div>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {t.example.map((row, idx) => (
              <div
                key={idx}
                className="flex items-baseline justify-between border border-zinc-100 rounded-lg px-3 py-2 text-sm bg-white/70"
              >
                <span className="text-zinc-600">{row.label}</span>
                <span className="font-mono text-zinc-900">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Динамика по глубине (10 уровней) */}
        <section className="card space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-900">
              {t.dynamicTitle}
            </h2>
            <p className="text-sm text-zinc-600">{t.dynamicIntro}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    {t.dynamicHeaders.level}
                  </th>
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    {t.dynamicHeaders.companies}
                  </th>
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    {t.dynamicHeaders.percent}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.dynamicRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-zinc-50/60" : "bg-white"}
                  >
                    <td className="px-2 py-1 text-zinc-800">{row.level}</td>
                    <td className="px-2 py-1 text-zinc-800">
                      {row.companies}
                    </td>
                    <td className="px-2 py-1 text-zinc-800 font-mono">
                      {row.percent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-zinc-500">{t.dynamicNote}</p>
          <p className="text-sm text-zinc-700">{t.dynamicConclusion}</p>
        </section>

        {/* Итоговый вывод */}
        <section className="card space-y-2">
          <h2 className="text-sm font-semibold text-zinc-800 uppercase tracking-wide">
            {t.conclusionTitle}
          </h2>
          <p className="text-sm text-zinc-600 max-w-3xl">{t.conclusion}</p>
        </section>
      </div>
    </main>
  );
};

export default ProfitModelPage;
