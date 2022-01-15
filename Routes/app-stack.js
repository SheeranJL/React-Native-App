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



//This screens object contains all of our views for the application.
const screens = {

  //This is for our authentication screen which will be the first screen the user sees//
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      title: 'Welcome' //<-- Set the title as 'Wecome' at the top of the page
    }
  },


  //This screen is for our home page which contains most of our application including the contacts list//
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Contacts',
      headerLeft: null,     //<-- setting left header to null (The left header was a 'back' nav button however we don't want this as it would redirect user to auth screen even after logging in.)
      headerRight: () => (  //<-- Setting the right header to a 'logout' button which will remove the user from 'currentUser' global context state.
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
