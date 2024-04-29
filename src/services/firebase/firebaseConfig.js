import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8wgpMJMVE6rxwBibmX3eBEVyUAl-AxMc",
    authDomain: "e-commerce-playmania-d356d.firebaseapp.com",
    projectId: "e-commerce-playmania-d356d",
    storageBucket: "e-commerce-playmania-d356d.appspot.com",
    messagingSenderId: "729383451172",
    appId: "1:729383451172:web:8efa67b54e4d460652f6b1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
