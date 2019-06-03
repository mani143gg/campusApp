import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Btech from './Btech';
import Mtech from './Mtech';
import Mca from './Mca';
import Category from './Category';
import EC from './Btech/EC';
import Civil from './Btech/Civil';
import Biotechnology from './Btech/Biotechnology';
import ComputerScience from './Btech/ComputerScience';
import EEE from './Btech/EEE';
import Mechanical from './Btech/Mechanical';
import S1mca from './Semester/Mca/S1mca';
import S2mca from './Semester/Mca/S2mca';
import S3mca from './Semester/Mca/S3mca';
import S4mca from './Semester/Mca/S4mca';
import S5mca from './Semester/Mca/S5mca';
import S6mca from './Semester/Mca/S6mca';


import AdminHome from '../AdminHome';

const App = createSwitchNavigator(
  {
    Btech:{screen:Btech},
    Mtech: {screen: Mtech},
    Mca: {screen: Mca},
    Category : {screen: Category},
    EC : {screen : EC},
    Civil : {screen : Civil},
    Biotechnology : { screen : Biotechnology},
    ComputerScience : { screen : ComputerScience},
    EEE : {screen : EEE},
    Mechanical : {screen : Mechanical},
    AdminHome : { screen : AdminHome },
    S1mca : {screen : S1mca},
    S2mca : {screen : S2mca},
    S3mca : {screen : S3mca},
    S4mca : {screen : S4mca},
    S5mca : {screen : S5mca},
    S6mca : {screen : S6mca},
    

    
  },
  {
    initialRouteName: 'Category'
  }
);
const CategoryNav = createAppContainer(App);   
export default CategoryNav //import 