import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYc6itjq9sgWd6RqdUHlnEYRXlGc-fYww",
  authDomain: "trello-job-preview.firebaseapp.com",
  databaseURL: "https://trello-job-preview.firebaseio.com",
  projectId: "trello-job-preview",
  storageBucket: "trello-job-preview.appspot.com",
  messagingSenderId: "265524843359",
  appId: "1:265524843359:web:e4905bb5f67e17504adcea",
  measurementId: "G-N4QSS75BSR",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
