// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1Vkvoubf5naZHKxJBEf8V4xC-N6WHJwE",
  authDomain: "react-app2-4282e.firebaseapp.com",
  projectId: "react-app2-4282e",
  storageBucket: "react-app2-4282e.appspot.com",
  messagingSenderId: "53098525948",
  appId: "1:53098525948:web:4fbd4ea281cc6305125379",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
