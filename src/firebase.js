// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // apiKey: "AIzaSyDv6u43Sxsi6M918X5FFZMiyTNWs5WCyQk",
  authDomain: "developer-blog-32480.firebaseapp.com",
  projectId: "developer-blog-32480",
  storageBucket: "developer-blog-32480.firebasestorage.app",
  messagingSenderId: "761263680550",
  appId: "1:761263680550:web:224b2b8fbad7b263d40ae7",
  measurementId: "G-DDDK4SWT81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);