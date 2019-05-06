import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, RefreshControl,ScrollView,Image} from "react-native";
export default class Mca extends React.Component {
  constructor() {
    super();
    this.state = {refreshing: true, items: []};
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({
      refreshing: true,
      items: [],
    });

    setTimeout(
      () =>
        this.setState({
          refreshing: false,
          items: ["S1mca", "S2","S3","S4","S5","S6"],
        }),
      1500,
    );
  };

 

  renderItem = ({item}) => {
    return (
      // <TouchableOpacity onPress={() => alert(item)} key={`${item}`}>
      //   <Text style={{width: '100%', height: 48, backgroundColor: 'white'}}>
      //     {item}
      //   </Text>
      //   <View style={{width: '100%', height: 1, backgroundColor: 'gray'}} />
      // </TouchableOpacity>

      <TouchableOpacity onPress={ () => this.props.navigation.navigate(item)} key={`${item}`}>
      <Text style={{width: '100%', height: 48, backgroundColor: 'white'}}>
      {item}
      </Text>
      <View style={{width: '100%', height: 1, backgroundColor: 'gray'}} />
      </TouchableOpacity>
    

    );
  };

  render() {
    return (
      <View style={{flex: 1, padding: 48}}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#aaa',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyExtractor={item => `${item}`}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refresh}
            />
          }>
          {this.state.items.map(item => this.renderItem({item}))}
        </ScrollView>
         <TouchableOpacity onPress= { () => this.props.navigation.navigate('Category')} >
        <Image
        source={require('./Btech/back.png')}
       style={{width: 50, height: 50}}
        />
        </TouchableOpacity>
      </View>
    );
  }
}