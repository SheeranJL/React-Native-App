import React from 'react';
import {Pressable, View, Text} from 'react-native';

const customButtonStyles = {

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  googleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: `rgba(${66}, ${133}, ${244}, ${1})`,
  },

}

//Our custom button which we will utilise for any forms/components which require it.
const CustomButton = ({children, isGoogleButton, onPress}) => {

  return (
    <View>
      <Pressable
        style={isGoogleButton ? customButtonStyles.googleButton : customButtonStyles.button}
        onPress={onPress}
        >
          <Text style={{color: 'white'}}>
            {children}
          </Text>
      </Pressable>
    </View>
  )

}

export default CustomButton;
