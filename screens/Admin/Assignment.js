import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../../components/MenuButton';


export default class Assignment extends React.Component {
  render() {
    return (
      <View >
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.container}>
         <Text>Assignments</Text>
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
