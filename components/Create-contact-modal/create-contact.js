import React, {useState, useContext} from 'react';
import {appContext} from '../../context/context.js';
import {View, Text, TextInput, Pressable} from 'react-native';
import {createContactModal} from './create-contact.styles.js';


//Importing components//
import CustomButton from '../reuseable/custom-button/custom-button.js';

const CreateContactModal = ({setNewContactModal}) => {

  const {data, actions} = useContext(appContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [validationErrors, setValidationErrors] = useState(false);

  //Function to handle modal close on X click - this will close the modal and reset all field values//
  const handleCancel = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setNewContactModal(false);
    console.log('pressed')
  }



  const handleSubmit = () => {

    // If no first name, or phone number is entered, then show a message explaining that these are required fields //
    if (!firstName && !phone) {
      setValidationErrors(true);
      return
    };


    const randomIDGenerator = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6); //Generate random string value for the newly created contact.
    actions.setPhoneContacts([
      ...data.phoneContacts,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        notes: notes,
        id: randomIDGenerator,
        phoneNumbers: [{number: phone}]
      },
    ]),
    setNewContactModal(false);  // Closing new contact modal
    setValidationErrors(false); // Setting validation boolean state back to false
  }



  return (
    <View style={createContactModal.modalContainer}>

      <Text style={{fontSize: 18, fontWeight: 'bold', paddingTop: '5%'}}> New contact </Text>

        <View style={createContactModal.informationContainer}>

          <View style={createContactModal.informationInputContainer}>
            <View style={createContactModal.contactName}>
              <Text>First name</Text>
            </View>
            <View style={createContactModal.contactInformation}>
              <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder='Required'/>
            </View>
          </View>

          <View style={createContactModal.informationInputContainer}>
            <View style={createContactModal.contactName}>
              <Text>Last name</Text>
            </View>
            <View style={createContactModal.contactInformation}>
              <TextInput
              value={lastName}
              onChangeText={setLastName}/>
            </View>
          </View>

          <View style={createContactModal.informationInputContainer}>
            <View style={createContactModal.contactName}>
              <Text>Email</Text>
            </View>
            <View style={createContactModal.contactInformation}>
              <TextInput
                value={email}
                onChangeText={setEmail}/>
            </View>
          </View>

          <View style={createContactModal.informationInputContainer}>
            <View style={createContactModal.contactName}>
              <Text>Phone</Text>
            </View>
            <View style={createContactModal.contactInformation}>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder='Required'/>
            </View>
          </View>

          <View style={createContactModal.informationInputContainer}>
            <View style={createContactModal.contactName}>
              <Text>Notes</Text>
            </View>
            <View style={createContactModal.contactInformation}>
              <TextInput
                value={notes}
                onChangeText={setNotes}/>
            </View>
          </View>

          {
            validationErrors
            ? <Text style={{textAlign: 'center', marginTop: 40, color: 'red', fontWeight: 'bold'}}> First name and phone number are required </Text>
            : null
          }
        </View>


        <View style={createContactModal.buttonsContainer}>

          <Pressable
            style={createContactModal.buttonCancel}
            onPress={handleCancel}>
            <Text>Cancel</Text>
          </Pressable>

          <Pressable
            style={createContactModal.buttonSave}
            onPress={handleSubmit}>
            <Text>Save</Text>
          </Pressable>

        </View>
    </View>
  )

}

export default CreateContactModal;
