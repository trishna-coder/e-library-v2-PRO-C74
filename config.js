import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB7KqfdfmlWSKQqbcLtQmtyWoFqqTZg3FE",
  authDomain: "e-library-dbe9a.firebaseapp.com",
  projectId: "e-library-dbe9a",
  storageBucket: "e-library-dbe9a.appspot.com",
  messagingSenderId: "966490386919",
  appId: "1:966490386919:web:ad364e9558bd36b9fe8d42"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
