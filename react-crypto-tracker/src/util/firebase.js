// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJEx_w4C6ibC7zLyNmF4qi8OUdYVklyIc",
  authDomain: "nftlist-79bfa.firebaseapp.com",
  projectId: "nftlist-79bfa",
  storageBucket: "nftlist-79bfa.appspot.com",
  messagingSenderId: "295873099306",
  appId: "1:295873099306:web:894f2213d26b3d7b297553",
  measurementId: "G-LE2S2V4LED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
