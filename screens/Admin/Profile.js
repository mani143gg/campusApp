import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import MenuButton from '../../components/MenuButton';
import {Ionicons } from '@expo/vector-icons';
import editProfile from './editProfile';
import config from '../../config';
import firebase from 'firebase';





export default class Profile extends Component {
 state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }
  static navigationOptions = {
    title:''
  };
  signout(){
    firebase.auth().signOut()
  };
   viewData(){
     firebase.database("Student"  )
   }

  render() {
    const { currentUser } = this.state
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} />
      
          <View style={styles.header}>
            <View style={styles.headerContent}>
            {/* <Text style={{marginBottom:29,marginLeft:280}}> s</Text> */}
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                  John Doe
                 </Text>
                 <Ionicons
                          name="md-person"
                          color="black"
                          size={32}
                          style={styles.menuIcon}
                          onPress= {()=> navigate('editProfile')}
                  />
                  <Button
        title="Sign out"
        onPress={() => signout} 
        />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
                {currentUser && currentUser.email}
              </Text>
          
              <Text style={styles.textInfo}>
                Following: 244
              </Text>
            
              <Text style={styles.textInfo}>
                Followers: 1.250 
              </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  }
});
 