import React, {useState, useEffect} from 'react';
import {appContext} from '../../context/context.js';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';

import Login from './login/login.js'
import Register from './register/register.js';

const AuthScreenStyles = {

  authScreenStyle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25
  }
}


const AuthScreen = () => {

  const [loginWithExisting, setLoginWithExisting] = useState(true);

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
