import {formStyles} from '../form-styles.js';
import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js';

import {View, TextInput, Text, StyleSheet} from 'react-native';

import {signInWithGoogle} from '../../../firebase/firebase.js';
import {auth} from '../../../firebase/firebase.js';

import CustomButton from '../../reuseable/custom-button/custom-button.js';


const Login = ({changeLoginMethod, currentMethod}) => {

  //Import context//
  const {data, actions} = useContext(appContext);

  //Local state//
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authErrors, setAuthErrors] = useState(false);

  //This function will be called when Google Signin is pressed and will make an auth request to firebase Auth resulting in a popup window to authenticate with Google account.
  const handleGoogleSignIn = async() => {
    try {
      signInWithGoogle();
    } catch(error) {
      console.log('Error signing in with Google', error)
    }
  }


  //This function will sign user in via google auth and reset value fields//
  const handleSubmit = async(e) => {
    //If a user signs in manually with user/pass, we will make a request to firebase auth by passing the users email/password//
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setAuthErrors(false);
    } catch(error) {
      console.log('error signing in manually', error)
      setAuthErrors(true);
    }
  }


  return (
    <View style={formStyles.container}>

      <Text style={{paddingBottom: 30, fontWeight:'bold', fontSize: 18 }}>Sign in with an existing account</Text>

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={formStyles.input}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={formStyles.input}
        secureTextEntry={true}
      />
      {
        authErrors
        ? <Text style={formStyles.incorrectValidation}>Incorrect username or password</Text>
        : null
      }

      <View style={formStyles.signInButtons}>
        <CustomButton onPress={handleSubmit}>Log in</CustomButton>
        <CustomButton isGoogleButton onPress={signInWithGoogle}> Google </CustomButton>
      </View>

      <Text
        onPress={() => changeLoginMethod(!currentMethod)}
        style={{paddingTop: 25, fontWeight: 'bold'}}>
        Don't have an account? Create one!
      </Text>

    </View>
  )

}

export default Login;
