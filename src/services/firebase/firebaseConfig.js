import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG8trUO2kXP-NFfbCdfEZuE9L1LFebWNw",
    authDomain: "ecommerce-playmania-da53f.firebaseapp.com",
    projectId: "ecommerce-playmania-da53f",
    storageBucket: "ecommerce-playmania-da53f.appspot.com",
    messagingSenderId: "264834879790",
    appId: "1:264834879790:web:6edbfce6a7b5293c60aabf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
