import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZLgiEKQ_irwtxyKdy0TKgbV2FXmFIyrQ",
  authDomain: "flashcard-saas-74ebe.firebaseapp.com",
  projectId: "flashcard-saas-74ebe",
  storageBucket: "flashcard-saas-74ebe.appspot.com",
  messagingSenderId: "110060897491",
  appId: "1:110060897491:web:2fe9b8e4e36eb822698026",
  measurementId: "G-7KL8JBXM5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;