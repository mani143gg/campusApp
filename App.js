import React from 'react';
import { StyleSheet, Text, View,StatusBar, ListView } from 'react-native';
import * as firebase from 'firebase';
import Home from './screens/Admin/Home';
import DrawerNavigator from './navigation/Admin/DrawerNavigator';
import ProfileNavigator from './navigation/Admin/ProfileNavigator';
import AppContainer from './screens/login/home'; //signup
import config from './config';
import {Permissions , Notifications } from 'expo';
import Profile from './screens/Admin/Profile';
import { Container, Content, Header, Input, Item, Button, Label, Icon, List, ListItem} from 'native-base';
import Form from './screens/Flatlist/FlatlistHome';   //flathome
import Todofirebase from './screens/Admin/Todo';
import CategoryNavigation from './screens/Branch/CategoryNavigation';
import Homepage from './screens/Home/Homepage';
import CategoryNav from './Admin/Branch/AdminCategory';


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






