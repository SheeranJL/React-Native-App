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

  //Function to handle modal close on X click.
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

    if (!firstName && !phone) {
      console.log('no name or phone')
      return
    };


    const randomIDGenerator = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
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

    setNewContactModal(false);
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
                onChangeText={setFirstName}/>
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
                onChangeText={setPhone}/>
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
