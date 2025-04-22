import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0yreKjZ6Kn35u20pnFqB1kUt3mtDrsaM",
  authDomain: "intern-49234.firebaseapp.com",
  projectId: "intern-49234",
  storageBucket: "intern-49234.firebasestorage.app",
  messagingSenderId: "451973462225",
  appId: "1:451973462225:web:5ce6f807e2963e07302df0",
  measurementId: "G-QHHH0T0YSM"
};


const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)