import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {HeaderStyles} from './header-styles.js';

import CustomButton from '../../reuseable/custom-button/custom-button.js';

const Header = ({setNewContactModal}) => {

  //Opens up create contact modal when clicked by changing setToggleModal state in the Home component//
  const handleClick = () => {
    setNewContactModal(true)
  }

  return (
    <View style={HeaderStyles.headerContainer}>

      <Pressable
        onPress={handleClick}
        style={HeaderStyles.button}>
        <Text style={HeaderStyles.buttonText}>
          Create new contact
        </Text>
      </Pressable>

    </View>
  )
}

export default Header;
