// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from"@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpUzGLJ0ukc6jg37UqeUyENHmwYP_3aU",
  authDomain: "http-200.firebaseapp.com",
  projectId: "http-200",
  storageBucket: "http-200.appspot.com",
  messagingSenderId: "484865844070",
  appId: "1:484865844070:web:b0a4bc7bf26514d1cf1ea7",
  measurementId: "G-7H6QDBPL6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);