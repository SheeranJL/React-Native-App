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
import ImportContacts from '../Import-contacts-screen/import-contacts.js';


//Importing plugin tool called 'Expo Contacts' to get phone contacts//
import * as Contacts from 'expo-contacts';
import CustomButton from '../reuseable/custom-button/custom-button.js';



const Home = () => {

  //Importing context data and actions//
  const {data, actions} = useContext(appContext);

  //Local state//
  const [initialLoad, setInitialLoad] = useState(true);
  const [newContactModal, setNewContactModal] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState(false);




  useEffect(() => {
    if (data.phoneContacts.length) {  // <-- If data is already loaded on page load, then render content//
      setInitialLoad(false);
    }
  }, [data.phoneContacts])



  return (

    //If newContactModal is true, meaning the 'create contact' button has been clicked,
    //then render the new contact screen. Else, render the main page with all the contacts.
    newContactModal
    ? (
      //Create contact modal component//
      <CreateContactModal setNewContactModal={setNewContactModal}/>
    ) : (
      <View style={{flex: 1}}>
        { data.phoneContacts.length && !initialLoad //If phoneContact context state is populated with data and the initial render local state is false, then render the 'import contacts' screen//
          ? (
              //If the information icon button is clicked, then render the moreInfoModal component, else render all the of the contexts
              moreInfoModal //<-- local state to track whether the 'more info' button has been clicked
              ? (
                <View style={{flex: 1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center', width: '100%', height: '100%', position: 'absolute', zIndex: 1000}}>
                  <ContactDetails contactData={moreInfoModal} toggleModal={setMoreInfoModal}/>
                </View>
              )
              : (
                <ScrollView>
                {data.phoneContacts.map((i, index) => <EachContact data={i} key={index} toggleMoreInfo={setMoreInfoModal}/>)}
                </ScrollView>
              )
        ) : (
            <ImportContacts /> //Is there is no contacts in the phoneContacts context state, then the 'import contacts' screen will load.
        )}
        <Header setNewContactModal={setNewContactModal}/>
      </View>

    )



  )
}


export default Home;
