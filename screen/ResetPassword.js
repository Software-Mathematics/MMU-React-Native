import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";
import { GlobalStyles } from "../Styles/LightMode";
export default function Reset(){
    return(
        <View style={styles.container}>
        
            <View style={styles.heading}>
            <Text style={styles.heading}>Reset Password</Text></View>
        <View style={styles.tile}>
        <Input place='Username'/><Input place='New Password'/><Input place='Confirm Password'/>
        <Button title='Continue'/>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:GlobalStyles.colors.p1,
        
    },
    tile:{
        backgroundColor:GlobalStyles.colors.p2,
        margin:10,
        padding:16,
        borderRadius:16
    },
    heading:{
        color:'white',fontWeight:'bold',fontSize:25,alignItems:'center',
        padding:10
    }
})