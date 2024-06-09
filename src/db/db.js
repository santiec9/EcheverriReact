import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL1F2yPFW_9W6IOBsmsJRUAZSadugbANo",
  authDomain: "echeverricoder.firebaseapp.com",
  projectId: "echeverricoder",
  storageBucket: "echeverricoder.appspot.com",
  messagingSenderId: "376484107748",
  appId: "1:376484107748:web:a963f85557dc6001cbe3f1"
};


initializeApp(firebaseConfig);

const db = getFirestore();
export default db