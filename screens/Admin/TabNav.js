import React from "react";
import { View,  StyleSheet,StatusBar,Image,FlatList,Modal,TextInput ,ListView} from "react-native";
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
                <Image source={{uri: 'https://freepngimg.com/thumb/quotes/35395-9-quotes.png'}} style={{height: 100, width: 100, flex: 1}}/>
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
  constructor(props) {
    super(props);
    //realtime listener for firebase dbs
    this.itemsRef = firebase.database().ref('link/S1mca');
    this.state = { link: '',todos [] , modalVisible: false,};
  }

  keyExtractor = (item) => item.id;

  renderItem = ({item}) =>
  <View >
    <Image style={{width: 500, height: 500}} 
    source={{uri: item.link }}
    />  
  </View>;



  // List todos
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          link: child.val().link  
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
      <View >

        <View >
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



















class Notification extends React.Component {

    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {description: "Sample Notification"}, 
        
      ]),
    };
  }

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
      <View style={styles.container1}>
      <Text> Notifications Here </Text>
        <ListView style={styles.notificationList1} enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(notification) => {
            return (
              <View style={styles.notificationBox1}>
                <Image style={styles.icon}
                  source={{uri: 'https://png.icons8.com/notification/ultraviolet/50/3498db'}}/>
                
                <Text style={styles.description1}>{notification.description}</Text>
              </View>
            )}}/>
      </View>
    );
  }
}













class Profile extends React.Component {

   constructor(props) {
    super(props);
    //realtime listener for firebase db
    this.itemsRef = firebase.database().ref('/Student/Branch/Mca/S1mca'+userId);
    this.state = { FirstName: '', todos: [], RegNo: '', modalVisible: false,};
  }

  state = { currentUser: null }
    componentDidMount() {
      let userId = firebase.auth().currentUser.uid;
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      this.listenForItems(this.itemsRef);
  }
   keyExtractor = (item) => item.id;

  renderItem = ({item}) =>
  <View >
    <Text style={{fontSize: 20}}> {item.FirstName} </Text>  
    <Text style={{fontSize: 20}}>  {item.RegNo} </Text> 
  </View>;
  //VIew
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          RegNo: child.val().RegNo,
          FirstName: child.val().FirstName,
        });
      });

      this.setState({todos: items});
    });
  }
  
 render() {
        const {currentUser}= this.state

    return (
      <View style={styles.container}>
      <Text> Welcome {currentUser && currentUser.email} </Text>
      <Text> {this.state.FirstName}</Text>
      <Text> {this.state.RegNo} </Text>
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
  Todo : {screen : Todo},
  
});

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maincontainer: {
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
  container1:{
    backgroundColor:'#DCDCDC'
  },
  notificationList1:{
    marginTop:20,
    padding:10,
  },
  notificationBox1: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  description1:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
  
})

export default createAppContainer(Tab);
