import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line!

const firebaseConfig = {
  apiKey: "AIzaSyDOYodyCx1R5ekUOND41X7A4N9oX9xqUK8",
  authDomain: "note-app-f2981.firebaseapp.com",
  projectId: "note-app-f2981",
  storageBucket: "note-app-f2981.appspot.com",
  messagingSenderId: "836066568064",
  appId: "1:836066568064:web:abe39eacd935d8a153c365",
  measurementId: "G-0Z44BMDYPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database so App.js can use it
export const db = getFirestore(app);