import React from 'react';
import { Platform , Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Profile from '../../screens/Admin/Profile';
import editProfile from '../../screens/Admin/editProfile';



const App = createStackNavigator({
  
  Profile : { screen : Profile},
  editProfile: { screen: editProfile },
  
});

export default createAppContainer(App);