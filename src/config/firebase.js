import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmLM-mlY-QFBbYIL59R_80l1P7C_N-kkc",
  authDomain: "research-store-and-finde-765e4.firebaseapp.com",
  projectId: "research-store-and-finde-765e4",
  storageBucket: "research-store-and-finde-765e4.appspot.com",
  messagingSenderId: "653244850985",
  appId: "1:653244850985:web:300c9a32ee6cdcd5988d38"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();