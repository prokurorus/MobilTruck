// src/lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZgVrz0uREv1o3KFm1g-GvKWSCaSLzv8c",
  authDomain: "mobiltruck-forum.firebaseapp.com",
  databaseURL:
    "https://mobiltruck-forum-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobiltruck-forum",
  storageBucket: "mobiltruck-forum.firebasestorage.app",
  messagingSenderId: "766370719906",
  appId: "1:766370719906:web:51fc64e705ad8b333c4ffb",
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getDatabase(app);
