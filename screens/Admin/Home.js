import React from 'react';
import { StyleSheet, Text, View  ,StatusBar} from 'react-native';

import MenuButton from '../../components/MenuButton';

export default class Home extends React.Component {
  render() {
    return (
      <View >
        <StatusBar
        backgroundColor="#16a085"/>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.container}>
         <Text>AdminHome</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 70,
  },
});
