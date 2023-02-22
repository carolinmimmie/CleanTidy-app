// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaBgbMAmKyq7ymjVWVrekpQdeS1ec04aY",
  authDomain: "stadafint-df2de.firebaseapp.com",
  projectId: "stadafint-df2de",
  storageBucket: "stadafint-df2de.appspot.com",
  messagingSenderId: "755953243008",
  appId: "1:755953243008:web:3667cafaa68f95111ee765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);