import React, {Component} from 'react';
import {StyleSheet,View,Text } from 'react-native';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyARpt-rGTtF9yI_3W0Szmru9v-5dZcY_xU",
    authDomain: "campusapp-c2b92.firebaseapp.com",
    databaseURL: "https://campusapp-c2b92.firebaseio.com",
    projectId: "campusapp-c2b92",
    storageBucket: "campusapp-c2b92.appspot.com",
    messagingSenderId: "526718627470"
  };
  firebase.initializeApp(config);