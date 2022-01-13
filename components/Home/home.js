import React, {useContext} from 'react';
import {View, TextInput, Text, StyleSheet, } from 'react-native';
import {auth} from '../../firebase/firebase.js';

import CustomButton from '../reuseable/custom-button/custom-button.js';

const Home = () => {

  const handleSignOut = () => {
    auth.signOut();
  }

  return (
    <View >
      <Text>Hello!</Text>
      <CustomButton onPress={handleSignOut}> Log out </CustomButton>
    </View>
  )
}

export default Home;
