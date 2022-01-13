import {createContext, useEffect, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [phoneContacts, setPhoneContacts] = useState([]);
  const [emailContacts, setEmailContacts] = useState([]);

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
