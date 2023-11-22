import { Pressable, View,Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
export default function Button({title,onPress}){
    return(
        <Pressable style={styles.view} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    view:{
        backgroundColor:GlobalStyles.colors.p1,
        margin:18,
        padding:18,
        borderRadius:16,
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }
})