// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOYodyCx1R5ekUONd41X7A4N9oX9xqUK8",
  authDomain: "note-app-f2981.firebaseapp.com",
  projectId: "note-app-f2981",
  storageBucket: "note-app-f2981.firebasestorage.app",
  messagingSenderId: "836066568064",
  appId: "1:836066568064:web:abe39eacd935d8a153c365",
  measurementId: "G-0Z44BMDYPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);