import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Alert,ScrollView} from 'react-native';
import firebase from 'firebase';

import { Item,Label,Input,Button} from 'native-base';
import Form from 'react-native-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerNavigator from '../../navigation/Admin/DrawerNavigator';
export default class Main extends React.Component {
  
     state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
   
  }
        constructor(props) {
        super(props);
        this.state = {
         };
        this.itemsRef = firebase.database().ref().child(`Student`)
        
         }
     
      
      pushToFirebase() {
        let formValues = this.refs.soulForm.getValues()
        this.itemsRef.push(formValues)
        this.props.navigation.navigate('DrawerNavigator')
           }

  render() {
    const {currentUser}= this.state
    return (
       <View style={styles.container}>
      <ScrollView >
        <Text style={styles.title}>
         Edit Profile
        </Text>
        <Text></Text><Text></Text>
        <Form ref="soulForm" style={styles.form} >
         <Text> Hi {currentUser && currentUser.email} Please fill your details
          </Text>
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
         
          
          
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Save</Text></Button>
        </Form>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  form: {
    width:'89%'
  },
  button: {
    
    justifyContent: 'center',
    borderRadius:15,
   backgroundColor:'orange',
   alignItems:'center',
  }
});
