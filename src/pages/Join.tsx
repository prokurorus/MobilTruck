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
  de: "Mobil Truck wächst. Wir suchen Fahrer, Partner
