// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBksy9d_bubW68L61QLlYnTJ8RjEIN8g0Q",
  authDomain: "sustain-co.firebaseapp.com",
  projectId: "sustain-co",
  storageBucket: "sustain-co.appspot.com",
  messagingSenderId: "494297090278",
  appId: "1:494297090278:web:a5e0e4fe75f5ff0ff75327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

