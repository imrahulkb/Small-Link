
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBGYtp-qvxC3k31JLYCu_C9BJlEmDRt3qY",
    authDomain: "smallynk.firebaseapp.com",
    projectId: "smallynk",
    storageBucket: "smallynk.appspot.com",
    messagingSenderId: "881392005078",
    appId: "1:881392005078:web:a712290e30c8104bcc7e77",
    measurementId: "G-T4RNK119S9"
  };


  
const app=initializeApp(firebaseConfig);
  export default getFirestore(app);

