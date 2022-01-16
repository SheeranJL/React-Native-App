import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {contactStyles} from './each-contact-styles.js';

const EachContact = (props) => {

  //Populate the 'more info' state with the information from the contact which has been clicked//
  //This changes the state to true, and then passes the popup modal with the relevant information to populate the fields//
  const handleToggle = () => {
    props.toggleMoreInfo(props.data);
  }


  return (

    <View style={contactStyles.contactContainer}>

      <View style={contactStyles.leftSideInfoContainer} >
        <View>
          <Image style={contactStyles.profilePic} source={{uri:'https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok='}}/>
        </View>

        <View style={contactStyles.leftSideNameAndNumber}>
          <Text>{`${props.data.firstName} ${props.data.lastName || ''}`}</Text>
          <Text>{props.data.phoneNumbers[0].number}</Text>
        </View>
      </View>

      <View style={contactStyles.informationSymbol}>
        <Text onPress={handleToggle} style={{fontSize: 24}}>&#x24D8;</Text>
      </View>

    </View>

  )
}

export default EachContact;
