import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
import axios from "axios";
import { loginStart,loginSuccess,loginFailure } from "../redux/loginSlice";
import { useDispatch,useSelector } from "react-redux";


let rolecode='';
let resourcecode='DPF';
export default function Login({navigation}){
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
    const dispatch = useDispatch();
    
   
    async function loginUser(){
        // if(user=='Thf-0246' && pass=='123456'){
        //     role='nurse'
        //  }
        //  else if(user=='THF-0791' && pass=='123456'){
        //     role='doctor'
        //  }   
        //  else if(user=='thf-0749' && pass=='123456'){
        //     role='pharmacist'
        //  }
        //  else if(user=='thf-0675' && pass=='123456'){
        //     role='labTechnician'
        //  }
        //  else if(user=='thf-888' && pass=='123456'){
        //     role='healthWorker'
        //  }
        // if(!!role){
        //     navigation.navigate('Next',{
        //         screen:'Tab1',
        //         params:{
        //             screen:'Home',
        //             params:{
        //                 role:role}
            
        //     }})
        // }  
        dispatch(loginStart());
        try {
            const response=await axios.post('https://api.thehansfoundation.org/profile-service-mongo/api/ProfileEntity/v2/login',{
                password: pass,
                resourcecode: resourcecode,
                username: user
              });
              rolecode=response.data.data.dto.rolecode;
            const role=JSON.stringify(response.data.data.dto.rolename)
              
              console.log(role)

              const categories=await axios.get("https://api.thehansfoundation.org/menu-service/api/Menu/v1/get?type=TASK&resourceCode=DPF&role="+rolecode,)
                // const rolelist=JSON.stringify(categories.data)
                const catNames = categories.data.data.dtoList.map(item => item.name);
                
                console.log(catNames)
        
              // Navigate to the next screen after a successful login
              const navigateAction = navigation.navigate('Next',{
                screen:'Tab1',
                params:{
                    screen:'Home',
                    params:{
                            role:role,
                        catNames:catNames}
                }
              })
         
            } catch (error) {
              console.log(error);
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