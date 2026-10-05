// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestrore';


const firebaseConfig = {
  apiKey: "AIzaSyD9zKmu-_8trILpBpisR60v6h2Usr0eW3Q",
  authDomain: "umamusumetexst.firebaseapp.com",
  projectId: "umamusumetexst",
  storageBucket: "umamusumetexst.firebasestorage.app",
  messagingSenderId: "441148773179",
  appId: "1:441148773179:web:386cfd8aa7db1b81d0dd1e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);