import React from 'react';
import { View, Text, StyleSheet , TextInput } from 'react-native';


const Input = (label,value,onChangeText,placeholder, secureTectEntry ) => {
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTectEntry}
        value={value}
        
        
        />
    </View>

}



const styles=StyleSheet.create({
    container:{
        marginTop:10,
        width:100,
        borderColor: 'white',
        borderBottomWidth: 2

    },
    label:{
        padding:5,
        paddingBottom:0,
        color:'#333',
        fontSize:17,
       
        width:'100%',
    },
    input:{
        paddingRight: 5,
        paddingLeft:5,
        paddingBottom:2,
        color:'#333',
        fontSize:18,
        
        width:'100%',


    },
});

export { Input };