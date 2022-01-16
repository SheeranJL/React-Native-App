import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

// const width = Dimensions.get('window').width / 2;

export const ContactDetailStyles = StyleSheet.create({

  contactDetailsModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    height: '10%',
    paddingHorizontal: 60,
  },

  modalCloseButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 15,
    marginTop: 15,
    color: 'red',
    fontSize: 40
  },

  deleteButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 45,
    marginBottom: 5,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 5,
    width: 150,
  },

  numberContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },

  numberContent: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    fontSize: 18,
  },

  emailAndNotesContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },

  emailAndNotesContent: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 5,
  },

})
