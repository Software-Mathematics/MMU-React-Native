import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
let role='';
export default function Login({navigation}){
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
   
    function loginUser(){
        if(user=='Thf-0246' && pass=='123456'){
            role='nurse'
         }
         else if(user=='THF-0791' && pass=='123456'){
            role='doctor'
         }   
        if(!!role){
            navigation.navigate('Next',{
                screen:'Tab1',
                params:{
                    screen:'Home',
                    params:{
                        role:role}
            
            }})
        }  
    }
    
    return(
        <View style={styles.container} > 
        <View style={styles.heading}>
            <Text style={styles.heading}>Log In</Text></View>
        <View style={styles.tile}>
        <Input place='Username' value={user} onChange={(txt)=>setUser(txt)}/>
        <Input place='Password'value={pass} onChange={(txt)=>setPass(txt)}/>
        <Button title='Continue' onPress={loginUser}/>
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