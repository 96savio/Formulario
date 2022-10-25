import {getFirestore}from '@firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig ={
  apiKey: "#dados key",
  authDomain: "# ",
  projectId: "#",
  
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

 export const db = getFirestore(app)
