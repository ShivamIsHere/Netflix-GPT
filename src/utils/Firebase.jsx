// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQjM_0nZnlL202NSAuINMu1Hqeafa9H8s",
  authDomain: "netflixgpt-88420.firebaseapp.com",
  projectId: "netflixgpt-88420",
  storageBucket: "netflixgpt-88420.firebasestorage.app",
  messagingSenderId: "799610626759",
  appId: "1:799610626759:web:3561b32de55c5d604a14e2",
  measurementId: "G-H4Q5Y56FK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
