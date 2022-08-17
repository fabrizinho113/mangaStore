// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-J6Swt3fwILFenr4lNc2vs1hoWPXFWDQ",
  authDomain: "mangastore-5d929.firebaseapp.com",
  projectId: "mangastore-5d929",
  storageBucket: "mangastore-5d929.appspot.com",
  messagingSenderId: "890996518052",
  appId: "1:890996518052:web:2a4f5d2edd2106f7c84a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db