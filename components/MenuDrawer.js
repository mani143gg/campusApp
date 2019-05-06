import React from 'react';
import {
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { View,Text} from 'native-base';
import firebase from 'firebase';
import DrawerNavigator from '../navigation/Admin/DrawerNavigator';



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {

    state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height:50}} onPress={() => this.props.navigation.navigate(nav)} >
            
                <Text style={styles.link}>{text} </Text> 
            </TouchableOpacity>
        )
    }
    render(){
        const {currentUser}= this.state
        return( 
            <View style={styles.container}>     
            <ScrollView style={styles.scroller}>           
                <View style={styles.topLink}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../assets/icon.png')} />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name}>{currentUser && currentUser.email}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLink}>
                    {this.navLink('Home', 'Home')}  
                     
                    {this.navLink('Assignment', 'Assignment')}  
                    {this.navLink('Notice', 'Notice')}      
                    {this.navLink('Add ', 'Add')} 
                    {this.navLink('Profile','Profile')} 
                </View>
                <View style={styles.footer}>
                    <Text style={styles.description}>Project</Text>
                    <Text style={styles.version}>v1.0</Text>

                </View>
                </ScrollView>
            </View>
        );
    }
}


const styles =StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : 'lightgray',
    },
    scroller:{
      flex:1,
        
    },
    profile:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:25,
        borderBottomWidth:1,
        borderBottomColor: '#777777'
    },
    profileText: {
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
    },
    name:{
        fontSize:20,
        paddingBottom:5,
        color:'white',
        textAlign:'left'
    },
    imgView:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
    },
    img:{
        height:70,
        width:70,
        borderRadius: 50,
    },
    topLink : {
        height:160,
        backgroundColor :'black',
    },
    bottomLink:{
        flex:1,
        backgroundColor : 'white',
        paddingTop:10,
        paddingBottom:450,
    },
    link: {
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft: 14,
        margin:5,
        textAlign: 'left',
              
    },
    footer:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgray',
    },
    version:{
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'gray',
        paddingRight:40
        
    },
    description:{
        flex:1,
        marginLeft:20,
        fontSize:16,
    },
    
})