import {createContext, useEffect, useState} from 'react';
import {saveDataToFirebase} from '../firebase/firebase.js';

export const appContext = createContext();

export const Provider = (props) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [phoneContacts, setPhoneContacts] = useState([]);
  const [emailContacts, setEmailContacts] = useState([]);

  useEffect(() => {

    if (currentUser) {
      saveDataToFirebase(currentUser.id, phoneContacts)
    }

  }, [phoneContacts])


  return (
    <appContext.Provider value={{
      actions: {
        setPhoneContacts,
        setEmailContacts,
        setCurrentUser,
      },
      data: {
        phoneContacts,
        emailContacts,
        currentUser
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}
