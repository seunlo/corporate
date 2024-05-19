// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_fRJW42UeOnjSJnjaixKKXtXxp2WTWoY",
  authDomain: "elaloey-foundry.firebaseapp.com",
  projectId: "elaloey-foundry",
  storageBucket: "elaloey-foundry.appspot.com",
  messagingSenderId: "442470921921",
  appId: "1:442470921921:web:b5da6b684fb57f8729c640",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
