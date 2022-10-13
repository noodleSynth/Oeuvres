// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8w5uqAgydczG1HqwIvbDIA9kbY1YEFTs",
  authDomain: "oeuvres-backend.firebaseapp.com",
  projectId: "oeuvres-backend",
  storageBucket: "oeuvres-backend.appspot.com",
  messagingSenderId: "318411936716",
  appId: "1:318411936716:web:91c11c8911c283bb490369",
  measurementId: "G-631DX23F2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);