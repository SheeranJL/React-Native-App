import {headerStyles} from './app-stack.styles.js';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Text, View} from 'react-native';

//Importing context and firebase tools//
import {useContext} from 'react';
import {appContext} from '../context/context.js';
import {auth} from '../firebase/firebase.js';

//Importing our navigation screens//
import AuthScreen from '../components/Auth/login-register.js';
import Home from '../components/Home/home.js';




const screens = {
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Contacts',
      headerLeft: null,
      headerRight: () => (
        <View style={headerStyles.logoutTextContainer}>
          <Text
            style={headerStyles.logoutText}
            onPress={async() => {
              await auth.signOut();
            }}>
            Logout
          </Text>
        </View>
      )

    })
  }
}

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
