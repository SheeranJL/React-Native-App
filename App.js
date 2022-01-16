import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {Provider, appContext} from './context/context.js';
import {auth, createUserProfileDocument, getDataFromFirestore} from './firebase/firebase.js'

import Navigator from './Routes/app-stack.js';


import AuthScreen from './components/Auth/login-register';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Main app component//
const App = (props) => {


  const {data, actions} = useContext(appContext)


  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {  //Detect when there's a change in user auth from google auth Method (whether someone signed in/out).

      //if a user is active within google Auth, then we will create a new user document within firestore if that user doesn't exist yet then setting context currentUser with the users info//
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          actions.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data,
            userData: { displayName: userAuth.displayName,  email: userAuth.email}
          })
        })


        //on login, we will grab the authenticated users' contacts which have been saved from previous login sessions and then populate phoneContacts in context with this data//
        const onLoginData = async() => {
          const firestoreData = await getDataFromFirestore(userAuth.uid);
          if (firestoreData.data.length) {
            const data = firestoreData.data.map(item => item);
            actions.setPhoneContacts([...data])
          }
        }
        onLoginData();
      }

      actions.setCurrentUser(userAuth);
    })
  }, [])


  //Returning our Navigator which will allow us to hop around the different screens of our application as per the './Routes/app-stack.js' file//
  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  )

}





//Wrapping main app component with Context API//
const AppWithContext = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
export default AppWithContext;
