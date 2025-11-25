// src/lib/assistantMemory.ts
// Память ассистента на Firebase (Realtimedb)

import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  // ⚠️ ВСТАВЬ СЮДА СВОИ ДАННЫЕ ПРОЕКТА FIREBASE ДЛЯ MOBIL TRUCK
  // Эти значения можно взять в консоли Firebase:
  // Project settings -> General -> Your apps -> SDK setup and configuration
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "ТВОЙ_ДОМЕН.firebaseapp.com",
  databaseURL: "https://ТВОЙ_ПРОЕКТ-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ТВОЙ_ID_ПРОЕКТА",
  storageBucket: "ТВОЙ_БАКЕТ.appspot.com",
  messagingSenderId: "ТВОЙ_SENDER_ID",
  appId: "ТВОЙ_APP_ID",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getDatabase(app);

const CLIENT_KEY = "mobiltruck_client_id";

export const getOrCreateClientId = (): string | null => {
  if (typeof window === "undefined") return null;
  try {
    let id = window.localStorage.getItem(CLIENT_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(CLIENT_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
};

export const saveAssistantTurn = async (
  clientId: string,
  userText: string,
  assistantText: string
) => {
  if (!clientId) return;
  try {
    const nodeRef = ref(db, `assistantSessions/${clientId}`);
    await push(nodeRef, {
      user: userText,
      assistant: assistantText,
      ts: Date.now(),
    });
  } catch {
    // лог можно добавить позже
  }
};
