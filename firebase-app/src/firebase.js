// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDESq8n7augVhUHS7L3Y1DTH39lkmGklVg",
  authDomain: "simple-crud-18d10.firebaseapp.com",
  projectId: "simple-crud-18d10",
  storageBucket: "simple-crud-18d10.firebasestorage.app",
  messagingSenderId: "1002843264633",
  appId: "1:1002843264633:web:ee776f0bb58b16952de6a8",
  measurementId: "G-1HGRQYPQHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);