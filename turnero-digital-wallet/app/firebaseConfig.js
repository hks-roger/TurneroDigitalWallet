
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpHTXChl90rxCruQdVTKw9RmmabH8pMqM",
  authDomain: "web3-crypturn-4b348.firebaseapp.com",
  projectId: "web3-crypturn-4b348",
  storageBucket: "web3-crypturn-4b348.appspot.com",
  messagingSenderId: "99550773435",
  appId: "1:99550773435:web:267e2fce2cd10af028299e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};