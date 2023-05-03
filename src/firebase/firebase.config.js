// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCbhyDEkVoZy7cy_nLsI7AxYzuwREoBYlg",
      authDomain: "food-hub-bd.firebaseapp.com",
      projectId: "food-hub-bd",
      storageBucket: "food-hub-bd.appspot.com",
      messagingSenderId: "486062544843",
      appId: "1:486062544843:web:03a6b3ecbe8b6b0aaa884e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;