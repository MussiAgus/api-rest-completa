import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlj3SyqOnzLWZyOd3qzqMDtUItZui5cFE",
  authDomain: "api-rest-tienda.firebaseapp.com",
  projectId: "api-rest-tienda",
  storageBucket: "api-rest-tienda.firebasestorage.app",
  messagingSenderId: "1018113407324",
  appId: "1:1018113407324:web:7a64f87c3d9dc9bb64e999"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };