// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCfPeVHi5MWUSF73yO9xSxbRcCz4UoTwY",
  authDomain: "the-dragon-news-ed224.firebaseapp.com",
  projectId: "the-dragon-news-ed224",
  storageBucket: "the-dragon-news-ed224.firebasestorage.app",
  messagingSenderId: "968485760445",
  appId: "1:968485760445:web:a31465e9d122453663b6d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
