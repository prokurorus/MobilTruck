import React, { useEffect, useState } from "react";
import { useStats } from "../hooks/useStats";
import { useChat } from "../hooks/useChat";
import { useMember } from "../hooks/useMember";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/language";
import { db } from "../lib/firebase";
import { push, ref, serverTimestamp } from "firebase/database";

/* ----------------------------------------------------------
   ТЕКСТЫ MOBIL TRUCK
---------------------------------------------------------- */

const joinPageTitle: Record<Language, string> = {
  ru: "Присоединиться к Mobil Truck",
  en: "Join Mobil Truck",
  de: "Mobil Truck beitreten",
  es: "Unirse a Mobil Truck",
};

const topIntro: Record<Language, string> = {
  ru: "Mobil Truck — это растущая сеть транспортных компаний. Здесь реальные счетчики, реальные люди и реальные решения.",
  en: "Mobil Truck is a growing network of transport companies. All counters and chat activity come from real people.",
  de: "Mobil Truck ist ein wachsendes Netzwerk von Transportunternehmen. Alle Zähler und der Chat spiegeln echte Menschen wider.",
  es: "Mobil Truck es una red creciente de empresas de transporte. Todos los contadores y el chat reflejan actividad real.",
};

const statsLabels: Record<
  Language,
  { visitors: string; likes: string; joined: string; likeButton: string }
> = {
  ru: {
    visitors: "Посетили",
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

const whoWeSeekTitle: Record<Language, string> = {
  ru: "Кого мы ищем",
  en: "Who we are looking for",
  de: "Wen wir suchen",
  es: "A quién buscamos",
};

const whoWeSeekIntro: Record<Language, string> = {
  ru: "Mobil Truck растёт. Нам нужны водители, партнёры и предприниматели, которые хотят не просто работать, а строить свою ветку внутри холдинга.",
  en: "Mobil Truck is expanding. We are looking for drivers, partners and entrepreneurs who want not just a job, but the chance to build their own branch within the holding.",
  de: "Mobil Truck wächst. Wir suchen Fahrer, Partner und Unternehmer, die nicht nur arbeiten, sondern ihren eigenen Zweig im Holding aufbauen wollen.",
  es: "Mobil Truck está creciendo. Buscamos conductores, socios y emprendedores que quieran no solo un trabajo, sino construir su propia rama dentro del holding.",
};

const whoWeSeekBullets: Record<Language, string[]> = {
  ru: [
    "Водители с европейскими категориями и опытом.",
    "Партнёры, желающие открыть свою компанию (UG/GmbH).",
    "Предприниматели, готовые строить собственную ветку холдинга.",
    "Люди с ответственностью, дисциплиной и желанием расти.",
  ],
  en: [
    "Drivers with EU licenses and experience.",
    "Partners who want to open their own company (UG/GmbH).",
    "Entrepreneurs ready to build their own branch.",
    "People with discipline, responsibility and ambition.",
  ],
  de: [
    "Fahrer mit EU-Führerscheinen und Erfahrung.",
    "Partner, die ihr eigenes Unternehmen gründen wollen (UG/GmbH).",
    "Unternehmer, die ihren eigenen Zweig aufbauen möchten.",
    "Menschen mit Verantwortung, Disziplin und Wachstumshunger.",
  ],
  es: [
    "Conductores con licencias de la UE y experiencia.",
    "Socios que quieran abrir su propia empresa (UG/GmbH).",
    "Emprendedores listos para construir su propia rama.",
    "Personas responsables, disciplinadas y con ambición.",
  ],
};

const alreadyHereTitle: Record<Language, string> = {
  ru: "Те, кто уже присоединился",
  en: "Those already here",
  de: "Die bereits hier sind",
  es: "Los que ya están aquí",
};

const alreadyHereSubtitle: Record<Language, string> = {
  ru: "Последние активные участники по никнеймам.",
  en: "Latest active members by nickname.",
  de: "Letzte aktive Mitglieder nach Nickname.",
  es: "Últimos miembros activos por alias.",
};

const nicknameTitle: Record<Language, string> = {
  ru: "Выберите свой ник",
  en: "Choose your nickname",
  de: "Wähle deinen Nickname",
  es: "Elige tu alias",
};

const nicknameChangeTitle: Record<Language, string> = {
  ru: "Смена ника",
  en: "Change nickname",
  de: "Nickname ändern",
  es: "Cambiar alias",
};

const nicknameDescription: Record<Language, string> = {
  ru: "Никнейм будет отображаться в чате. Позже добавим расширенную регистрацию.",
  en: "Your nickname will appear in the chat. Later we will add extended registration.",
  de: "Dein Nickname wird im Chat angezeigt. Später kommt eine erweiterte Registrierung.",
  es: "Tu alias aparecerá en el chat. Más adelante añadiremos un registro ampliado.",
};

const nicknamePlaceholder: Record<Language, string> = {
  ru: "Например: TruckWolf",
  en: "For example: RoadRunner",
  de: "Zum Beispiel: AsphaltWolf",
  es: "Por ejemplo: RutaToro",
};

const nicknameButton: Record<Language, string> = {
  ru: "Присоединяюсь",
  en: "Join",
  de: "Beitreten",
  es: "Unirme",
};

const nicknameChangeButton: Record<Language, string> = {
  ru: "Обновить ник",
  en: "Update nickname",
  de: "Nickname aktualisieren",
  es: "Actualizar alias",
};

const openChatTitle: Record<Language, string> = {
  ru: "Чат Mobil Truck",
  en: "Mobil Truck Chat",
  de: "Mobil-Truck-Chat",
  es: "Chat Mobil Truck",
};

const openChatDescription: Record<Language, string> = {
  ru: "Чат открыт для чтения. Писать сообщения могут только те, кто выбрал ник.",
  en: "The chat is open for reading. Only members with a nickname can write.",
  de: "Der Chat ist zum Lesen offen. Schreiben können nur Mitglieder mit Nickname.",
  es: "El chat es abierto para lectura. Solo los miembros con alias pueden escribir.",
};

const emptyChatText: Record<Language, string> = {
  ru: "Пока пусто. Напишите первое сообщение.",
  en: "Quiet for now. Write the first message.",
  de: "Noch ruhig hier. Schreib die erste Nachricht.",
  es: "Aún tranquilo. Escribe el primer mensaje.",
};

const messagePlaceholderMember: Record<Language, string> = {
  ru: "Ваше сообщение…",
  en: "Your message...",
  de: "Deine Nachricht...",
  es: "Tu mensaje...",
};

const sendLabel: Record<Language, string> = {
  ru: "Отправить",
  en: "Send",
  de: "Senden",
  es: "Enviar",
};

/* ----------------------------------------------------------
   КОНТАКТЫ: Mobil Truck
---------------------------------------------------------- */

const contactTitle: Record<Language, string> = {
  ru: "Связаться с Mobil Truck",
  en: "Contact Mobil Truck",
  de: "Mobil Truck kontaktieren",
  es: "Contactar con Mobil Truck",
};

const contactIntro: Record<Language, string> = {
  ru: "Если хотите присоединиться как водитель, партнёр или предприниматель — напишите. Сообщение попадёт к основателю холдинга.",
  en: "If you want to join as a driver, partner or entrepreneur — write here. Your message goes directly to the founder of the holding.",
  de: "Wenn Sie als Fahrer, Partner oder Unternehmer beitreten möchten — schreiben Sie hier. Ihre Nachricht geht direkt an den Gründer des Holdings.",
  es: "Si deseas unirte como conductor, socio o emprendedor — escribe aquí. Tu mensaje irá directamente al fundador del holding.",
};

const contactNameLabel: Record<Language, string> = {
  ru: "Ваше имя или ник",
  en: "Your name or nickname",
  de: "Dein Name oder Nickname",
  es: "Tu nombre o alias",
};

const contactMethodLabel: Record<Language, string> = {
  ru: "Как с вами связаться",
  en: "How to contact you",
  de: "Wie wir dich erreichen",
  es: "Cómo contactarte",
};

const contactMessageLabel: Record<Language, string> = {
  ru: "Ваше сообщение",
  en: "Your message",
  de: "Deine Nachricht",
  es: "Tu mensaje",
};

const contactConsentLabel: Record<Language, string> = {
  ru: "Согласен на использование данных для связи по проекту Mobil Truck.",
  en: "I agree that my contact details may be used for Mobil Truck communication.",
  de: "Einverstanden, dass meine Kontaktdaten für Mobil Truck genutzt werden.",
  es: "Acepto que mis datos se utilicen para comunicaciones de Mobil Truck.",
};

const contactSubmitLabel: Record<Language, string> = {
  ru: "Отправить сообщение",
  en: "Send message",
  de: "Nachricht senden",
  es: "Enviar mensaje",
};

/* ----------------------------------------------------------
   СТАРТОВЫЙ КОМПОНЕНТ JOIN PAGE
---------------------------------------------------------- */

const JoinPage: React.FC = () => {
  const { stats, ensureVisitorCounted, like, joined } = useStats();
  const { member, registerNickname } = useMember();
  const { messages, sendMessage, isSending, cooldownLeft, maxLength } = useChat();
  const { language } = useLanguage();

  const [nicknameInput, setNicknameInput] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactAgree, setContactAgree] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSuccess, setContactSuccess] = useState<string | null>(null);

  useEffect(() => {
    ensureVisitorCounted();
  }, [ensureVisitorCounted]);

  /* ---- Лайки ---- */
  const handleLike = async () => {
    await like();
  };

  /* ---- Регистрация ника ---- */
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await registerNickname(nicknameInput);
    if (result) {
      setNicknameInput("");
      await joined();
    }
  };

  /* ---- Контактная форма ---- */
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(null);

    if (!contactAgree || !contactMethod.trim() || !contactMessage.trim()) {
      setContactError(
        language === "ru"
          ? "Заполните поля и поставьте галочку согласия."
          : language === "de"
          ? "Bitte Felder ausfüllen und Zustimmung ankreuzen."
          : language === "es"
          ? "Llena los campos y marca el consentimiento."
          : "Fill the fields and check the consent box."
      );
      return;
    }

    setContactSending(true);
    try {
      await push(ref(db, "contactRequests"), {
        createdAt: Date.now(),
        createdAtServer: serverTimestamp(),
        language,
        nickname: member.nickname || contactName || null,
        contact: contactMethod,
        message: contactMessage,
        role: "mobiltruck",
        status: "new",
      });

      setContactSuccess(
        language === "ru"
          ? "Сообщение отправлено."
          : language === "de"
          ? "Nachricht gesendet."
          : language === "es"
          ? "Mensaje enviado."
          : "Message sent."
      );

      setContactMessage("");
      setContactMethod("");
    } finally {
      setContactSending(false);
    }
  };

  /* ---- Отправка сообщений в чат ---- */
  const [messageInput, setMessageInput] = useState("");
  const isMember = Boolean(member.memberId && member.nickname);
  const length = messageInput.length;
  const sendDisabled =
    !isMember || isSending || !messageInput.trim() || cooldownLeft > 0;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(member, messageInput);
    setMessageInput("");
  };

  /* ----------------------------------------------------------
     РЕНДЕР СТРАНИЦЫ
  ---------------------------------------------------------- */

  const statsText = statsLabels[language];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Заголовок */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{joinPageTitle[language]}</h1>
          <p className="text-gray-600">{topIntro[language]}</p>
        </div>

        {/* Счётчики */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500">{statsText.visitors}</div>
            <div className="text-2xl font-semibold mt-1">{stats.visitors}</div>
          </div>
          <div className="border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{statsText.likes}</span>
              <button
                onClick={handleLike}
                className="text-xs border rounded-full px-3 py-1 hover:bg-gray-100 transition"
              >
                {statsText.likeButton}
              </button>
            </div>
            <div className="text-2xl font-semibold mt-1">{stats.likes}</div>
          </div>
          <div className="border rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-500">{statsText.joined}</div>
            <div className="text-2xl font-semibold mt-1">{stats.joined}</div>
          </div>
        </div>

        {/* Кто уже здесь */}
        <div className="border rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-medium">{alreadyHereTitle[language]}</h2>
          <p className="text-sm text-gray-600 mb-2">
            {alreadyHereSubtitle[language]}
          </p>
          <div className="inline-flex flex-wrap gap-2 text-sm">
            {member.nickname && (
              <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1">
                @{member.nickname}
              </span>
            )}
          </div>
        </div>

        {/* Кого мы ищем */}
        <div className="border rounded-xl p-4 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold">{whoWeSeekTitle[language]}</h2>
          <p className="text-sm text-gray-600">{whoWeSeekIntro[language]}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {whoWeSeekBullets[language].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Контактная форма Mobil Truck */}
        <div className="border rounded-xl p-4 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold">{contactTitle[language]}</h2>
          <p className="text-sm text-gray-600">{contactIntro[language]}</p>

          <form onSubmit={handleContactSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2"
                placeholder={contactNameLabel[language]}
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <input
                type="text"
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2"
                placeholder={contactMethodLabel[language]}
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              />
            </div>

            <textarea
              className="border rounded-lg w-full px-3 py-2 text-sm focus:ring-2 min-h-[80px]"
              placeholder={contactMessageLabel[language]}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={contactAgree}
                onChange={(e) => setContactAgree(e.target.checked)}
              />
              <span className="text-xs text-gray-600">
                {contactConsentLabel[language]}
              </span>
            </div>

            {contactError && (
              <p className="text-xs text-red-600">{contactError}</p>
            )}
            {contactSuccess && (
              <p className="text-xs text-green-600">{contactSuccess}</p>
            )}

            <button
              type="submit"
              disabled={contactSending}
              className={`px-4 py-2 rounded-lg text-white ${
                contactSending ? "bg-gray-400" : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {contactSubmitLabel[language]}
            </button>
          </form>
        </div>

        {/* Выбор ника */}
        <div className="border rounded-xl p-4 shadow-sm space-y-3">
          <h2 className="text-lg font-medium">
            {isMember ? nicknameChangeTitle[language] : nicknameTitle[language]}
          </h2>
          <p className="text-sm text-gray-600">
            {nicknameDescription[language]}
          </p>

          <form
            onSubmit={handleRegister}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder={nicknamePlaceholder[language]}
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
            >
              {isMember ? nicknameChangeButton[language] : nicknameButton[language]}
            </button>
          </form>
        </div>

        {/* Чат Mobil Truck */}
        <div className="border rounded-xl p-4 shadow-sm space-y-4">
          <h2 className="text-lg font-medium">{openChatTitle[language]}</h2>
          <p className="text-sm text-gray-600">
            {openChatDescription[language]}
          </p>

          {/* Сообщения */}
          <div className="max-h-80 overflow-y-auto border rounded-lg p-3 bg-gray-50 space-y-2">
            {messages.length === 0 && (
              <div className="text-sm text-gray-500">
                {emptyChatText[language]}
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className="text-sm">
                <span className="font-semibold">@{msg.nickname}</span>
                <span className="text-gray-400"> · </span>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          {/* Форма отправки */}
          <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
            <input
              type="text"
              className="border rounded-lg px-3 py-2"
              placeholder={
                isMember
                  ? messagePlaceholderMember[language]
                  : "Выберите ник, чтобы писать"
              }
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              disabled={!isMember}
              maxLength={maxLength}
            />
            <button
              type="submit"
              disabled={sendDisabled}
              className={`px-4 py-2 rounded-lg text-white ${
                sendDisabled ? "bg-gray-300" : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {sendLabel[language]}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
