//Importing firebase and it's tools//
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

//Firebase configuration settings//
const config = {
  apiKey: "AIzaSyBYeoPqDEoW2Kxfykv8mcU6sqnlqnfvLts",
  authDomain: "react-native-project-97841.firebaseapp.com",
  projectId: "react-native-project-97841",
  storageBucket: "react-native-project-97841.appspot.com",
  messagingSenderId: "134672779276",
  appId: "1:134672779276:web:716d40532f0d1e1a068629",
  measurementId: "G-01XPZCPCMH"
};



firebase.initializeApp(config);                 //initialising firebase within our application
export const auth = firebase.auth();            //exporting the authentication method from firebase
export const firestore = firebase.firestore();  //exoporting firestore so we can perform crud operations for data within our appliation to and from firestore

//Google Sign In//
const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
