import React ,{ Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import MenuButton from '../../../../components/MenuButton';
import firebase from '../../../../config';
import Form from 'react-native-form';
import { Item,Label,Input,Button,} from 'native-base';


export default class S1mca extends Component{
  constructor(props) {
    super(props);
    this.state = {
     };
     this.itemsRef = firebase.database().ref().child(`people`)
  }

  pushToFirebase() {
    let formValues = this.refs.soulForm.getValues()
    this.itemsRef.push(formValues)
   
  }

  render() {
    return (
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
            <Label style={{marginLeft: 15}}>Signature</Label>
            <Input style={{marginLeft: 25}} name="signature" type="TextInput" />
          </Item>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Sell it</Text></Button>
        </Form>
      </View>
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