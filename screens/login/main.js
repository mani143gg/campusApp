import React ,{ Component} from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import config from '../../config';
import firebase from 'firebase';
import Form from 'react-native-form';
import { Item,Label,Input,Button,} from 'native-base';



export default class Main extends Component{
  state = {text: ""  };
  constructor(props) {
    super(props);
    this.state = {
     };
            

     this.itemsRef = firebase.database().ref('/Student')
     
  }

  pushToFirebase() {
    let formValues = this.refs.soulForm.getValues()
    this.itemsRef.push(formValues)
    this.props.navigation.navigate('Tab' , { text: this.state.text})
   
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={{flex:1}}
      behavior="padding"
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Add Students Detail
        </Text>
        
        <Form ref="soulForm" style={styles.form} >
           <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Confirm Email</Label>
            <Input style={{marginLeft: 25}} name="Email" autoCapitalize="none" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>First name</Label>
            <Input style={{marginLeft: 25}} name="FirstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="LastName" type="TextInput" />
          </Item> 
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Semester  eg.S1CSE</Label>
            <Input style={{marginLeft: 25}} name="Semester " type="TextInput"  />
          </Item>       
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Admission Number</Label>
            <Input style={{marginLeft: 25}} name="AdmissionNumber" keyboardType="numeric" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Mobile</Label>
            <Input style={{marginLeft: 25}} name="Mobile" keyboardType="numeric" type="TextInput" />
          </Item>
           <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Reg No.</Label>
            <Input style={{marginLeft: 25}} name="RegNo" type="TextInput" onChangeText={text => this.setState({text})} />
          </Item>
            <Button block danger onPress={() => this.pushToFirebase() } style={styles.button}><Text>Save </Text></Button>
        </Form>
        
      </View>
      {/* <TouchableOpacity onPress= { () => this.props.navigation.navigate('Mca')} >
        <Image
        source={require('./Btech/back.png')}
       style={{width: 50, height: 50}}
        />
        </TouchableOpacity> */}
          </KeyboardAvoidingView>
           

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  form: {
    width: '80%'
  },
  button: {
    margin: 10
  }
});