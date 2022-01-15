import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width - 50;
const height = Dimensions.get('window').height - 63;

export const createContactModal = StyleSheet.create({

  modalContainer: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    minWidth: width,
    height: height,
  },

  informationContainer: {
    width: width,
    marginTop: '10%',
  },

  informationInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%'
  },

  contactName: {
    width: '25%',
    marginRight: 10,
  },

  contactInformation: {
    width: '70%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },


  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-around',
    width: '100%',
  },

  buttonSave: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80aaff',
    paddingVertical: 10.4,
    paddingHorizontal: 32,
    elevation: 3,
  },

  buttonCancel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80aaff',
    paddingVertical: 10.4,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'red',
  }



})
