import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDN2NP81-JdPmkPJTDHP7NG0JygC3rQ3h8",
    authDomain: "project-bf17e.firebaseapp.com",
    databaseURL: "https://project-bf17e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-bf17e",
    storageBucket: "project-bf17e.appspot.com",
    messagingSenderId: "429145643040",
    appId: "1:429145643040:web:6c002912850e00251d0445"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)