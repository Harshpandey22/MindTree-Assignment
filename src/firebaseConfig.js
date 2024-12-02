import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNoY0bu3-t8lOC_PIJ4rWZCF9gZBVfj24",
  authDomain: "auth-1cb61.firebaseapp.com",
  projectId: "auth-1cb61",
  storageBucket: "auth-1cb61.firebasestorage.app",
  messagingSenderId: "131945285841",
  appId: "1:131945285841:web:c1d46c760eaaa9bca65df0",
  measurementId: "G-SJT7MJF5FQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
