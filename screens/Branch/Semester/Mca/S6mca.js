import React ,{ Component} from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import MenuButton from '../../../../components/MenuButton';
import firebase from '../../../../config';
import Form from 'react-native-form';
import { Item,Label,Input,Button,} from 'native-base';


export default class S2mca extends Component{
  constructor(props) {
    super(props);
    this.state = {
     };
     this.itemsRef = firebase.database().ref('/Student/Branch/Mca').child(`S6mca`)
  }

  pushToFirebase() {
    let formValues = this.refs.soulForm.getValues()
    this.itemsRef.push(formValues)
   
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
            <Label style={{marginLeft: 15}}>Branch</Label>
            <Input style={{marginLeft: 25}} name="Branch" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Admission Number</Label>
            <Input style={{marginLeft: 25}} name="AdmissionNumber" keyboardType="numeric" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Mobile</Label>
            <Input style={{marginLeft: 25}} name="Mobile" keyboardType="numeric" type="TextInput"/>
          </Item>
           <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Reg No.</Label>
            <Input style={{marginLeft: 25}} name="RegNo" type="TextInput" />
          </Item>
            <Button block danger onPress={() => this.pushToFirebase()} style={styles.button}><Text>Save </Text></Button>
        </Form>
      </View>
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