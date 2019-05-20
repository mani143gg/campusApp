import react from 'react';
import { StyleSheet,Text,View,FlatList} from 'react-native';

export default FlatlistImage React.component {
    render(){
        return(
            <View>
                <FlatList 
                    data={[{key: 'a'},{key : 'b'}]}
                    renderItem={({ item}) => <Text> {item.key} </Text>}
                
                />
            </View>
        )
    }
}