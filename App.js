import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import * as firebase from 'firebase';
import Home from './screens/Admin/Home';

import DrawerNavigator from './navigation/Admin/DrawerNavigator';
import ProfileNavigator from './navigation/Admin/ProfileNavigator';

import AppContainer from './screens/login/home';
import config from './config';
import {Permissions , Notifications } from 'expo';
import Profile from './screens/Admin/Profile';
import { Item,Label,Input,Button} from 'native-base';
import RNOneSignal from './index'
export default class App extends React.Component {


  render() {
    return (
      <View style ={styles.container}>

       
       
       {/* <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
       
       <DrawerNavigator />
        
          */}
          <AppContainer />             
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  }, 
});
