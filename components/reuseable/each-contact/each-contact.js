import React from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import {contactStyles} from './each-contact-styles.js';

const EachContact = (props) => {

  console.log(props.data.phoneNumbers[0].number);

  return (

    <View style={contactStyles.contactContainer}>

      <View style={contactStyles.leftSideInfoContainer} >

        <View>
          <Text>Picture goes here</Text>
        </View>

        <View>
          <Text>{props.data.firstName}</Text>
          <Text>{props.data.phoneNumbers[0].number}</Text>
        </View>

      </View>





      <View style={contactStyles.informationSymbol}>
        <Text>&#x24D8;</Text>
      </View>

    </View>

  )
}

export default EachContact;
