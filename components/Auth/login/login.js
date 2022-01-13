import {formStyles} from '../form-styles.js';
import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import CustomButton from '../../reuseable/custom-button/custom-button.js';
import {signInWithGoogle} from '../../../firebase/firebase.js';
import {auth} from '../../../firebase/firebase.js';



const Login = ({changeLoginMethod, currentMethod}) => {

  const {data, actions} = useContext(appContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGoogleSignIn = async() => {
    try {
      signInWithGoogle();
    } catch(error) {
      console.log('Error signing in with Google', error)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('called');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch(error) {
      console.log('error signing in manually', error)
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

      <View style={formStyles.signInButtons}>
        <CustomButton onPress={handleSubmit}>Log in</CustomButton>
        <CustomButton isGoogleButton onPress={signInWithGoogle}> Google </CustomButton>
      </View>

      <Text
        onPress={() => changeLoginMethod(!currentMethod)}
        style={{paddingTop: 25}}>
        Don't have an account? Create one!
      </Text>

    </View>
  )

}

export default Login;
