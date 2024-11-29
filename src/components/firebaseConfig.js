// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Firebase configuration for your web app
const firebaseConfig = {
  apiKey: "AIzaSyBPC3eojJtW60Jj47wAp2gAlCdyLO76Hhk",
  authDomain: "credit-235dd.firebaseapp.com",
  projectId: "credit-235dd",
  storageBucket: "credit-235dd.firebasestorage.app",
  messagingSenderId: "1068587415705",
  appId: "1:1068587415705:web:1140d97921ad2f742c6008",
  measurementId: "G-XQWWVH1R7Z"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

// Export the instances
export { auth, database }; 
export default app; // Default export for Firebase app instance
