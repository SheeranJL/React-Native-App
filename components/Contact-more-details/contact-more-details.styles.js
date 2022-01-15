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
    height: '20%',
  },

  modalCloseButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 15,
    marginTop: 5,
    color: 'red',
    fontSize: 24
  },

  deleteButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
    width: 80,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 5
  }

})
