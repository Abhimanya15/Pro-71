import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBVAHc6rmK0E7dV9Q2bGbP11oeVfFf--fc",
  authDomain: "pro-71-f2179.firebaseapp.com",
  projectId: "pro-71-f2179",
  storageBucket: "pro-71-f2179.appspot.com",
  messagingSenderId: "319200126080",
  appId: "1:319200126080:web:e9472732a8f9df08927265"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
