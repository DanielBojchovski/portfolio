// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjJjZEqxnyZMmU8ynzGRUGZZv06YjivVk",
  authDomain: "todos-firebase-70cc2.firebaseapp.com",
  projectId: "todos-firebase-70cc2",
  storageBucket: "todos-firebase-70cc2.appspot.com",
  messagingSenderId: "274760817271",
  appId: "1:274760817271:web:0eeca8bf62c4a161fb8472",
  measurementId: "G-13K6DQM1LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);