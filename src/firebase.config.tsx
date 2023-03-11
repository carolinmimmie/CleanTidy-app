import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDylpkZWTjJ_7Mir1CktAi08V3ylt1MC28",
  authDomain: "stadafint-27369.firebaseapp.com",
  projectId: "stadafint-27369",
  storageBucket: "stadafint-27369.appspot.com",
  messagingSenderId: "508641367614",
  appId: "1:508641367614:web:e2c56afa6d1a8542a7e36f",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
