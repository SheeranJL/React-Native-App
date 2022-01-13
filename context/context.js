import {createContext, useEffect, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [test, setTest] = useState('test');

  return (
    <appContext.Provider value={{
      actions: {
        setTest
      },
      data: {
        test
      }
    }}>
      {props.children}
    </appContext.Provider>
  )

}
