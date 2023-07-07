// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5RIsRB_XXWOOJEk5TUhmAAJe-pscyAkw",
  authDomain: "giveaway-2f20f.firebaseapp.com",
  projectId: "giveaway-2f20f",
  storageBucket: "giveaway-2f20f.appspot.com",
  messagingSenderId: "484811791339",
  appId: "1:484811791339:web:3d251e7d227ff0567cd7ae",
  measurementId: "G-3NWDLYF5LV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
// getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
getFirestore(app);
