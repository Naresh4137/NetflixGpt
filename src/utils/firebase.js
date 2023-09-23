// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIjIKkGfgy1lIjspL8Rm1c3ocCjj9I7Zg",
  authDomain: "netflix-gpt-f93b9.firebaseapp.com",
  projectId: "netflix-gpt-f93b9",
  storageBucket: "netflix-gpt-f93b9.appspot.com",
  messagingSenderId: "630813493974",
  appId: "1:630813493974:web:5462c03ea39ac847cc1777",
  measurementId: "G-K4B8M1W1TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()