import React from 'react';
import {Button, View} from 'react-native';

const CustomButton = (props) => {

  console.log(props);

  return (

    <Button
      title={props.children}
    />

  )
}

export default CustomButton;
