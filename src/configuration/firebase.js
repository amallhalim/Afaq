2// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2sH9Q-MNLgfcHqft4d5jFNEMGpBiLbo",
  authDomain: "afaq-project1.firebaseapp.com",
  projectId: "afaq-project1",
  storageBucket: "afaq-project1.appspot.com",
  messagingSenderId: "726932217592",
  appId: "1:726932217592:web:cbd6445f6bb1f420b4250d",
  measurementId: "G-R26PCM73RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storageSdk = getStorage(app);
const auth = getAuth(app);

const analytics = getAnalytics(app);
export { db ,storageSdk,auth,analytics}