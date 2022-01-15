import {StyleSheet} from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;

export const HeaderStyles = StyleSheet.create({

  headerContainer: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: width,
  },

  button: {
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80aaff',
    paddingVertical: 10.4,
    paddingHorizontal: 32,
    elevation: 3,
  },

  buttonText: {
    textAlign: 'center',
  }

})
