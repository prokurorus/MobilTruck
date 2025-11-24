import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  onValue,
  push,
  query,
  ref,
  serverTimestamp,
  orderByChild,
} from "firebase/database";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";
import { useMember } from "../hooks/useMember";

type Topic = {
  id: string;
  title: string;
  content: string;
  section: string;
  createdAt?: number;
  authorNickname?: string | null;
};

type PostsMeta = {
  repliesCount: number;
  lastReplyAt: number | null;
};

type SectionKey = "general" | "ideas" | "tech";

const sectionLabels: Record<SectionKey, Record<Language, string>> = {
  general: {
    ru: "Общее",
    en: "General",
    de: "Allgemeines",
    es: "General",
  },
  ideas: {
    ru: "Идеи и предложения",
    en: "Ideas & proposals",
    de: "Ideen & Vorschläge",
    es: "Ideas y propuestas",
  },
  tech: {
    ru: "Техника и сайт",
    en: "Tech & site",
    de: "Technik & Website",
    es: "Tecnología y sitio",
  },
};

const labels = {
  title: {
    ru: "Форум Mobil Truck",
    en: "Mobil Truck Forum",
    de: "Mobil Truck Forum",
    es: "Foro Mobil Truck",
  },
  intro: {
    ru: "Здесь можно обсуждать работу, маршруты, технику и развитие холдинга Mobil Truck. Помни о взаимном уважении и ненасилии.",
    en: "Here you can discuss work, routes, trucks and the development of the Mobil Truck holding. Remember mutual respect and non-violence.",
    de: "Hier kannst du über Arbeit, Routen, Fahrzeuge und die Entwicklung des Mobil-Truck-Holdings sprechen. Denk an gegenseitigen Respekt und Gewaltfreiheit.",
    es: "Aquí puedes debatir sobre trabajo, rutas, camiones y el desarrollo del holding Mobil Truck. Recuerda el respeto mutuo y la no violencia.",
  },
  newTopicTitle: {
    ru: "Новая тема",
    en: "New topic",
    de: "Neues Thema",
    es: "Nuevo tema",
  },
  topicTitleLabel: {
    ru: "Заголовок",
    en: "Title",
    de: "Titel",
    es: "Título",
  },
  sectionLabel: {
    ru: "Раздел",
    en: "Section",
    de: "Bereich",
    es: "Sección",
  },
  messageLabel: {
    ru: "Первое сообщение",
    en: "First message",
    de: "Erste Nachricht",
    es: "Primer mensaje",
  },
  submit: {
    ru: "Создать тему",
    en: "Create topic",
    de: "Thema erstellen",
    es: "Crear tema",
  },
  backToMain: {
    ru: "← На главную",
    en: "← Back to main",
    de: "← Zur Startseite",
    es: "← Página principal",
  },
  topicsList: {
    ru: "Темы",
    en: "Topics",
    de: "Themen",
    es: "Temas",
  },
  noTopics: {
    ru: "Тем пока нет. Стань первым, кто начнёт разговор.",
    en: "No topics yet. Be the first to start a conversation.",
    de: "Noch keine Themen. Sei der Erste, der ein Gespräch beginnt.",
    es: "Todavía no hay temas. Sé el primero en iniciar la conversación.",
  },
  error: {
    ru: "Не удалось сохранить тему. Попробуй ещё раз.",
    en: "Failed to save the topic. Please try again.",
    de: "Thema konnte nicht gespeichert werden. Versuch es noch einmal.",
    es: "No se pudo guardar el tema. Inténtalo de nuevo.",
  },
  anonName: {
    ru: "аноним",
    en: "anon",
    de: "anonym",
    es: "anónimo",
  },
  needNicknameTitle: {
    ru: "Только участники с ником",
    en: "Only members with a nickname",
    de: "Nur Mitglieder mit Nickname",
    es: "Solo miembros con alias",
  },
  needNicknameText: {
    ru: "Чтобы создать тему на форуме, выбери ник на странице «Присоединиться». Это помогает сохранить порядок и уважение.",
    en: "To create a topic you need a nickname from the Join page. This helps keep order and mutual respect.",
    de: "Um ein Thema zu erstellen, brauchst du einen Nickname von der Seite „Beitreten“. Das hilft Ordnung und Respekt zu halten.",
    es: "Para crear un tema necesitas un alias desde la página «Unirse». Esto ayuda a mantener el orden y el respeto.",
  },
  goToJoin: {
    ru: "Перейти на страницу «Присоединиться»",
    en: "Go to the Join page",
    de: "Zur Seite „Beitreten“",
    es: "Ir a la página «Unirse»",
  },
};

function getSectionLabel(section: string, language: Language): string {
  const dict = sectionLabels[section as SectionKey];
  if (!dict) return section;
  return dict[language] ?? section;
}

const ForumPage: React.FC = () => {
  const { language } = useLanguage();
  const { member } = useMember();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [postsMeta, setPostsMeta] = useState<Record<string, PostsMeta>>({});
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [section, setSection] = useState<SectionKey>("general");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMember = Boolean(member.memberId && member.nickname);

  // Загрузка тем
  useEffect(() => {
    const topicsRef = query(ref(db, "forum/topics"), orderByChild("createdAt"));

    const unsubscribe = onValue(topicsRef, (snapshot) => {
      const value = snapshot.val() || {};
      const list: Topic[] = Object.entries(value).map(([id, raw]) => {
        const t = raw as any;
        return {
          id,
          title: t.title ?? "",
          content: t.content ?? "",
          section: t.section ?? "general",
          createdAt: t.createdAt ?? 0,
          authorNickname: t.authorNickname ?? null,
        };
      });

      setTopics(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Метаданные по ответам: количество и время последнего ответа
  useEffect(() => {
    const postsRef = ref(db, "forum/posts");

    const unsubscribe = onValue(postsRef, (snapshot) => {
      const value = snapshot.val() || {};
      const meta: Record<string, PostsMeta> = {};

      Object.entries(value).forEach(([topicId, postsRaw]) => {
        const postsForTopic = postsRaw as any;
        let count = 0;
        let last = 0;

        Object.values(postsForTopic).forEach((p: any) => {
          count += 1;
          const ts = p.createdAt || 0;
          if (ts > last) last = ts;
        });

        meta[topicId] = {
          repliesCount: count,
          lastReplyAt: last || null,
        };
      });

      setPostsMeta(meta);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMember) return;
    if (!title.trim() || !content.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const topicsRef = ref(db, "forum/topics");
      const newRef = await push(topicsRef, {
        title: title.trim(),
        content: content.trim(),
        section,
        createdAt: Date.now(),
        createdAtServer: serverTimestamp(),
        authorNickname: member.nickname ?? null,
      });

      const topicId = newRef.key;
      setTitle("");
      setContent("");

      if (topicId) {
        window.location.href = `/forum/${topicId}`;
      }
    } catch (e) {
      console.error(e);
      setError(labels.error[language]);
    } finally {
      setSubmitting(false);
    }
  };

  const t = (key: keyof typeof labels) => labels[key][language];

  const langCode =
    language === "ru"
      ? "ru-RU"
      : language === "de"
      ? "de-DE"
      : language === "es"
      ? "es-ES"
      : "en-US";

  // Темы, отсортированные по последней активности (ответ или создание)
  const orderedTopics = [...topics].sort((a, b) => {
    const aMeta = postsMeta[a.id];
    const bMeta = postsMeta[b.id];

    const aLast = (aMeta?.lastReplyAt || a.createdAt || 0) as number;
    const bLast = (bMeta?.lastReplyAt || b.createdAt || 0) as number;

    return bLast - aLast;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Верхняя панель */}
        <header className="flex items-center justify-between gap-3">
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 transition"
          >
            {t("backToMain")}
          </button>

          <div className="text-right">
            <div className="text-xs uppercase tracking-wide text-zinc-400">
              Mobil Truck
            </div>
            <div className="text-sm font-semibold text-zinc-800">
              {t("title")}
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Список тем */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase">
              {t("topicsList")}
            </h2>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-zinc-900/5 p-4 space-y-3">
              {loading && <p className="text-xs text-zinc-500">…</p>}

              {!loading && orderedTopics.length === 0 && (
                <p className="text-sm text-zinc-500">{t("noTopics")}</p>
              )}

              {orderedTopics.map((topic) => {
                const meta = postsMeta[topic.id];
                const replies = meta?.repliesCount ?? 0;
                const lastActivity =
                  meta?.lastReplyAt || topic.createdAt || null;

                return (
                  <a
                    key={topic.id}
                    href={`/forum/${topic.id}`}
                    className="block rounded-xl border border-zinc-200 px-3 py-2.5 hover:border-zinc-400 hover:bg-zinc-50 transition"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {topic.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                        {getSectionLabel(topic.section, language)}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 line-clamp-2">
                      {topic.content}
                    </p>
                    <div className="mt-1 text-[10px] text-zinc-400 flex items-center justify-between">
                      <span>
                        {topic.authorNickname
                          ? `@${topic.authorNickname}`
                          : labels.anonName[language]}
                      </span>
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <span>💬</span>
                          <span>{replies}</span>
                        </span>
                        {lastActivity && (
                          <span>
                            {new Date(lastActivity).toLocaleString(langCode)}
                          </span>
                        )}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Форма новой темы */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-zinc-900/5 p-4 space-y-3">
            <h2 className="text-sm font-semibold text-zinc-700">
              {t("newTopicTitle")}
            </h2>
            <p className="text-xs text-zinc-500">{labels.intro[language]}</p>

            {!isMember && (
              <div className="mt-2 rounded-lg border border-zinc-200 bg-zinc-50 p-3 space-y-2 text-xs text-zinc-600">
                <div className="font-semibold">
                  {labels.needNicknameTitle[language]}
                </div>
                <p>{labels.needNicknameText[language]}</p>
                <a
                  href="/join"
                  className="inline-flex items-center rounded-full border border-zinc-300 px-3 py-1 mt-1 text-[11px] font-medium hover:bg-zinc-100"
                >
                  {labels.goToJoin[language]}
                </a>
              </div>
            )}

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-zinc-700">
                  {t("topicTitleLabel")}
                </label>
                <input
                  className="w-full rounded-lg border border-zinc-200 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={160}
                  disabled={!isMember}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-zinc-700">
                  {t("sectionLabel")}
                </label>
                <select
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                  value={section}
                  onChange={(e) =>
                    setSection(e.target.value as SectionKey)
                  }
                  disabled={!isMember}
                >
                  {Object.keys(sectionLabels).map((secKey) => (
                    <option key={secKey} value={secKey}>
                      {getSectionLabel(secKey, language)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-zinc-700">
                  {t("messageLabel")}
                </label>
                <textarea
                  className="w-full min-h-[80px] rounded-lg border border-zinc-200 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-zinc-300 resize-y"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={2000}
                  disabled={!isMember}
                />
              </div>

              {error && (
                <p className="text-xs text-red-500">
                  {error}
                </p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={
                    !isMember || submitting || !title.trim() || !content.trim()
                  }
                  className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    !isMember || submitting || !title.trim() || !content.trim()
                      ? "bg-zinc-200 text-zinc-500 cursor-not-allowed"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {submitting ? "…" : t("submit")}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ForumPage;
