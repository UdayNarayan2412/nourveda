import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18mb-JmHG6G3Nj5kdNgYpKK47w2dRToQ",
  authDomain: "nourveda-65506.firebaseapp.com",
  projectId: "nourveda-65506",
  storageBucket: "nourveda-65506.firebasestorage.app",
  messagingSenderId: "93158416135",
  appId: "1:93158416135:web:8d72409d93ebed5a99afa2",
  measurementId: "G-C01TPQSPJ9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
