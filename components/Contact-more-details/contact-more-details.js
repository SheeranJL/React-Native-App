import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import {View, Text, Pressable, Modal, Image} from 'react-native';
import {ContactDetailStyles} from './contact-more-details.styles.js';

const ContactDetails = ({contactData, toggleModal}) => {

  //Importing context//
  const {data, actions} = useContext(appContext);


  //This function is triggered when the close 'X' button is pressed and will close the modal, returning to the main page//
  const handleCloseModal = () => {
    toggleModal(false);
  }


  //This function will delete the targeted contact by first filtering through the current contacts and updating context phoneContacts with the new array//
  const handleDelete = () => {
    const filterThroughContextData = data.phoneContacts.filter(item => item.id !== contactData.id);
    actions.setPhoneContacts([...filterThroughContextData])
    toggleModal(false); //<-- after deletion we want to close the modal to return to the main screen with all the contacts
  }


  return (
    <Modal style={ContactDetailStyles.contactDetailsModalContainer}>

    <Text
      onPress={handleCloseModal}
      style={ContactDetailStyles.modalCloseButton}>
      ×
    </Text>

      <View style={{minWidth: 160}}>
        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 100}} source={{uri:'https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok='}}/>

        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', marginBottom:5, marginTop: 20}}>
          {`${contactData.firstName} ${contactData.lastName || ''}`}
        </Text>


        <View style={ContactDetailStyles.numberContainer}>
          <Text style={ContactDetailStyles.numberContent}>Number</Text>
          <Text>{contactData.phoneNumbers[0].number}</Text>
        </View>

        <View style={ContactDetailStyles.emailAndNotesContainer}>
          <Text style={ContactDetailStyles.emailAndNotesContent}>Email</Text>
          <Text>{contactData.email || '-'}</Text>
        </View>

        <View style={ContactDetailStyles.emailAndNotesContainer}>
          <Text style={ContactDetailStyles.emailAndNotesContent}>Notes</Text>
          <Text>{contactData.notes || 'none'}</Text>
        </View>

        <Pressable
          style={ContactDetailStyles.deleteButton}
          onPress={handleDelete}>
          <Text>Delete</Text>
        </Pressable>

      </View>
    </Modal>
  )
}

export default ContactDetails;
