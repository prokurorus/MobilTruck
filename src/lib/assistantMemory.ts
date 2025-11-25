// src/lib/assistantMemory.ts
// Память ассистента на Firebase (Realtimedb)

import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZgVrz0uREv1o3KFm1g-GvKWSCaSLzv8c",
  authDomain: "mobiltruck-forum.firebaseapp.com",
  databaseURL: "https://mobiltruck-forum-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobiltruck-forum",
  storageBucket: "mobiltruck-forum.firebasestorage.app",
  messagingSenderId: "766370719906",
  appId: "1:766370719906:web:4657583a90425f9f3c4ffb"
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
