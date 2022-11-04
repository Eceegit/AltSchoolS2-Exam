// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
   signInWithRedirect, 
   GoogleAuthProvider,  
   getRedirectResult,
   onAuthStateChanged  } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCexH5UPgdWE1LoSEiZL-Ove5Euq_V5thw",
  authDomain: "second-semes-exam.firebaseapp.com",
  projectId: "second-semes-exam",
  storageBucket: "second-semes-exam.appspot.com",
  messagingSenderId: "1041305954926",
  appId: "1:1041305954926:web:31d4dcfc0b316666bad47f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth provider
const provider = new GoogleAuthProvider();

const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged 
}