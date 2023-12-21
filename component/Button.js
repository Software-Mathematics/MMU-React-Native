import { Pressable, View,Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
import { responsiveHeight } from "react-native-responsive-dimensions"
export default function Button({title,onPress,style}){
    return(
        <Pressable style={[styles.view,style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    view:{
        backgroundColor:GlobalStyles.colors.p1,
        margin:18,
        padding:Platform.OS==='ios'?responsiveHeight(2): responsiveHeight(2),
        borderRadius:16,
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }
})