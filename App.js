import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import {Provider, appContext} from './context/context.js';

// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

import AuthScreen from './components/Auth/login-register';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//Main app component//
const App = () => {

  const {data, actions} = useContext(appContext)

  return (
    <View>
      <AuthScreen />
    </View>
  )
}









//Wrapping main app component with Context API//
const AppWithContext = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
export default AppWithContext;
