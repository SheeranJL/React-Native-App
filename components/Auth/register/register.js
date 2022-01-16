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
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = async() => {

    //Validating that displayName field, email field, and password field aren't blank
    if (!email || !password) {
      setValidationError(true); //<-- will cause a message to appear on user device prompting them to clean up any validation errors
      return;
    }

    //validating whether the password value maches the confirmed password value
    if (password !== confirmedPassword) {
      setValidationError(true); //<-- will cause a message to appear on user device prompting them to clean up any validation errors
      return;
    }

    //This code will create a new user in firebase using the entered email and password field. This will then trigger an auth state change in App.js and set the currentUser context state with that user//
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
      await createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
      setValidationError(false);
    } catch(error) {
      console.log('error signing up new user', error)
      setValidationError(true);
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
        placeholder='Required'
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={formStyles.input}
        secureTextEntry={true}
        placeholder='Required'
      />

      <Text>Confirm Password</Text>
      <TextInput
        value={confirmedPassword}
        onChangeText={setConfirmedPassword}
        style={formStyles.input}
        secureTextEntry={true}
        placeholder='Required'
      />

      {
        validationError
        ? <Text style={formStyles.incorrectValidation}>All fields must be entered correctly, and both passwords must match.</Text>
        : null
      }
      <CustomButton onPress={handleSubmit}>Sign Up!</CustomButton>

      <Text
        onPress={() => changeLoginMethod(!currentMethod)}
        style={{paddingTop: 25, fontWeight: 'bold'}}>
        Already have an account? Sign in!
      </Text>

    </View>
  )
}

export default Register
