import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjYRupLxpYBWDO3cZB15XnipFZLblCrU0",
  authDomain: "react-notes-56d54.firebaseapp.com",
  projectId: "react-notes-56d54",
  storageBucket: "react-notes-56d54.appspot.com",
  messagingSenderId: "444243552615",
  appId: "1:444243552615:web:4ee15bb1c3e2f2201967c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
