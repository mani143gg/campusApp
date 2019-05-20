import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import firebase from 'firebase';
import { Google } from 'expo';

export default class SignUp extends React.Component {
  

 signInWithGoogleAsync = async () => {
            try {
                const result = await Expo.Google.logInAsync({
                    behavior: 'web',
                    androidClientId: '526718627470-7ej63fal4ven1e3fc4j2lndl2ucu76bj.apps.googleusercontent.com',
                    scopes: ['profile', 'email']
                });
                if (result.type == 'sucess'){
                    return result.accessToken;
                }else{
                    return {cancelled : true};
                }
            } catch (e) {
                return { error: true};
                
            }
        }; 
        

        state = { email: '', password: '', errorMessage: null }
        handleSignUp = () => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('CategoryNavigation'))
            .catch(error => this.setState({ errorMessage: error.message }))
        }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
          autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={email => this.setState({ email })}
                value={this.state.email}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
             secureTextEntry
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.handleSignUp}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('login')}>
            <Text>Already have an account? Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});