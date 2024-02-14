// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeward-haven.firebaseapp.com",
  projectId: "homeward-haven",
  storageBucket: "homeward-haven.appspot.com",
  messagingSenderId: "91869908655",
  appId: "1:91869908655:web:046ae8c709c7bc3faf8e5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
