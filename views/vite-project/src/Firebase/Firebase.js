// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL0ntX_KNcXVKESNMK-CNXZOQT3SnDtKM",
  authDomain: "noteswebapp-e3047.firebaseapp.com",
  projectId: "noteswebapp-e3047",
  storageBucket: "noteswebapp-e3047.appspot.com",
  messagingSenderId: "884536724498",
  appId: "1:884536724498:web:27679188281f90b2281ccb",
  measurementId: "G-FDCZZG3XSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app