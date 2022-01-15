import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../context/context.js';
import {View, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import {auth} from '../../firebase/firebase.js';
import {HomeContainerStyles} from './home-styles.js';

//Importing components//
import EachContact from '../reuseable/each-contact/each-contact.js';
import Header from './header/header.js';
import CreateContactModal from '../Create-contact-modal/create-contact.js';
import ContactDetails from '../Contact-more-details/contact-more-details.js';


//Importing plugin tool called 'Expo Contacts' to get phone contacts//
import * as Contacts from 'expo-contacts';
import CustomButton from '../reuseable/custom-button/custom-button.js';



const Home = () => {

  const {data, actions} = useContext(appContext);
  const [initialLoad, setInitialLoad] = useState(true);

  const [newContactModal, setNewContactModal] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState(false);



  //If data is already loaded on page load, then render content//
  useEffect(() => {
    if (data.phoneContacts.length) {
      setInitialLoad(false);
      console.log('test')
    }
  }, [data.phoneContacts])


  //This function will reach into the users address book and obtain a list of all contacts//
  //Here we're using the 'Expo Contacts' tool//
  const handleGetContacts = () => {
    (async () => {
      const {status} = await Contacts.requestPermissionsAsync();  //<-- send a permission request to access contact list and wait for a response.

      if (status === 'granted') {                           //<-- if the user accepts, then the status variable on requestPermissionsAsync will be 'granted'.
        const {data} = await Contacts.getContactsAsync({    //<-- All collected address book data will be contained within the 'data' variable
          fields: [Contacts.Fields.PhoneNumbers],           //<-- Collecting the PhoneNumber field from Contacts but this will also return the name of the contact.
        });

        if (data.length > 0) {                              //<-- We want to make sure that the data variable (which is an array of data) actually contains more than one contact.
          const contact = [...data]
          actions.setPhoneContacts(contact);                //<-- Saving the collected phonebook information to context state (phoneContacts). We will also be passing this data to firestore within context.
          setInitialLoad(false);                            //<-- I decided to use a boolean value to prevent 'map is not a function' error in the render section below. This is akin to a loading state phase.
        }
      }
      console.log(data.phoneContacts)
    })();
  };

  console.log(moreInfoModal);


  return (
    !newContactModal ?
    (
      <View style={HomeContainerStyles.container}>
        <ScrollView>
        {
          data.phoneContacts.length && !initialLoad

            ? (
              <View style={{width: '100%'}}>
                {
                  moreInfoModal
                  ? (
                    <View style={{flex: 1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center', width: '100%', height: '100%', position: 'absolute', zIndex: 1000}}>
                      <ContactDetails data={moreInfoModal} toggleModal={setMoreInfoModal}/>
                    </View>
                  )
                  : null
                }
                {data.phoneContacts.map((i, index) => <EachContact data={i} key={index} toggleMoreInfo={setMoreInfoModal}/>)}
              </View>
            ) : (
              <View>
                <Text>Hello! Let's get started by importing your contact list.</Text>
                <CustomButton onPress={handleGetContacts}> Grab my contacts </CustomButton>
              </View>
            )
        }
        </ScrollView>
        <Header setNewContactModal={setNewContactModal}/>
      </View>

    ) : (

      <View>
        <CreateContactModal setNewContactModal={setNewContactModal}/>
      </View>

    )

  )
}


export default Home;
