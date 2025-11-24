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
import DocumentsPage from "./pages/Documents";
import StructurePage from "./pages/Structure";
import DriversPage from "./pages/Drivers";
import PartnersPage from "./pages/Partners";
import ProfitModelPage from "./pages/ProfitModel";
import ContactPage from "./pages/Contact";
import ForumPage from "./pages/ForumPage";
import TopicPage from "./pages/TopicPage";
import { useStats } from "./hooks/useStats";
import { useLanguage } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import type { Language } from "./types/language";
import AssistantWidget from "./components/AssistantWidget";



const forumNavLabel: Record<Language, string> = {
  ru: "Форум",
  en: "Forum",
  de: "Forum",
  es: "Foro",
};

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
      "Mobil Truck — это платформа, которая превращает обычное транспортное предприятие в сеть взаимосвязанных компаний. Водители, предприниматели и головной холдинг зарабатывают по прозрачным, заранее понятным правилам.",
    hint:
      "Сначала познакомься со структурой холдинга и моделью распределения прибыли. Потом уже выбирай, какую роль ты хочешь занять — водитель, партнёр или организатор ветки.",
    sectionTitle: "Что такое Mobil Truck и как это работает",
    sectionSummary:
      "Mobil Truck — многоуровневый холдинг: наверху — головная компания и фонды, ниже — партнёрские компании под брендом Mobil Truck и их дочерние структуры. Прибыль делится по фиксированной формуле, а каждый участник понимает своё место и долю в системе.",
  },
  en: {
    title: "Mobil Truck",
    subtitle: "a self-growing transport holding",
    intro:
      "Mobil Truck is a platform that turns a regular transport company into a network of connected businesses. Drivers, entrepreneurs and the main holding earn under transparent, predictable rules.",
    hint:
      "First, explore the holding structure and the profit-sharing model. Then decide which role fits you best — driver, partner or branch founder.",
    sectionTitle: "What Mobil Truck is and how it works",
    sectionSummary:
      "Mobil Truck is a multi-level holding: at the top — the main company and common funds, below — partner companies under the Mobil Truck brand and their branches. Profit is shared by a fixed formula, and every participant clearly sees their place and share in the system.",
  },
  de: {
    title: "Mobil Truck",
    subtitle: "ein sich selbst entwickelnder Transport-Holding",
    intro:
      "Mobil Truck ist eine Plattform, die ein gewöhnliches Transportunternehmen in ein Netzwerk verbundener Firmen verwandelt. Fahrer, Unternehmer und die Holding verdienen nach transparenten, vorher klaren Regeln.",
    hint:
      "Lerne zuerst die Struktur des Holdings und das Modell der Gewinnverteilung kennen. Dann kannst du entscheiden, welche Rolle zu dir passt – Fahrer, Partner oder Gründer eines eigenen Zweigs.",
    sectionTitle: "Was Mobil Truck ist und wie es funktioniert",
    sectionSummary:
      "Mobil Truck ist ein mehrstufiger Holding: oben stehen die Hauptgesellschaft und gemeinsame Fonds, darunter Partnerunternehmen unter der Marke Mobil Truck und ihre Tochterfirmen. Der Gewinn wird nach einer festen Formel verteilt, und jeder Teilnehmer versteht seinen Platz und Anteil im System.",
  },
  es: {
    title: "Mobil Truck",
    subtitle: "un holding de transporte auto-desarrollado",
    intro:
      "Mobil Truck es una plataforma que convierte una empresa de transporte normal en una red de compañías conectadas. Conductores, emprendedores y la matriz ganan con reglas transparentes y predecibles.",
    hint:
      "Primero conoce la estructura del holding y el modelo de reparto de beneficios. Después decide qué papel quieres: conductor, socio o creador de tu propia rama.",
    sectionTitle: "Qué es Mobil Truck y cómo funciona",
    sectionSummary:
      "Mobil Truck es un holding multinivel: arriba está la empresa matriz y los fondos comunes; debajo, las empresas asociadas bajo la marca Mobil Truck y sus filiales. El beneficio se distribuye según una fórmula fija y cada participante ve claramente su lugar y su parte en el sistema.",
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

/* ---------- ПЕРВАЯ СТРАНИЦА: вступительный экран ---------- */

function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const { language } = useLanguage();
  const h = homeText[language];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        <div className="flex justify-between items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {h.title} • {h.subtitle}
          </div>
          <div className="flex flex-col items-end gap-2">
            <LanguageSwitcher />
            <nav className="flex flex-wrap gap-2 text-[11px] text-zinc-600 mt-1">
              <a
                href="/join"
                className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-50 transition"
              >
                {/* текст навигации возьмём из i18n, он уже есть */}
                Присоединиться
              </a>
              <a
                href="/forum"
                className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-50 transition"
              >
                {forumNavLabel[language]}
              </a>
            </nav>
          </div>
        </div>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-0 flex items-center justify-center lg:justify-start">
            <AndroidCard />
          </div>

          <div className="order-1 space-y-6 lg:pl-6 flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900">
                {h.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                {h.intro}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onEnter();
                  window.location.href = "/structure";
                }}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-zinc-900/30 hover:bg-zinc-800 active:bg-zinc-950 transition"
              >
                Перейти к структуре холдинга
              </button>
              <p className="text-xs text-zinc-500 max-w-sm">{h.hint}</p>
            </div>

          </div>
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
            <nav className="flex flex-wrap gap-2 text-[11px] text-zinc-600 mt-1">
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
                {forumNavLabel[language]}
              </a>
            </nav>
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
                  className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
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
        <DriversPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/partners")
    return (
      <>
        <PartnersPage />
        <AssistantWidget />
      </>
    );

  if (pathname === "/profit")
    return (
      <>
        <ProfitModelPage />
        <AssistantWidget />
      </>
    );
  
  if (pathname === "/documents")
    return (
      <>
        <DocumentsPage />
        <AssistantWidget />
      </>
    );

  
  if (pathname === "/structure")
    return (
      <>
        <StructurePage />
        <AssistantWidget />
      </>
    );


  if (pathname === "/forum")
    return (
      <>
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
