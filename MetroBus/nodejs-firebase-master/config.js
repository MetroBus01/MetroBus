const firebase = require("firebase");
const {getDocs} = require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyCHciueOIaosoQi6gnksV3eQgKTd895GAI",
  authDomain: "thunder-e0a21.firebaseapp.com",
  projectId: "thunder-e0a21",
  storageBucket: "thunder-e0a21.appspot.com",
  messagingSenderId: "1030853771997",
  appId: "1:1030853771997:web:524869afbd1a1941589134",
  measurementId: "G-N1FPDQXWE0"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Count = db.collection("Counter");
module.exports = Count;