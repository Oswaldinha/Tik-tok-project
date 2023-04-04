
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyB38sohunlTuQsIu0DDs-kMpU2G64lX3pI",
  authDomain: "tiktok---jornada-eed25.firebaseapp.com",
  projectId: "tiktok---jornada-eed25",
  storageBucket: "tiktok---jornada-eed25.appspot.com",
  messagingSenderId: "136118207808",
  appId: "1:136118207808:web:de6b6b6da23bc1e88da6a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app)

export default db;