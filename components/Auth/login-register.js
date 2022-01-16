import React, {useState, useEffect, useContext} from 'react';
import {appContext} from '../../context/context.js';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';

import Login from './login/login.js'
import Register from './register/register.js';

const AuthScreenStyles = {
  authScreenStyle: { display: 'flex', alignItems: 'center', marginTop: 25 }
}


const AuthScreen = ({navigation}) => {

  //Importing context//
  const {data, actions} = useContext(appContext);

  //Local state to track which method a user is authenticating with (either existing account or registering)
  const [loginWithExisting, setLoginWithExisting] = useState(true);

  //If there is a current user who's signed in, then we will push them to the home screen where either they will need to import their contacts, or they will be shown all imported contacts or else they will be taken to Auth screen//
  useEffect(() => {
    if (data.currentUser) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('Auth')
      actions.setPhoneContacts([]); //<-- If a user isn't signed in, we want to ensure that context phone contacts are set to an empty array
    }
  }, [data.currentUser])

  return (
    <View style={AuthScreenStyles.authScreenStyle}>
      {
        loginWithExisting
        ? <Login changeLoginMethod={setLoginWithExisting} currentMethod={loginWithExisting}/>
        : <Register changeLoginMethod={setLoginWithExisting} currentMethod={loginWithExisting}/>
      }
    </View>
  )
}

export default AuthScreen;
