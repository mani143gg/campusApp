import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import DrawerNavigator from '../../navigation/Admin/DrawerNavigator';
export default class Main extends React.Component {
  
  //   state = { currentUser: null }
  //   componentDidMount() {
  //     const { currentUser } = firebase.auth()
  //     this.setState({ currentUser })
  // }
  render() {
      // const {currentUser}= this.state
return (
      <View style={styles.container}>
        {/* <Text>
          Hi {currentUser && currentUser.email}!
        </Text> */}
        <DrawerNavigator />
        <View>
            <Button 
            title="sign out"
            primary
            full
            onPress={() => firebase.auth().signOut()}
            />
       </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
   
  }
})