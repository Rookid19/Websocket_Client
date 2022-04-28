const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
   apiKey: "AIzaSyCiW-WH8fLsrZbJ35qE03AlIf436IPeEGw",
   authDomain: "stocks-c2ef1.firebaseapp.com",
   projectId: "stocks-c2ef1",
   storageBucket: "stocks-c2ef1.appspot.com",
   messagingSenderId: "259389775811",
   appId: "1:259389775811:web:5356950768c3a089be2776",
   measurementId: "G-TVH7HBTB0B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

exports.db = db;
