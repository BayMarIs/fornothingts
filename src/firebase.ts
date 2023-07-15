// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMj0rXr88te4hNpYbWHaZRtubR7dcCOlk",
  authDomain: "fornothingts.firebaseapp.com",
  projectId: "fornothingts",
  storageBucket: "fornothingts.appspot.com",
  messagingSenderId: "673186626048",
  appId: "1:673186626048:web:62e186abefc6dde250f6e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
