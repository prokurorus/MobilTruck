// src/lib/assistantMemory.ts
// Память ассистента на Firebase (Realtimedb)

import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCmTNXdBF7ilzeZVB2VaIt1USIMdXA2src",
  authDomain: "novaciv-web.firebaseapp.com",
  databaseURL: "https://novaciv-web-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "novaciv-web",
  storageBucket: "novaciv-web.firebasestorage.app",
  messagingSenderId: "884571454196",
  appId: "1:884571454196:web:282712115c2d480299bca1",
  measurementId: "G-ZX33H70XCZ"
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
