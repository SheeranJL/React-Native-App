import {formStyles} from '../form-styles.js';
import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {auth, createUserProfileDocument} from '../../../firebase/firebase.js';

//Importing reusable components//
import CustomButton from '../../reuseable/custom-button/custom-button.js';



//This is our Register An Account form - It will render should the 'loginWithExisting' state in the AuthScreen component is false//
const Register = ({changeLoginMethod, currentMethod}, props) => {

  //Local-state variables for capturaing form input//
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      await createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
    } catch(error) {
      console.log('error signing up new user', error)
    }
  }


  return (
    <View style={formStyles.container}>

      <Text style={{paddingBottom: 30, fontWeight:'bold', fontSize: 18 }}>Register a new account</Text>

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

      <CustomButton onPress={handleSubmit}>Sign Up!</CustomButton>

      <Text
        onPress={() => changeLoginMethod(!currentMethod)}
        style={{paddingTop: 25}}>
        Already have an account? Sign in!
      </Text>

    </View>
  )
}

export default Register
