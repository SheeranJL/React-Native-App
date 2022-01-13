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
const CustomButton = (props) => {

  console.log(props)

  return (
    <View>
      <Pressable style={props.isGoogleButton ? customButtonStyles.googleButton : customButtonStyles.button}>
        <Text style={{color: 'white'}}>{props.children}</Text>
      </Pressable>
    </View>
  )

}

export default CustomButton;
