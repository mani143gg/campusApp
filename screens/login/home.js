import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import config from '../../config';
import Loading from './Loading';
import SignUp from './signUp'
import login from './login'
import Main from './main'
import CategoryNavigation from '../Branch/CategoryNavigation';

import DrawerNavigator from '../../navigation/Admin/DrawerNavigator'

const App = createSwitchNavigator(
  {
    Loading:{screen:Loading},
    SignUp: {screen: SignUp},
    login: {screen: login},
    Main: {screen : Main},
    DrawerNavigator : {screen: DrawerNavigator},
    CategoryNavigation : { screen : CategoryNavigation }
  },
  {
    initialRouteName: 'login'
  }
);
const AppContainer = createAppContainer(App);   
export default AppContainer