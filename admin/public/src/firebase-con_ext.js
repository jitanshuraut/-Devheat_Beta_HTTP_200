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
  apiKey: "AIzaSyDM6GOfyYhLr-aoHaBQ96ThYuHZvTCz5iA",
  authDomain: "extra-70065.firebaseapp.com",
  projectId: "extra-70065",
  storageBucket: "extra-70065.appspot.com",
  messagingSenderId: "196280819211",
  appId: "1:196280819211:web:d1d320c3cbad56d466310e",
  measurementId: "G-NWLH4TFN28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);