// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDpvgCs30CBcaFKVWP1HNovs1Z4hCSLGk",
  authDomain: "homework2-6aab5.firebaseapp.com",
  projectId: "homework2-6aab5",
  storageBucket: "homework2-6aab5.appspot.com",
  messagingSenderId: "986067306787",
  appId: "1:986067306787:web:21e793123ba4831b592496",
  measurementId: "G-XREW9ZG6LR"
};

initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore();