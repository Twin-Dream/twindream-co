import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

function initFirebase() {
  if (!getApps().length) {
    initializeApp(clientConfig);
  }
}

initFirebase();

export const firestore = getFirestore();
