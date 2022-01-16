import react, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import {View, Text, Pressable} from 'react-native';
import {ImportContactStyles} from './import-contacts.styles.js';

import CustomButton from '../reuseable/custom-button/custom-button.js';


import * as Contacts from 'expo-contacts';



const ImportContacts = ({setNewContactModal}) => {

  //Importing context data and actions//
  const {data, actions} = useContext(appContext);

  //This function is called when the 'Grab my contacts' button is clicked. It will grab the users' contacts from their phone and store them in context state.
  const handleGetContacts = () => {
    (async () => {
        const {status} = await Contacts.requestPermissionsAsync();  //<-- send a permission request to access contact list and wait for a response.
        if (status === 'granted') {                                 //<-- if the user accepts, then the status variable on requestPermissionsAsync will be 'granted'.
          const {data} = await Contacts.getContactsAsync({          //<-- All collected address book data will be contained within the 'data' variable
          fields: [Contacts.Fields.PhoneNumbers],                   //<-- Collecting the PhoneNumber field from Contacts but this will also return the name of the contact.
        });
          if (data.length > 0) {                                    //<-- We want to make sure that the data variable (which is an array of data) actually contains more than one contact.
            const contact = [...data]
            actions.setPhoneContacts(contact);                      //<-- Saving the collected phonebook information to context state (phoneContacts). We will also be passing this data to firestore within context.
            setInitialLoad(false);                                  //<-- I decided to use a boolean value to prevent 'map is not a function' error in the render section below. This is akin to a loading state phase.
          }
        }
      })();
    };


  return (
    <View style={ImportContactStyles.containerStyles}>

      <Text style={ImportContactStyles.helloTextStyles}>Welcome!</Text>
      <Text style={ImportContactStyles.blurbTextStyles}>Let's start by importing your current contacts.</Text>
      <Pressable style={ImportContactStyles.buttonStyle} onPress={handleGetContacts}><Text>Grab my contacts</Text></Pressable>

    </View>
  )
}

export default ImportContacts;
