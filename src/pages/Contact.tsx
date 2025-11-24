import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

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
          "После отправки формы сообщение попадёт к основателю проекта.",
          "Можно также задать вопросы на форуме в разделе, посвящённом работе водителей."
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
          "После связи можно обсудить модель, договоры и шаги запуска в личном формате.",
          "Для уточняющих вопросов подойдёт и форум — там удобно обсуждать детали публично."
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
          "Там можно задать любые вопросы по структуре холдинга, модели 8% и условиям.",
          "Форум удобен для тех, кто хочет сначала посмотреть, как проект развивается публично."
        ]
      }
    ],

    note: "Позже на этой странице могут появиться дополнительные каналы связи (телефон, мессенджеры, почта). Базовый принцип остаётся тем же: минимум бюрократии, максимум ясности."
  },

  en: {
    badge: "Mobil Truck • contacts",
    title: "Contact Mobil Truck",
    subtitle:
      "If you want to join as a driver, partner or entrepreneur, the main thing is to reach a real conversation — not drown in forms. Below are the simple ways to get in touch.",

    blocks: [
      {
        title: "For drivers",
        items: [
          <>
            Use the short form on{" "}
            <a href="/join" className="text-emerald-600 underline">
              the Join page
            </a>{" "}
            — mention that you are interested in a driver position and your
            experience.
          </>,
          "Your message goes directly to the founder.",
          "You can also ask questions on the forum in the drivers section."
        ]
      },
      {
        title: "For partners and entrepreneurs",
        items: [
          <>
            If you are considering opening a company in the holding structure,
            write via{" "}
            <a href="/join" className="text-emerald-600 underline">
              the Join page
            </a>{" "}
            and mark your role as “Partner / own company (UG/GmbH)”.
          </>,
          "After that, conditions and contracts can be discussed directly.",
          "For public questions the forum is also a good place."
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
          "Useful if you first want to see how the project develops in public."
        ]
      }
    ],

    note: "Additional channels (phone, messengers, email) may be added later. The idea stays the same: no bureaucracy, only clear and direct communication."
  },

  de: {
    badge: "Mobil Truck • Kontakt",
    title: "Kontakt zu Mobil Truck",
    subtitle:
      "Für Fahrer, Partner und Unternehmer soll der Weg zur Kontaktaufnahme möglichst einfach sein. Unten stehen die klaren Kanäle ohne unnötige Bürokratie.",

    blocks: [
      {
        title: "Für Fahrer",
        items: [
          <>
            Nutzen Sie das kurze Formular auf{" "}
            <a href="/join" className="text-emerald-600 underline">
              der Seite „Join / Присоединиться“
            </a>{" "}
            und schreiben Sie, dass Sie als Fahrer arbeiten möchten.
          </>,
          "Die Nachricht geht direkt an den Gründer.",
          "Fragen können auch im Forum im Fahrer-Bereich gestellt werden."
        ]
      },
      {
        title: "Für Partner und Unternehmer",
        items: [
          <>
            Wenn Sie eine eigene Firma (UG/GmbH) im Holding-Modell aufbauen
            möchten, schreiben Sie über{" "}
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
          "Dort können Struktur, 8%-Modell und Rollen diskutiert werden.",
          "Gut für alle, die das Projekt zuerst öffentlich beobachten wollen."
        ]
      }
    ],

    note: "Weitere Kontaktkanäle können später ergänzt werden. Grundprinzip: klare, direkte Kommunikation ohne überflüssige Hürden."
  },

  es: {
    badge: "Mobil Truck • contactos",
    title: "Contactar con Mobil Truck",
    subtitle:
      "Si quieres unirte como conductor, socio o emprendedor, lo principal es llegar al diálogo real. Aquí tienes las formas sencillas de hacerlo.",

    blocks: [
      {
        title: "Para conductores",
        items: [
          <>
            Rellena el formulario en{" "}
            <a href="/join" className="text-emerald-600 underline">
              la página «Join / Присоединиться»
            </a>{" "}
            indicando que buscas trabajo como conductor.
          </>,
          "El mensaje llegará directamente al fundador.",
          "También puedes hacer preguntas en el foro, en la sección para conductores."
        ]
      },
      {
        title: "Para socios y emprendedores",
        items: [
          <>
            Si piensas abrir tu empresa dentro del holding, escribe a través de{" "}
            <a href="/join" className="text-emerald-600 underline">
              la página «Join»
            </a>{" "}
            con nota «Socio / empresa propia (UG/GmbH)».
          </>,
          "Después se podrán discutir condiciones y contratos de forma directa.",
          "Para preguntas públicas, el foro es el mejor lugar."
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
          "Allí se puede preguntar por el modelo del 8 %, la estructura y los roles.",
          "Es útil si primero quieres observar cómo evoluciona el proyecto."
        ]
      }
    ],

    note: "Más tarde se podrán añadir otros canales (teléfono, mensajería, correo). La idea básica es la misma: comunicación clara y directa."
  }
};

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = contactText[language] ?? contactText.ru;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        <div className="flex items-start justify-between gap-4">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.badge}
            </div>

            <div className="space-y-2 max-w-2xl">
              <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
                {t.title}
              </h1>
              <p className="text-sm text-zinc-600">{t.subtitle}</p>
            </div>
          </header>

          <LanguageSwitcher />
        </div>

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
