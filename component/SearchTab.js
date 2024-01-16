import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../Styles/LightMode";
export default function SearchTab({place,onChangeText}){
    return(
        <View style={styles.container}>
            <TextInput placeholder={place} style={{backgroundColor:'transparent',}} onChangeText={onChangeText}/>
            <Icon name='search-outline' size={26}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        borderRadius:24,
        padding:4,
        borderColor:GlobalStyles.colors.p3,
        borderWidth:4,
        alignItems:'center',
        
    }
})