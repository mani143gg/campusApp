import React ,{ Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import MenuButton from '../../components/MenuButton';
import firebase from '../../config';
import Form from 'react-native-form';
import { Item,Label,Input,Button,} from 'native-base';

class Students extends Component {
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
        return(
            
                // <MenuButton navigation={this.props.navigation} style={{paddingTop:20,color:'red'}} />
        <View style={styles.container}>
        <Text style={styles.title}>
          Add Students Detail
        </Text>
        <Text></Text><Text></Text>
        <Form ref="soulForm" style={styles.form} >
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>First name</Label>
            <Input style={{marginLeft: 25}} name="firstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="lastName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>class</Label>
            <Input style={{marginLeft: 25}} name="signature" type="TextInput" />
          </Item>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Save</Text></Button>
        </Form>
      </View>
                
            
        );
    }
}



class Staffs extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
         this.itemsRef = firebase.database().ref().child(`Staff`)
      }
    
      pushToFirebase() {
        let formValues = this.refs.soulForm.getValues()
        this.itemsRef.push(formValues)
       
      }

    render() {
        return(
            <View style={styles.container}>
        <Text style={styles.title}>
          Add Staff Detail
        </Text>
        <Text></Text><Text></Text>
        <Form ref="soulForm" style={styles.form} >
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Class</Label>
            <Input style={{marginLeft: 25}} name="firstName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>Last name</Label>
            <Input style={{marginLeft: 25}} name="lastName" type="TextInput" />
          </Item>
          <Item floatingLabel style={{marginTop:10}}>
            <Label style={{marginLeft: 15}}>class</Label>
            <Input style={{marginLeft: 25}} name="signature" type="TextInput" />
          </Item>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Save</Text></Button>
        </Form>
      </View>
        );
    }
}



const Tab = createBottomTabNavigator({
    Student : {screen:Students},
    Staff : {screen: Staffs}

})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      top: 70,
    },title: {
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

export default createAppContainer(Tab);