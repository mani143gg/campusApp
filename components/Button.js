import React from 'react';
import {StyleSheet, TouchableOpacity,Text } from 'react-native';

const Button =  ({onPress, children }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{
        marginTop:100,
        padding:20,
        width:'100%',
        backgroundColor:'#333',
        borderRadius:6,
        alignItems:'center',
    },
    text:{
        color:'white',
        
        fontSize:16,
    },
});

export { Button };