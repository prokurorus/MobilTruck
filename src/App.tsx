import React from "react";
import ManifestoRu from "./pages/Manifesto-ru";
import ManifestoEn from "./pages/Manifesto-en";
import ManifestoDe from "./pages/Manifesto-de";
import ManifestoEs from "./pages/Manifesto-es";
import CharterRu from "./pages/Charter-ru";
import CharterEn from "./pages/Charter-en";
import CharterDe from "./pages/Charter-de";
import CharterEs from "./pages/Charter-es";
import Join from "./pages/Join";
import Header from "./components/Header";
import DocumentsPage from "./pages/Documents";
import StructurePage from "./pages/Structure";
import DriversPage from "./pages/Drivers";
import PartnersPage from "./pages/Partners";
import ProfitModelPage from "./pages/ProfitModel";
import HoldingModelPage from "./pages/HoldingModel";
import ContactPage from "./pages/Contact";
import ForumPage from "./pages/ForumPage";
import TopicPage from "./pages/TopicPage";
import { useStats } from "./hooks/useStats";
import { useLanguage } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import type { Language } from "./types/language";
import AssistantWidget from "./components/AssistantWidget";

/* ---------- Тексты для Mobil Truck (по языкам) ---------- */

/* ---------- Тексты для Mobil Truck (по языкам) ---------- */

const homeText: Record<
  Language,
  {
    title: string;
    subtitle: string;
    intro: string;
    hint: string;
    sectionTitle: string;
    sectionSummary: string;
  }
> = {
  ru: {
    title: "Mobil Truck",
    subtitle: "саморазвивающийся транспортный холдинг",
    intro:
      "Добро пожаловать в Mobil Truck. Это не очередная транспортная фирма, а дом для сети компаний, которые работают по единым, честным правилам. Здесь предприниматели и водители заходят «в приёмную» холдинга, а не в диспетчерскую.",
    hint:
      "Сначала познакомьтесь со структурой холдинга и моделью распределения прибыли. А потом уже решайте, какую роль вам ближе — водителя, партнёра или основателя своей ветки.",
    sectionTitle: "Приёмная Mobil Truck",
    sectionSummary:
      "Эта страница — вход в холдинг. Отсюда можно перейти к описанию структуры, финансовой модели, условий для водителей и партнёров. Всё устроено так, чтобы любой человек за несколько минут понял: кто здесь за что отвечает и как устроен заработок.",
  },

  en: {
    title: "Mobil Truck",
    subtitle: "a self-developing transport holding",
    intro:
      "Welcome to Mobil Truck. This is not just another trucking company, but a home for a network of firms that work under one clear and honest framework. Entrepreneurs and drivers enter the holding’s lobby here, not a back-office dispatch room.",
    hint:
      "First, take a look at the holding structure and the profit-sharing model. Then decide which role fits you best: driver, partner, or founder of your own branch.",
    sectionTitle: "Mobil Truck reception",
    sectionSummary:
      "This page is the lobby of the holding. From here you can go to the structure, the financial model, and the conditions for drivers and partners. The idea is simple: in a few minutes anyone should understand who is responsible for what and how money is earned.",
  },

  de: {
    title: "Mobil Truck",
    subtitle: "ein sich selbst entwickelnder Transport-Holding",
    intro:
      "Willkommen bei Mobil Truck. Das ist nicht einfach eine weitere Spedition, sondern ein Zuhause für ein Netzwerk von Firmen, die nach klaren und fairen Regeln arbeiten. Hier betreten Unternehmer und Fahrer die Empfangshalle des Holdings – nicht das Disponentenbüro.",
    hint:
      "Schauen Sie sich zuerst die Struktur des Holdings und das Modell der Gewinnverteilung an. Danach können Sie entscheiden, welche Rolle zu Ihnen passt – Fahrer, Partner oder Gründer eines eigenen Zweigs.",
    sectionTitle: "Empfang von Mobil Truck",
    sectionSummary:
      "Diese Seite ist die Empfangszone des Holdings. Von hier aus gelangen Sie zur Beschreibung der Struktur, des Finanzmodells sowie zu den Bedingungen für Fahrer und Partner. Ziel ist, dass jeder Besucher in wenigen Minuten versteht, wer wofür verantwortlich ist und wie der Verdienst aufgebaut ist.",
  },

  es: {
    title: "Mobil Truck",
    subtitle: "un holding de transporte auto-desarrollado",
    intro:
      "Bienvenido a Mobil Truck. No es una empresa de transporte más, sino la casa de una red de compañías que trabajan con reglas claras y honestas. Aquí los empresarios y conductores entran en la recepción del holding, no en una sala de despacho.",
    hint:
      "Primero echa un vistazo a la estructura del holding y al modelo de reparto de beneficios. Después decide qué papel te encaja mejor: conductor, socio o creador de tu propia rama.",
    sectionTitle: "Recepción de Mobil Truck",
    sectionSummary:
      "Esta página es la recepción del holding. Desde aquí puedes ir a la estructura, al modelo financiero y a las condiciones para conductores y socios. La idea es sencilla: que cualquier persona entienda en pocos minutos quién hace qué y cómo se gana dinero.",
  },
};


/* ---------- Тексты блока «Присоединиться» и «Форум» ---------- */

const joinText: Record<Language, string> = {
  ru: "Mobil Truck не продаёт красивых обещаний. Важно, чтобы каждый участник понимал, во что он входит: в прозрачный холдинг с фиксированными правилами, долями и сетевым процентом. На странице «Присоединиться» мы постепенно соберём всю информацию для водителей, партнёров и владельцев компаний, чтобы можно было принять взвешенное решение.",
  en: "Mobil Truck does not sell dreams. It matters that every participant understands what they are joining: a transparent holding with fixed rules, shares and a network percentage. On the Join page we will gradually collect all information for drivers, partners and company owners so they can decide consciously.",
  de: "Mobil Truck verkauft keine schönen Versprechen. Wichtig ist, dass jeder Teilnehmer versteht, woran er teilnimmt: ein transparenter Holding mit festen Regeln, Anteilen und einem Netzwerk-Prozentsatz. Auf der Seite „Beitreten“ werden wir nach und nach alle Informationen für Fahrer, Partner und Unternehmer sammeln, damit sie bewusst entscheiden können.",
  es: "Mobil Truck no vende promesas bonitas. Es importante que cada participante entienda a qué se une: un holding transparente con reglas fijas, participaciones y un porcentaje de red. En la página «Unirse» iremos reuniendo toda la información para conductores, socios y propietarios de empresas para que puedan decidir conscientemente.",
};

const joinButtonLabel: Record<Language, string> = {
  ru: "Открыть страницу «Присоединиться»",
  en: "Open the “Join” page",
  de: "Seite „Beitreten“ öffnen",
  es: "Abrir página «Unirse»",
};

const forumCardTitle: Record<Language, string> = {
  ru: "Форум Mobil Truck",
  en: "Mobil Truck Forum",
  de: "Mobil-Truck-Forum",
  es: "Foro de Mobil Truck",
};

const forumCardText: Record<Language, string> = {
  ru: "Здесь можно обсуждать структуру холдинга, модель распределения прибыли, условия для водителей и партнёров, а также предлагать свои идеи по развитию сети Mobil Truck.",
  en: "Here you can discuss the holding structure, profit-sharing model, terms for drivers and partners, and suggest ideas for the development of the Mobil Truck network.",
  de: "Hier kannst du die Struktur des Holdings, das Gewinnverteilungsmodell, Bedingungen für Fahrer und Partner sowie Ideen zur Weiterentwicklung des Mobil-Truck-Netzwerks diskutieren.",
  es: "Aquí puedes debatir sobre la estructura del holding, el modelo de reparto de beneficios, las condiciones para conductores y socios y proponer ideas para el desarrollo de la red Mobil Truck.",
};

const forumCardButton: Record<Language, string> = {
  ru: "Перейти на форум",
  en: "Go to forum",
  de: "Zum Forum",
  es: "Ir al foro",
};

/* ---------- Карточка изображения (левая колонка) ---------- */

function AndroidCard() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="/lovable-uploads/android.png"
          alt="Mobil Truck digital core"
          className="block w-full h-auto"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-zinc-600 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="uppercase tracking-[0.12em] text-zinc-500 font-semibold">
            MOBIL TRUCK NETWORK
          </span>
        </div>
        <span className="text-[10px] text-zinc-400">
          Prototype platform • alpha
        </span>
      </div>
    </div>
  );
}

/* ---------- Панель статистики ---------- */

interface StatsBarProps {
  visitors: number;
  likes: number;
  joined: number;
  onLike: () => void;
}

function StatsBar({ visitors, likes, joined, onLike }: StatsBarProps) {
  const { language } = useLanguage();

  const labels: Record<
    Language,
    { visitors: string; likes: string; joined: string; likeButton: string }
  > = {
    ru: {
      visitors: "Посетителей",
      likes: "Нравится",
      joined: "Присоединились",
      likeButton: "♥ Нравится",
    },
    en: {
      visitors: "Visitors",
      likes: "Likes",
      joined: "Joined",
      likeButton: "♥ Like",
    },
    de: {
      visitors: "Besucher",
      likes: "Gefällt",
      joined: "Beigetreten",
      likeButton: "♥ Gefällt mir",
    },
    es: {
      visitors: "Visitantes",
      likes: "Me gusta",
      joined: "Unidos",
      likeButton: "♥ Me gusta",
    },
  };

  const current = labels[language];

  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-3">
      <div className="border rounded-xl px-5 py-4 shadow-sm bg-white/80">
        <div className="text-xs font-medium text-zinc-500">
          {current.visitors}
        </div>
        <div className="mt-2 text-2xl font-semibold text-zinc-900">
          {visitors}
        </div>
      </div>

      <div className="border rounded-xl px-5 py-4 shadow-sm bg-white/80">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500">
            {current.likes}
          </span>
          <button
            onClick={onLike}
            className="text-[11px] border rounded-full px-3 py-1 hover:bg-zinc-50 active:bg-zinc-100 transition"
          >
            {current.likeButton}
          </button>
        </div>
        <div className="mt-2 text-2xl font-semibold text-zinc-900">
          {likes}
        </div>
      </div>

      <div className="border rounded-xl px-5 py-4 shadow-sm bg-white/80">
        <div className="text-xs font-medium text-zinc-500">
          {current.joined}
        </div>
        <div className="mt-2 text-2xl font-semibold text-zinc-900">
          {joined}
        </div>
      </div>
    </section>
  );
}

function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const { language } = useLanguage();
  const h = homeText[language];

  const cards = {
    ru: {
      driversTitle: "Водителям",
      driversText:
        "Для тех, кто хочет стабильные рейсы, честные выплаты и уважительное отношение вместо «расходного материала».",
      partnersTitle: "Партнёрам и предпринимателям",
      partnersText:
        "Для тех, кто готов открыть свою фирму под брендом Mobil Truck и строить сеть дочерних компаний.",
      aboutTitle: "О холдинге в целом",
      aboutText:
        "Если сначала нужно увидеть всю картину: структура, модель 8% и будущие документы холдинга.",
      driversLink: "Подробнее для водителей",
      partnersLink: "Подробнее для партнёров",
      aboutLink: "Модель холдинга",
    },
    en: {
      driversTitle: "For drivers",
      driversText:
        "For those who want stable trips, honest payments and respectful treatment instead of being just a resource.",
      partnersTitle: "For partners and entrepreneurs",
      partnersText:
        "For those who want to open their own company under the Mobil Truck brand and build a network of subsidiaries.",
      aboutTitle: "About the holding",
      aboutText:
        "If you first want to see the whole picture: structure, 8% model and future holding documents.",
      driversLink: "More for drivers",
      partnersLink: "More for partners",
      aboutLink: "Holding model",
    },
    de: {
      driversTitle: "Für Fahrer",
      driversText:
        "Für alle, die stabile Touren, faire Bezahlung und respektvollen Umgang statt „Verbrauchsmaterial“ suchen.",
      partnersTitle: "Für Partner und Unternehmer",
      partnersText:
        "Für diejenigen, die unter der Marke Mobil Truck eine eigene Firma gründen und ein Netzwerk aufbauen wollen.",
      aboutTitle: "Über den Holding",
      aboutText:
        "Wenn du zuerst das Gesamtbild sehen willst: Struktur, 8%-Modell und künftige Dokumente.",
      driversLink: "Mehr für Fahrer",
      partnersLink: "Mehr für Partner",
      aboutLink: "Holding-Modell",
    },
    es: {
      driversTitle: "Para conductores",
      driversText:
        "Para quienes quieren rutas estables, pagos honestos y un trato respetuoso, no ser solo «recurso».",
      partnersTitle: "Para socios y emprendedores",
      partnersText:
        "Para quienes quieren abrir su propia empresa bajo la marca Mobil Truck y construir una red.",
      aboutTitle: "Sobre el holding",
      aboutText:
        "Si primero quieres ver el panorama completo: estructura, modelo del 8% y futuros documentos.",
      driversLink: "Más para conductores",
      partnersLink: "Más para socios",
      aboutLink: "Modelo del holding",
    },
  } as const;

  const c = cards[language as keyof typeof cards] ?? cards.ru;

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-10 sm:space-y-12">
        {/* Верхняя полоса: бейдж + переключатель языков */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {h.title} • {h.subtitle}
          </div>
          <div className="self-end">
            <LanguageSwitcher />
          </div>
        </header>

        {/* HERO: картинка + текст приёмной */}
        <section className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Картинка */}
          <div className="order-2 lg:order-1 max-w-xl mx-auto">
            <AndroidCard />
          </div>

          {/* Текст */}
          <div className="order-1 lg:order-2 space-y-5 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
              {h.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {h.intro}
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onEnter();
                  window.location.href = "/structure";
                }}
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-zinc-900/30 hover:bg-zinc-800 active:bg-zinc-950 transition"
              >
                {language === "ru"
                  ? "Перейти к структуре холдинга"
                  : language === "de"
                  ? "Zur Holding-Struktur"
                  : language === "es"
                  ? "Ir a la estructura del holding"
                  : "Go to holding structure"}
              </button>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto lg:mx-0">
                {h.hint}
              </p>
            </div>
          </div>
        </section>

        {/* Для кого холдинг: три карточки */}
        <section className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {/* Водителям */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 px-5 py-5 shadow-sm flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-900">
              {c.driversTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 flex-1">
              {c.driversText}
            </p>
            <a
              href="/drivers"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              {c.driversLink}
            </a>
          </article>

          {/* Партнёрам */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 px-5 py-5 shadow-sm flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-900">
              {c.partnersTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 flex-1">
              {c.partnersText}
            </p>
            <a
              href="/partners"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              {c.partnersLink}
            </a>
          </article>

          {/* О холдинге */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 px-5 py-5 shadow-sm flex flex-col gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-900">
              {c.aboutTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 flex-1">
              {c.aboutText}
            </p>
            <a
              href="/holding-model"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              {c.aboutLink}
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}



/* ---------- ВТОРАЯ СТРАНИЦА: основная ---------- */

function MainScreen() {
  const { stats, ensureVisitorCounted, like } = useStats();
  const { language } = useLanguage();
  const h = homeText[language];

  React.useEffect(() => {
    ensureVisitorCounted();
  }, [ensureVisitorCounted]);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Верхний блок */}
        <div className="flex items-start justify-between gap-4">
          <header className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {h.title} • {h.subtitle}
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
              {h.sectionTitle}
            </h1>
            <p className="text-sm text-zinc-600 max-w-2xl">{h.sectionSummary}</p>
          </header>

          <div className="flex flex-col items-end gap-2">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Счётчики */}
        <StatsBar
          visitors={stats.visitors}
          likes={stats.likes}
          joined={stats.joined}
          onLike={like}
        />

        {/* МАНИФЕСТ / УСТАВ — пока как документы холдинга */}
        <section className="grid gap-6 lg:grid-cols-2 pt-4">
          {/* Блок документов 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 sm:p-6">
            <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-zinc-100 blur-2xl opacity-80 pointer-events-none" />
            <div className="relative space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-zinc-900">
                  Документы концепции Mobil Truck
                </h2>
                <p className="text-sm text-zinc-600">
                  Здесь позже появятся формализованные документы Mobil Truck —
                  философия, базовые принципы и описание модели. Сейчас временно
                  используются тексты от NovaCiv как технический шаблон.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="/Manifesto-ru"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Документ
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    RU
                  </span>
                </a>
                <a
                  href="/Manifesto-en"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Document
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    EN
                  </span>
                </a>
                <a
                  href="/Manifesto-de"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Dokument
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    DE
                  </span>
                </a>
                <a
                  href="/Manifesto-es"
                  className="group flex flex-col items-center justifycenter rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Documento
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    ES
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Блок документов 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 sm:p-6">
            <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-zinc-100 blur-2xl opacity-80 pointer-events-none" />
            <div className="relative space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-zinc-900">
                  Структура и правила холдинга
                </h2>
                <p className="text-sm text-zinc-600">
                  Эти документы в будущем опишут юридическую и экономическую
                  модель Mobil Truck: уровни компаний, распределение прибыли,
                  сетевой процент и работу фондов. Пока используются черновые
                  шаблоны на основе NovaCiv.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="/Charter-ru"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Структура
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    RU
                  </span>
                </a>
                <a
                  href="/Charter-en"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Structure
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    EN
                  </span>
                </a>
                <a
                  href="/Charter-de"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Struktur
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    DE
                  </span>
                </a>
                <a
                  href="/Charter-es"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="text-[11px] uppercase tracking-wide text-gray-400">
                    Estructura
                  </span>
                  <span className="text-sm text-gray-900 group-hover:text-gray-800">
                    ES
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ПРИСОЕДИНИТЬСЯ + ФОРУМ */}
        <section className="mt-4 rounded-2xl border border-dashed border-zinc-300 bg-white/90 px-5 py-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                Присоединиться к Mobil Truck
              </h2>
              <p className="text-sm text-zinc-600 max-w-2xl">
                {joinText[language]}
              </p>
              <a
                href="/join"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 active:bg-zinc-100 transition"
              >
                {joinButtonLabel[language]}
              </a>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                {forumCardTitle[language]}
              </h2>
              <p className="text-sm text-zinc-600 max-w-2xl">
                {forumCardText[language]}
              </p>
              <a
                href="/forum"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 active:bg-zinc-100 transition"
              >
                {forumCardButton[language]}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- Корневой компонент ---------- */

export default function App() {
  const [entered, setEntered] = React.useState(false);
  const pathname = window.location.pathname;

  // Прямые переходы по адресам — сразу нужная страница
  if (pathname === "/Manifesto-ru") return <ManifestoRu />;
  if (pathname === "/Manifesto-en") return <ManifestoEn />;
  if (pathname === "/Manifesto-de") return <ManifestoDe />;
  if (pathname === "/Manifesto-es") return <ManifestoEs />;

  if (pathname === "/Charter-ru") return <CharterRu />;
  if (pathname === "/Charter-en") return <CharterEn />;
  if (pathname === "/Charter-de") return <CharterDe />;
  if (pathname === "/Charter-es") return <CharterEs />;

  if (pathname === "/drivers")
    return (
      <>
        <Header />
        <DriversPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/holding")
    return (
      <>
        <Header />
        <HoldingModelPage />
        <AssistantWidget />
      </>
    );

  
  if (pathname === "/partners")
    return (
      <>
        <Header />
        <PartnersPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/contact")
    return (
      <>
        <Header />
        <ContactPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/profit")
    return (
      <>
        <Header />
        <ProfitModelPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/documents")
    return (
      <>
        <Header />
        <DocumentsPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/structure")
    return (
      <>
        <Header />
        <StructurePage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/forum")
    return (
      <>
        <Header />
        <ForumPage />
        <AssistantWidget />
      </>
    );

  if (pathname.startsWith("/forum/"))
    return (
      <>
        <TopicPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/join")
    return (
      <>
        <Header />
        <Join />
        <AssistantWidget />
      </>
    );

  // Корень — вступительный экран → основная
  if (!entered) {
    return (
      <>
        <IntroScreen onEnter={() => setEntered(true)} />
        <AssistantWidget />
      </>
    );
  }

  return (
    <>
      <MainScreen />
      <AssistantWidget />
    </>
  );
}
