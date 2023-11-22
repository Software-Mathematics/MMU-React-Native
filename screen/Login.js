import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";
import { GlobalStyles } from "../Styles/LightMode";

export default function Login({navigation}){
    return(
        <View style={styles.container} > 
        <View style={styles.heading}>
            <Text style={styles.heading}>Log In</Text></View>
        <View style={styles.tile}>
        <Input place='Username'/>
        <Input place='Password'/>
        <Button title='Continue' onPress={()=>navigation.navigate('Next')}/>
        <TouchableOpacity onPress={()=>navigation.navigate('Reset')} style={{alignItems:'center'}}><Text style={{color:'white'}}>Forget Password?</Text></TouchableOpacity>
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