import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ6E5ppEn99in75wbsixnwnscACXxCNE0",
  authDomain: "mrs-satlinks.firebaseapp.com",
  projectId: "mrs-satlinks",
  storageBucket: "mrs-satlinks.appspot.com",
  messagingSenderId: "309033994626",
  appId: "1:309033994626:web:66a2024b1dffaf83d1a79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// need to export DB
export const db = getFirestore(app);
