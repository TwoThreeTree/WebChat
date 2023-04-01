// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm7i2iS2Vdt4Aov4MC5tiBRcfey2OlYek",
  authDomain: "webchat-firebase-137c8.firebaseapp.com",
  projectId: "webchat-firebase-137c8",
  storageBucket: "webchat-firebase-137c8.appspot.com",
  messagingSenderId: "1046412128677",
  appId: "1:1046412128677:web:0b7ad4e332378e1a32784c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
