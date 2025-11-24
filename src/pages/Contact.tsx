import React from "react";
import { useLanguage } from "../context/LanguageContext";

/* --- Текстовое наполнение по языкам --- */

const contactText: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    blocks: { title: string; items: (string | JSX.Element)[] }[];
    note: string;
  }
> = {
  ru: {
    badge: "Mobil Truck • контакты",
    title: "Связаться с Mobil Truck",
    subtitle:
      "Если вы хотите присоединиться как водитель, партнёр или предприниматель — главное не потеряться в чате, а дойти до живого контакта. Ниже — простые каналы связи, без сложных форм и бюрократии.",

    blocks: [
      {
        title: "Водителям",
        items: [
          <>
            Заполните короткую форму на странице{" "}
            <a href="/join" className="text-emerald-600 underline">
              «Присоединиться»
            </a>{" "}
            — укажите, что хотите работать водителем, и свой опыт.
          </>,
          "После отправки форма попадёт напрямую к основателю проекта.",
          "Можно также задать вопросы на форуме в разделе для водителей."
        ]
      },
      {
        title: "Партнёрам и предпринимателям",
        items: [
          <>
            Если вы рассматриваете открытие компании в структуре холдинга —
            лучше всего написать через{" "}
            <a href="/join" className="text-emerald-600 underline">
              страницу «Присоединиться»
            </a>{" "}
            с пометкой «Партнёр / своя компания (UG/GmbH)».
          </>,
          "Далее можно обсудить модель, договоры и шаги запуска в личном формате.",
          "Для уточняющих вопросов подойдёт и форум — удобно обсуждать детали публично."
        ]
      },
      {
        title: "Форум и открытые обсуждения",
        items: [
          <>
            Форум доступен по адресу{" "}
            <a href="/forum" className="text-emerald-600 underline">
              /forum
            </a>
            .
          </>,
          "Там можно задать вопросы по структуре холдинга, модели 8% и условиям.",
          "Удобно, если хотите сначала посмотреть развитие проекта публично."
        ]
      }
    ],

    note: "Позже здесь могут появиться дополнительные каналы связи (телефон, мессенджеры, почта). Принцип остаётся тем же: минимум бюрократии, максимум ясности."
  },

  /* --- английский / немецкий / испанский без изменений --- */

  en: {
    badge: "Mobil Truck • contacts",
    title: "Contact Mobil Truck",
    subtitle:
      "If you want to join as a driver, partner or entrepreneur — the key is to reach a real conversation, not drown in forms. Below are simple, direct contact methods.",

    blocks: [
      {
        title: "For drivers",
        items: [
          <>
            Use the short form on{" "}
            <a href="/join" className="text-emerald-600 underline">
              the Join page
            </a>{" "}
            — mention that you want a driver position and your experience.
          </>,
          "Your message goes directly to the founder.",
          "You can also ask questions in the drivers section of the forum."
        ]
      },
      {
        title: "For partners and entrepreneurs",
        items: [
          <>
            If you're considering opening a company within the holding —
            contact via{" "}
            <a href="/join" className="text-emerald-600 underline">
              the Join page
            </a>{" "}
            with the note “Partner / own company (UG/GmbH)”.
          </>,
          "Then you can discuss model, agreements and launch steps directly.",
          "Forum is also suitable for public questions."
        ]
      },
      {
        title: "Forum & public discussion",
        items: [
          <>
            The forum is available at{" "}
            <a href="/forum" className="text-emerald-600 underline">
              /forum
            </a>
            .
          </>,
          "You can ask about the 8% model, structure and roles.",
          "Useful if you first want to observe the public progress."
        ]
      }
    ],

    note: "Additional channels (phone, email, messengers) may appear later. The principle remains: clarity and direct contact."
  },

  de: {
    badge: "Mobil Truck • Kontakt",
    title: "Kontakt zu Mobil Truck",
    subtitle:
      "Für Fahrer, Partner und Unternehmer — unten stehen klare Kontaktwege ohne unnötige Hürden.",

    blocks: [
      {
        title: "Für Fahrer",
        items: [
          <>
            Nutzen Sie das kurze Formular auf{" "}
            <a href="/join" className="text-emerald-600 underline">
              der Seite „Join / Присоединиться“
            </a>{" "}
            und geben Sie an, dass Sie als Fahrer arbeiten möchten.
          </>,
          "Die Nachricht geht direkt an den Gründer.",
          "Fragen können auch im Fahrerbereich des Forums gestellt werden."
        ]
      },
      {
        title: "Für Partner und Unternehmer",
        items: [
          <>
            Wenn Sie eine Firma (UG/GmbH) im Holding-Modell eröffnen möchten,
            schreiben Sie über{" "}
            <a href="/join" className="text-emerald-600 underline">
              die Join-Seite
            </a>{" "}
            mit dem Hinweis „Partner / eigene Firma“.
          </>,
          "Danach können Konditionen und Verträge direkt besprochen werden.",
          "Für allgemeine Fragen eignet sich das Forum."
        ]
      },
      {
        title: "Forum & offene Diskussion",
        items: [
          <>
            Das Forum ist unter{" "}
            <a href="/forum" className="text-emerald-600 underline">
              /forum
            </a>{" "}
            erreichbar.
          </>,
          "Diskussionen zu Struktur, 8%-Modell und Rollen sind dort möglich.",
          "Gut, wenn man zuerst die öffentliche Entwicklung sehen möchte."
        ]
      }
    ],

    note: "Weitere Kanäle können später ergänzt werden. Prinzip: klare Kommunikation."
  },

  es: {
    badge: "Mobil Truck • contactos",
    title: "Contactar con Mobil Truck",
    subtitle:
      "Si quieres unirte como conductor, socio o emprendedor — aquí están las formas directas de hacerlo.",

    blocks: [
      {
        title: "Para conductores",
        items: [
          <>
            Completa el formulario en{" "}
            <a href="/join" className="text-emerald-600 underline">
              la página «Join»
            </a>{" "}
            indicando tu interés.
          </>,
          "El mensaje va directamente al fundador.",
          "También puedes preguntar en el foro."
        ]
      },
      {
        title: "Para socios y emprendedores",
        items: [
          <>
            Si planeas abrir una empresa dentro del holding, escribe vía{" "}
            <a href="/join" className="text-emerald-600 underline">
              «Join»
            </a>{" "}
            con nota «Socio / empresa propia (UG/GmbH)».
          </>,
          "Después se pueden discutir condiciones y contratos.",
          "El foro es útil para preguntas públicas."
        ]
      },
      {
        title: "Foro y discusiones abiertas",
        items: [
          <>
            El foro está disponible en{" "}
            <a href="/forum" className="text-emerald-600 underline">
              /forum
            </a>
            .
          </>,
          "Allí puedes consultar estructura y modelo del 8%.",
          "Útil si primero quieres observar el desarrollo público."
        ]
      }
    ],

    note: "Más canales pueden añadirse más adelante. El principio: claridad y sencillez."
  }
};

/* --- Основной компонент --- */

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = contactText[language] ?? contactText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">

        {/* Верхняя часть */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
            {t.title}
          </h1>

          <p className="text-sm text-zinc-600 max-w-2xl">{t.subtitle}</p>
        </header>

        {/* Блоки */}
        <section className="grid gap-6 lg:grid-cols-3">
          {t.blocks.map((block, i) => (
            <div key={i} className="card space-y-3">
              <h2 className="text-lg font-semibold text-zinc-900">
                {block.title}
              </h2>
              <ul className="text-sm text-zinc-700 list-disc list-inside space-y-1">
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <p className="text-xs text-zinc-500 max-w-xl">{t.note}</p>
      </div>
    </main>
  );
};

export default ContactPage;
