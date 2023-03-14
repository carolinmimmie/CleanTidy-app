import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//Här är Gustavs

const firebaseConfig = {
  apiKey: "AIzaSyDaBgbMAmKyq7ymjVWVrekpQdeS1ec04aY",
  authDomain: "stadafint-df2de.firebaseapp.com",
  projectId: "stadafint-df2de",
  storageBucket: "stadafint-df2de.appspot.com",
  messagingSenderId: "755953243008",
  appId: "1:755953243008:web:3667cafaa68f95111ee765",
};

//Här är Oskars

// const firebaseConfig = {
//   apiKey: "AIzaSyDylpkZWTjJ_7Mir1CktAi08V3ylt1MC28",
//   authDomain: "stadafint-27369.firebaseapp.com",
//   projectId: "stadafint-27369",
//   storageBucket: "stadafint-27369.appspot.com",
//   messagingSenderId: "508641367614",
//   appId: "1:508641367614:web:e2c56afa6d1a8542a7e36f",
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
