//Importing firebase and it's tools//
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`) //obtain a reference to the currently logged in user by querying the firestore dbase with their unique id (uid) within the 'users' collection.
  const collectionRef = firestore.collection('users');   //obtain a reference to the collection within which all of our app users are stored.
  const snapshot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  if (!snapshot.exists) {                   //if snapshot returns false, then we know there isn't a user that exists within firestore against that ID therefore we will create an account.
    const {displayName, email} = userAuth;  //Stripping the displayName and email from userAuth (which comes from google Auth)
    const createdAt = new Date();           //Creating a timestamp for the creation of this new account

    try {
      await userRef.set({       //Here we're setting (creating) a new user within the 'users' collection in firestore using the unique UID as the users identifing document ID.
        user: {displayName, email, createdAt, ...additionalData },
        data: {}
      })
    } catch(error) {
      console.log('error creating new account', error)
    }
  }
  return userRef; //If the snapshot returns true, simply return the userRef of the authenticated user
}












firebase.initializeApp(config);                 //initialising firebase within our application
export const auth = firebase.auth();            //exporting the authentication method from firebase
export const firestore = firebase.firestore();  //exoporting firestore so we can perform crud operations for data within our appliation to and from firestore

//Google Sign In//
const provider = new firebase.auth.GoogleAuthProvider();;
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
