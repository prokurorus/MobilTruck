import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const profitText: Record<
  string,
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
          "8% — фиксированный потолок, не меняющийся в зависимости от глубины.",
          "Доход основателей растёт за счёт расширения сети, а не за счёт давления на низовые компании.",
          "Компания на нижнем уровне не теряет экономику: 92% остаются внутри фирмы.",
          "Все компании холдинга работают по одним и тем же правилам.",
          "Партнёры заинтересованы помогать друг другу, так как никто не забирает больше 8%."
        ]
      },
      {
        title: "Что получает основатель ветки",
        items: [
          "4% со всех компаний, которые он лично создал.",
          "2%–1%–0,5% с компаний, созданных его «внуками» и дальше по ветке.",
          "Пассивный доход при нулевой операционной нагрузке.",
          "Рост капитала всей ветки при увеличении числа компаний."
        ]
      }
    ],

    exampleTitle: "Пример расчёта",
    exampleIntro:
      "Допустим, компания в ветке заработала 10 000 € чистой прибыли в месяц. Смотрим распределение:",

    example: [
      { label: "Общая прибыль компании", value: "10 000 €" },
      { label: "8% сетевого процента", value: "800 €" },
      { label: "4% • основателю компании", value: "400 €" },
      { label: "2% • следующему уровню", value: "200 €" },
      { label: "1% • выше", value: "100 €" },
      { label: "0,5% • еще выше", value: "50 €" },
      { label: "Оставшиеся 0,5%", value: "распределяются на дальнейшие уровни (или не используются)" },
      { label: "92% остаются в компании", value: "9 200 €" }
    ],

    conclusion:
      "Эта модель проста, честна и математически предсказуема. Что заработал — то получил. Каждый понимает, за что получает деньги и кому платит."
  },

  en: {
    badge: "Mobil Truck • profit distribution model",
    title: "How the profit distribution model works",
    subtitle:
      "Mobil Truck has no hidden margins. The model is fixed: every company passes 8% of its profit upward. This 8% is split by a simple, predictable formula.",

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
          "8% is a fixed maximum that never changes.",
          "Branch founders grow income through network expansion, not pressure.",
          "92% always stays inside the company.",
          "All companies operate under the same rules.",
          "Everyone is motivated to help each other — no one can take more than 8%."
        ]
      },
      {
        title: "What a branch founder earns",
        items: [
          "4% from companies they created.",
          "2–1–0.5% from deeper levels.",
          "Passive income without operational load.",
          "Growth of total branch value."
        ]
      }
    ],

    exampleTitle: "Example",
    exampleIntro:
      "Assume a company earns 10 000 € net per month. Distribution:",

    example: [
      { label: "Company net profit", value: "10 000 €" },
      { label: "8% network percent", value: "800 €" },
      { label: "4% • founder", value: "400 €" },
      { label: "2% • next level", value: "200 €" },
      { label: "1% • higher", value: "100 €" },
      { label: "0.5% • above that", value: "50 €" },
      { label: "Remaining 0.5%", value: "used for further levels" },
      { label: "92% remains in company", value: "9 200 €" }
    ],

    conclusion:
      "The model is simple and mathematically clean. Earned — received. Everyone knows exactly who pays what and why."
  },

  de: {
    badge: "Mobil Truck • Gewinnverteilungsmodell",
    title: "Wie das Gewinnverteilungsmodell funktioniert",
    subtitle:
      "Bei Mobil Truck gibt es keine versteckten Prozentsätze. Jede Firma gibt 8 % ihres Gewinns nach oben. Diese werden nach einer einfachen Formel verteilt.",

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
          "8 % ist eine feste Obergrenze.",
          "Gründer verdienen durch Wachstum, nicht durch Druck.",
          "92 % bleiben in der Firma.",
          "Alle arbeiten nach denselben Regeln.",
          "Alle sind motiviert, sich gegenseitig zu unterstützen."
        ]
      },
      {
        title: "Was der Astgründer verdient",
        items: [
          "4 % von Firmen, die er persönlich gegründet hat.",
          "2–1–0,5 % von tieferen Ebenen.",
          "Passives Einkommen ohne operative Belastung.",
          "Wertzuwachs durch Netzwerkaufbau."
        ]
      }
    ],

    exampleTitle: "Beispiel",
    exampleIntro:
      "Eine Firma verdient 10 000 € Nettogewinn im Monat. Verteilung:",

    example: [
      { label: "Nettogewinn der Firma", value: "10 000 €" },
      { label: "8 % Netzwerkanteil", value: "800 €" },
      { label: "4 % • Gründer", value: "400 €" },
      { label: "2 % • nächste Ebene", value: "200 €" },
      { label: "1 % • darüber", value: "100 €" },
      { label: "0,5 % • nächste Ebene darüber", value: "50 €" },
      { label: "Restliche 0,5 %", value: "für weitere Ebenen" },
      { label: "92 % bleiben im Unternehmen", value: "9 200 €" }
    ],

    conclusion:
      "Das Modell ist einfach und sauber. Was verdient wird, wird ausgezahlt. Jeder weiß, wer wofür bezahlt."
  },

  es: {
    badge: "Mobil Truck • modelo de distribución de beneficios",
    title: "Cómo funciona el modelo de distribución",
    subtitle:
      "En Mobil Truck no hay porcentajes ocultos. Cada empresa destina un 8 % de su beneficio a la red. Estos 8 % se reparten mediante una fórmula simple.",

    blocks: [
      {
        title: "Niveles fijos de distribución",
        items: [
          "4 % — al fundador.",
          "2 % — al nivel superior.",
          "1 % — al siguiente nivel.",
          "0,5 % — al nivel superior."
        ]
      },
      {
        title: "Por qué el modelo es estable",
        items: [
          "8 % es un límite fijo.",
          "El crecimiento viene de la red, no de presionar a las empresas pequeñas.",
          "92 % queda en la empresa.",
          "Todas las empresas siguen las mismas reglas.",
          "Todos están motivados para ayudarse mutuamente."
        ]
      },
      {
        title: "Qué gana el fundador de la rama",
        items: [
          "4 % de las empresas que él crea.",
          "2–1–0,5 % de los niveles inferiores.",
          "Ingreso pasivo sin carga operativa.",
          "Aumento del valor del negocio."
        ]
      }
    ],

    exampleTitle: "Ejemplo",
    exampleIntro:
      "Una empresa gana 10 000 € netos al mes. Distribución:",

    example: [
      { label: "Beneficio neto", value: "10 000 €" },
      { label: "8 % para la red", value: "800 €" },
      { label: "4 % • fundador", value: "400 €" },
      { label: "2 % • nivel superior", value: "200 €" },
      { label: "1 % • siguiente nivel", value: "100 €" },
      { label: "0,5 % • nivel superior", value: "50 €" },
      { label: "0,5 % restante", value: "se reparte o no se usa" },
      { label: "92 % queda en la empresa", value: "9 200 €" }
    ],

    conclusion:
      "Es un modelo simple, limpio y predecible. Lo que ganas, lo recibes."
  }
};

const ProfitModelPage: React.FC = () => {
  const { language } = useLanguage();
  const t = profitText[language] ?? profitText.ru;

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

        {/* Пример */}
        <section className="card space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            {t.exampleTitle}
          </h2>
          <p className="text-sm text-zinc-600">{t.exampleIntro}</p>
          <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
            {t.example.map((row, idx) => (
              <li key={idx}>
                <strong>{row.label}:</strong> {row.value}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-xs text-zinc-500 max-w-xl">{t.conclusion}</p>
      </div>
    </main>
  );
};

export default ProfitModelPage;
