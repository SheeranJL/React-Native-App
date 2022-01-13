import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import {Provider, appContext} from './context/context.js';
import {auth, createUserProfileDocument} from './firebase/firebase.js'

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

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {phoneContacts: data.phoneContacts, emailContacts: data.emailContacts});
        userRef.onSnapshot(snapshot => {
          actions.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data,
            userData: { displayName: userAuth.displayName,  email: userAuth.email}
          })
        })

      }

      actions.setCurrentUser();
    })
  }, [])



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
