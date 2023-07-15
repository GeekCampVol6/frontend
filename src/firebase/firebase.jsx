// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import "firebase/auth"
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA64akcoUIqUsUcRCRautQeBlxxe59DLic",
  authDomain: "geek06shime.firebaseapp.com",
  projectId: "geek06shime",
  storageBucket: "geek06shime.appspot.com",
  messagingSenderId: "547451927533",
  appId: "1:547451927533:web:0eea53f7794aa15e7305e4",
  measurementId: "G-6TSCFKT65V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const au = getAuth(app);
export const storage = getStorage();
