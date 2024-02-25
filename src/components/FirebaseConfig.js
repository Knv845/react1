// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCvuKELr0KAIdaceh07EEVwR39WIlnvcA",
  authDomain: "portalback-49d46.firebaseapp.com",
  projectId: "portalback-49d46",
  storageBucket: "portalback-49d46.appspot.com",
  messagingSenderId: "268002044713",
  appId: "1:268002044713:web:ecea1a8a04777992872538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);  
