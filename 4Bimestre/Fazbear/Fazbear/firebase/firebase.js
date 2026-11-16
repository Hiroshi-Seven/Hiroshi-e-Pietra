
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd61i48uDH82WzaGtFmT4Y0_ZRFo58MVA",
  authDomain: "fnaf-bd6ff.firebaseapp.com",
  projectId: "fnaf-bd6ff",
  storageBucket: "fnaf-bd6ff.firebasestorage.app",
  messagingSenderId: "637540661846",
  appId: "1:637540661846:web:584249bd1c126552bc59f7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);