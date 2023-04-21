import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBmL5gMAl-crTmvyac9GWvk1IxVr2B5WDQ",
  authDomain: "chat-88def.firebaseapp.com",
  projectId: "chat-88def",
  storageBucket: "chat-88def.appspot.com",
  messagingSenderId: "851078910462",
  appId: "1:851078910462:web:c9a2059a846e27681270af",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;
