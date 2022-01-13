import {StyleSheet} from 'react-native';

export const formStyles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  input: {
    height: 40,
    width: 200,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },

  signInButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});
