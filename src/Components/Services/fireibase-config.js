import {getFirestore}from '@firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig ={
  apiKey: "AIzaSyBWnCmf4F5ZAKoW-zOr7iSgmH4_q5eh43w",
  authDomain: "formcontrol-79762.firebaseapp.com",
  projectId: "formcontrol-79762",
  
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

 export const db = getFirestore(app)
