import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-GruOqVX1w0gPMqA7KUVOFs2WvyB6OX4",
  authDomain: "house-marketplace-app-d331d.firebaseapp.com",
  projectId: "house-marketplace-app-d331d",
  storageBucket: "house-marketplace-app-d331d.appspot.com",
  messagingSenderId: "298884422662",
  appId: "1:298884422662:web:e7795a29ae9b3b099ef787",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// FIREBASE USAGE:
// for database
// for authentication
// for file Storage
