// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-5c7a9.firebaseapp.com",
  projectId: "car-marketplace-5c7a9",
  storageBucket: "car-marketplace-5c7a9.appspot.com",
  messagingSenderId: "495492369576",
  appId: "1:495492369576:web:f8dac7b47519b9f5bac69d",
  measurementId: "G-XMGJQHCBHV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);