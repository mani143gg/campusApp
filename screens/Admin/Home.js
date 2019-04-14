import React from 'react';
import { StyleSheet, Text, View  ,StatusBar,Button} from 'react-native';
import { Permissions, Notifications } from 'expo';
import MenuButton from '../../components/MenuButton';
import firebase from '../../config';

export default class Home extends React.Component {


registerForPushNotificationsAsync = async() => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS); 
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

try {
   let token = await Notifications.getExpoPushTokenAsync(); 

  // Get the token that uniquely identifies this device
 
  // POST the token to your backend server from where you can retrieve it to send push notifications.
  firebase.database().ref('Student/'+this.currentUser.uid+'/push_token')
  .set(token)
  } 
catch (error) {
  console.log(error);
  }
};


async componentDidMount() {
  this.currentUser = await firebase.auth().currentUser
  await this.registerForPushNotificationsAsync();
}

  render() {
    return (
      <View >
        <StatusBar
        backgroundColor="#16a085"/>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.container}>
        
         <Text>done </Text>
         <Button
        title="Sign out"
        onPress={() => firebase.auth().signOut()} 
        />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 70,
  },
});
