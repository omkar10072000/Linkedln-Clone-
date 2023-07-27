import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCeUNpMxuZP7Lup6qtpJDYpKAQ9h51HVF8",
    authDomain: "linkdin-clone-b659b.firebaseapp.com",
    projectId: "linkdin-clone-b659b",
    storageBucket: "linkdin-clone-b659b.appspot.com",
    messagingSenderId: "40360743365",
    appId: "1:40360743365:web:665581aa582dcaf218bbac"
  };

// Use this to initialize the firebase App
 
// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth,createUserWithEmailAndPassword};

// // Use these for db & auth
