import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyCr7pXG3DtMUgk4Nj0rUzFFIM8ExNMu31g",
    authDomain: "booksell-872c0.firebaseapp.com",
    projectId: "booksell-872c0",
    storageBucket: "booksell-872c0.appspot.com",
    messagingSenderId: "506265928125",
    appId: "1:506265928125:web:6cc9b6ddafc018fbd0d2d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const FBAuth = firebase.auth()
  export const FBFirestore = firebase.firestore()