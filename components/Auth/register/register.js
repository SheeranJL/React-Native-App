import {formStyles} from '../form-styles.js';
import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

//Importing reusable components//
import CustomButton from '../../reuseable/custom-button/custom-button.js';



//This is our Register An Account form - It will render should the 'loginWithExisting' state in the AuthScreen component is false//
const Register = ({changeLoginMethod, currentMethod}) => {

  //Local-state variables for capturaing form input//
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')


  return (
    <View style={formStyles.container}>

      <Text>Register a new account</Text>

      <Text>Display Name</Text>
      <TextInput
        value={displayName}
        onChangeText={setDisplayName}
        style={formStyles.input}
      />

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

      <Text>Confirm Password</Text>
      <TextInput
        value={confirmedPassword}
        onChangeText={setConfirmedPassword}
        style={formStyles.input}
        secureTextEntry={true}
      />

      <CustomButton>Sign Up!</CustomButton>
      
      <Text onClick={() => changeLoginMethod(!currentMethod)}> Already have an account? Sign in!</Text>

    </View>
  )
}

export default Register
