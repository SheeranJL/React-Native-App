import {createContext, useEffect, useState} from 'react';
import {saveDataToFirebase} from '../firebase/firebase.js';

export const appContext = createContext();

export const Provider = (props) => {

  const [currentUser, setCurrentUser] = useState(null)    //State for currently loggon on user ~ either null, or an object containing user details
  const [phoneContacts, setPhoneContacts] = useState([]); //State containing the extracted data from users' phone book.


  //Whenever the phoneContact list updates, and a user is currently authenticated, then we will update Firestore with this information//
  useEffect(() => {
    if (currentUser) {
      saveDataToFirebase(currentUser.id, phoneContacts)
    }

  }, [phoneContacts])


  return (
    <appContext.Provider value={{
      actions: {
        setPhoneContacts,
        setCurrentUser,
      },
      data: {
        phoneContacts,
        currentUser
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}
