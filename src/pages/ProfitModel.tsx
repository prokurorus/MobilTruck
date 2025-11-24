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
      { label: "Beneficio neto", value: "10 000 €" },
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

    conclusionTitle: "Conclusión",
    conclusion:
      "Es un modelo simple, limpio y predecible. Lo que ganas, lo recibes. Cada parte entiende su papel y su porcentaje."
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
