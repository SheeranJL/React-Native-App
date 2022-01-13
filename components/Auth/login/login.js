import {formStyles} from '../form-styles.js';
import React, {useState, useContext} from 'react';

import {View, TextInput, Text, StyleSheet} from 'react-native';


import CustomButton from '../../reuseable/custom-button/custom-button.js';

const Login = ({changeLoginMethod, currentMethod}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={formStyles.container}>

      <Text>Sign in with an existing account</Text>

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

      <CustomButton>Log in</CustomButton>

      <Text onClick={() => changeLoginMethod(!currentMethod)}>Don't have an account? Create one!</Text>

    </View>
  )

}

export default Login;