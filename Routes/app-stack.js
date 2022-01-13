import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import AuthScreen from '../components/Auth/login-register.js';
import Home from '../components/Home/home.js';

const screens = {
  Auth: {
    screen: AuthScreen
  },
  Home: {
    screen: Home
  }
}

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);
