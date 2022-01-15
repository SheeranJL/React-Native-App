import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {ContactDetailStyles} from './contact-more-details.styles.js';

const ContactDetails = ({data, toggleModal}) => {

  console.log(data);

  const handleCloseModal = () => {
    toggleModal(false);
  }

  return (
    <View style={ContactDetailStyles.contactDetailsModalContainer}>

      <Text
        onPress={handleCloseModal}
        style={ContactDetailStyles.modalCloseButton}>
        ×
      </Text>

      <Text>{`${data.firstName} ${data.lastName || ''}`}</Text>


      <View>
        <Text>Number</Text>
        <Text>{data.phoneNumbers[0].number}</Text>
      </View>

      <View>
        <Text>Notes</Text>
        <Text>{data.notes || 'none'}</Text>
      </View>

      <Pressable style={ContactDetailStyles.deleteButton}>
        <Text>Delete</Text>
      </Pressable>

    </View>
  )

}

export default ContactDetails;
