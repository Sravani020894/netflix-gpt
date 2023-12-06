// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzoiuBSGXM45r3BatOX6LqRbu29p94AWc",
  authDomain: "netflix-gpt-12124.firebaseapp.com",
  projectId: "netflix-gpt-12124",
  storageBucket: "netflix-gpt-12124.appspot.com",
  messagingSenderId: "159842785311",
  appId: "1:159842785311:web:bfad8ecdce19ad0c51dd2a",
  measurementId: "G-WW7BWXKVZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);