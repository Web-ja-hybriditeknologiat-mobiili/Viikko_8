
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore";

const firebaseConfig = {
    apiKey: " ",
    authDomain: "chat-46267.firebaseapp.com",
    projectId: "chat-46267",
    storageBucket: "chat-46267.appspot.com",
    messagingSenderId: "48547203100",
    appId: "1:48547203100:web:36c6c15f6fe28c873cf7d9"
  };

  initializeApp(firebaseConfig);
  const firestore = getFirestore();
  
  
  const MESSAGES = "messages";

  export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
  };

  
