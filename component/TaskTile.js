import { View,Text, Image, StyleSheet, Pressable } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
export default function TaskTile({title,onPress}){
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.img}>
                <Image source={require('../assets/waiting.png')} style={{width:60,height:60}}/>
            </View>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    img:{
        backgroundColor:GlobalStyles.colors.p1,
        margin:20,
        borderRadius:10,
        // position:'absolute',
        padding:20
        
    },
    text:{
        color:GlobalStyles.colors.p1,
        // position:'absolute'
    },
    container:{
        alignItems:'center',
        
    }
})