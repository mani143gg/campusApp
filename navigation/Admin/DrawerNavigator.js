import React from 'react';
import { Platform , Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../../screens/Admin/Home';
import Notice from '../../screens/Admin/Notice';
import Add from '../../screens/Admin/Add';
import MenuDrawer from '../../components/MenuDrawer';
import Assignment from '../../screens/Admin/Assignment';
import Profile from '../../screens/Admin/Profile';
import ProfileNavigator from '../../navigation/Admin/ProfileNavigator'


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent : ({ navigation }) => {
        return(<MenuDrawer navigation={navigation} />)
    }

}

const DrawerNavigator = createDrawerNavigator(
    {
     Home : { screen : Home},
     Add : { screen : Add},
     Assignment : { screen : Assignment},
     Notice : { screen : Notice},
     Profile : {screen : ProfileNavigator},
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator); 