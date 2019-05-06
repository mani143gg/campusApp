import React from "react";
import config from '../../config';
import firebase from 'firebase';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button, 
} from "native-base";
import {StyleSheet,View,Picker,Text} from 'react-native';
export default class BranchNavigation extends React.Component {
     constructor() {
       super()
     
       this.state = {
          PickerValue:''
       }
     };


     componentDidMount() {
       this.listenForTasks(this.taskRef)
     }
     



     clickme= ()=> {
       var data = this.state.PickerValue;
       if(data==""){
         alert("please select  a option");
       }else{
       alert(data);

       }
     }
     
  render() {
    return (
      <Container>
        <Header />


          <View>  

          <Picker 
          style={{width:'80%'}}
          selectdValue={this.state.PickerValue}
          onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
          > 
          <Picker.Item label="Select a option" value="null" />
          <Picker.Item label="item1" value="value" />
          <Picker.Item label="item2" value="movie" />
          </Picker>
          <Button title="click here" onPress={this.clickme} />
          
          
          </View>


        <Content />
        

        <Footer>
          <FooterTab>
            <Button full
            >
              <Text>bottom</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
