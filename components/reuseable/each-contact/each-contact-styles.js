import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width - 20; //full width minus 20 for the margin
const height = Dimensions.get('window').height;    //full height

export const contactStyles = StyleSheet.create({

  contactContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 10,
    backgroundColor: `rgba(${255}, ${255}, ${255}, ${1})`,
    minWidth: width,
    alignItems: 'center',
  },

  leftSideInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  leftSideNameAndNumber: {
    marginLeft: 10,
  },

  informationSymbol: {
    marginLeft: 'auto',
    marginRight: 10,
    fontSize: 40,
  },



});
