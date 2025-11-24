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
    // блок про глубину
    dynamicTitle: string;
    dynamicIntro: string;
    dynamicHeaders: {
      level: string;
      companies: string;
      percent: string;
      income: string;
    };
    dynamicRows: {
      level: string;
      companies: string;
      percent: string;
      income: string;
    }[];
    dynamicNote: string;
    dynamicConclusion: string;
    totalLabel: string;
    totalValue: string;

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
      percent: "Процент основателя",
      income: "Доход основателя (€/мес)"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %", income: "1 200 €" },
      { level: "2", companies: "5", percent: "2 %", income: "1 000 €" },
      { level: "3", companies: "12", percent: "1 %", income: "1 200 €" },
      { level: "4", companies: "30", percent: "0,5 %", income: "1 500 €" },
      { level: "5", companies: "70", percent: "0,25 %", income: "1 750 €" },
      { level: "6", companies: "150", percent: "0,125 %", income: "1 875 €" },
      { level: "7", companies: "300", percent: "0,0625 %", income: "1 875 €" },
      { level: "8", companies: "600", percent: "0,03125 %", income: "1 875 €" },
      { level: "9", companies: "1 000", percent: "0,015625 %", income: "1 563 €" },
      { level: "10", companies: "1 500", percent: "0,0078125 %", income: "1 172 €" }
    ],
    dynamicNote:
      "Важно не запоминать цифры, а увидеть логику: чем глубже уровень, тем меньше процент, но тем больше компаний. Маленький процент, умноженный на большое количество фирм, даёт серьёзный доход.",
    dynamicConclusion:
      "В таком примере совокупный пассивный доход основателя со всех 10 уровней сети получается примерно 15 000 € в месяц только от сети — без учёта прибыли его собственных компаний.",
    totalLabel: "Суммарный пассивный доход со всех 10 уровней",
    totalValue: "≈ 15 000 € / месяц",

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
      percent: "Founder’s percent",
      income: "Founder income (€/month)"
    },
    dynamicRows: [
      { level: "1", companies: "3", percent: "4 %", income: "1 200 €" },
      { level: "2", companies: "5", percent: "2 %", income: "1 000 €" },
      { level: "3", companies: "12", percent: "1 %", income: "1 200 €" },
      { level: "4", companies: "30", percent: "0.5 %", income: "1 500 €" },
      { level: "5", companies: "70", percent: "0.25 %", income: "1 750 €" },
      { level: "6", companies: "150", percent: "0.125 %", income: "1 875 €" },
      { level: "7", companies: "300", percent: "0.0625 %", income: "1 875 €" },
      { level: "8", companies: "600", percent: "0.03125 %", income: "1 875 €" },
      { level: "9", companies: "1 000", percent: "0.015625 %", income: "1 563 €" },
      { level: "10", comp
