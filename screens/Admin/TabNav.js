import React from "react";
import { View,  StyleSheet,StatusBar,Image,FlatList,Modal,TextInput } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import config from "../../config";
import firebase from "firebase";
import {Permissions,Notifications} from 'expo';
import Toast, {DURATION} from 'react-native-easy-toast';
import DatePicker from 'react-native-datepicker';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';



class Home extends React.Component {
  state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

  render() {
     const {currentUser}= this.state
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://t1.rbxcdn.com/37e065fad8c490f831718bb03ac8f9b7'}} />
                <Body>
                  <Text>Welcome {currentUser && currentUser.email}</Text>
                  <Text note> </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://t1.rbxcdn.com/37e065fad8c490f831718bb03ac8f9b7'}} style={{height: 100, width: 100, flex: 1}}/>
                <Text>
                  Motivate yourself
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}



class Notices extends React.Component {
 render() {
    return (
      <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/campusapp-c2b92.appspot.com/o/Student%2FBranch%2FMca%2FS1mca%2F56535407-5964-4c64-bf63-af68012c7d98?alt=media&token=a2e2e5b4-bbc1-49ac-8f0f-d8329f1097a0'}} style={{height: 50, width: 400 , flex: 1}}/>
    );
  }
}



class Notification extends React.Component {

    componentDidMount() {
      this.currentUser= firebase.auth().currentUser
     this.registerForPushNotifications();

    }
    registerForPushNotifications = async () => { 
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = status;
      if (status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
         return;
          }

let token = await Notifications.getExpoPushTokenAsync();


firebase.database().ref("Student/Branch/Mca/S1mca" + this.currentUser.uid + '/push_token').set(token);
   }

  render() {
        return (
      <View style={styles.container}>
        <Text>Notifications here</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }
 render() {
        const {currentUser}= this.state

    return (
      <View style={styles.container}>
      <Text> Welcome {currentUser && currentUser.email} </Text>
      <Text> Name : </Text>
      </View>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    //realtime listener for firebase db
    this.itemsRef = firebase.database().ref('todo');
    this.state = { description: '', todos: [], date: '', modalVisible: false,};
  }

  keyExtractor = (item) => item.id;

  renderItem = ({item}) =>
  <View >
    <Text style={{fontSize: 20}}>{item.description}, {item.date}</Text>   
  </View>;

  saveData = () => {
    if (this.state.description != '' && this.state.date != '') {
      this.itemsRef.push({ description: this.state.description, date: this.state.date});
      this.refs.toast.show('Todo saved');
      this.setState({date: '', modalVisible: false});
    }
    else {
      this.refs.toast.show('Some data is missing');      
    }
  };

  // List todos
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          description: child.val().description,
          date: child.val().date,
        });
      });

      this.setState({todos: items});
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}
        onRequestClose={() => {}} >
        <View style={styles.inputcontainer}>
          <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 7}}
          onChangeText={(description) => this.setState({description})}
          value={this.state.text}
          placeholder="description"
          />
          <DatePicker
          style={{width: 200, marginBottom: 7}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD" 
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
            },
          }}
          onDateChange={(date) => {this.setState({date: date})}}
          />         
          <Button onPress={this.saveData} title="Save" /> 
        </View>
        </Modal>
        <View style={styles.headercontainer}>                  
          <Text style={{fontSize: 20, marginRight: 40}}>ALL TODOS</Text>   
          {/* <Button title="Add" onPress={() => this.setState({modalVisible: true})} /> */}
        </View>
        <View style={styles.listcontainer}>
          <FlatList
            data = {this.state.todos}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            style={{marginTop: 20}}
            />
        </View>
        <Toast ref="toast" position="top"/>        
      </View>
    );
  }
}






  
const Tab = createBottomTabNavigator({
  Homescreen: { screen: Home },
  Notices : { screen: Notices },
  Notification : { screen: Notification},
  Profile : {screen : Profile },
  Todo : {screen : Todo}
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
  inputcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listcontainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
})

export default createAppContainer(Tab);
