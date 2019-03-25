import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import * as firebase from 'firebase';
import Home from './screens/Admin/Home';
import DrawerNavigator from './navigation/Admin/DrawerNavigator';
import AppContainer from './screens/login/home';
import config from './config';
import {Permissions , Notifications } from 'expo';
import Profile from './screens/Admin/Profile';

export default class App extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  // componentDidMount(){
  //   this.registerForPushNotifications();
  // }
  //   registerForPushNotifications = async () => {
  //     //check for existing permission
  //     const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //     let finalStatus = status;

  //     // ask user for permission
  //     if (status !== 'granted') {
  //       const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //       finalStatus = status;
  //     }
  //     if(finalStatus !== 'granted'){ return; }

  //     //get notification token

  //     let token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);
  //   }
  
  render() {
    return (
      <View style ={styles.container}>

       
       
       {/* <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
        <DrawerNavigator />
     <AppContainer /> 
         
          */}
      <Profile />
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
