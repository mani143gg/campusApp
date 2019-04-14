import React from 'react';
import { StyleSheet, Text, View  ,StatusBar,ScrollView} from 'react-native';
import Profile from './Profile';
import firebase from '../../config';
import { Item,Label,Input,Button} from 'native-base';
import Form from 'react-native-form';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class editProfile  extends React.Component {


  state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

 
    state = {userdata : null} 
    componentDidMount (){ 
    const {userdata} = firebase.database().ref('Student/').once('value',  (snapshot) =>  {
        this.setState({ userdata })
    });
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
        <Item >
        <Input editable={false} type="TextInput" name="Email" value= {currentUser && currentUser.email} /> 
        </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>First name</Label>
            <Input style={{marginLeft: 25}} name="firstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="lastName" type="TextInput" />
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
            <Label style={{marginLeft: 15}}>Exam Reg No.</Label>
            <Input style={{marginLeft: 25}} name="ExamRegNo" type="TextInput" />
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
