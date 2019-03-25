import React ,{ Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';


class Home extends Component {
    render() {
        return(
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}



class work extends Component {
    render() {
        return(
            <View>
                <Text>work</Text>
            </View>
        );
    }
}



const Tab = createBottomTabNavigator({
    Homescreen : {screen:Home},
    WOrk : {screen: work}

})



export default createAppContainer(Tab);