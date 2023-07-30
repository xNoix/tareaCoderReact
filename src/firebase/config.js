// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZKZPwymm8er_x56hP4FMPXyHzzq71IQ8",
    authDomain: "react-coderhouse-96f77.firebaseapp.com",
    projectId: "react-coderhouse-96f77",
    storageBucket: "react-coderhouse-96f77.appspot.com",
    messagingSenderId: "60551649221",
    appId: "1:60551649221:web:bc627733139ce6fd7f9dac",
    measurementId: "G-WZHW8VBWD0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);