import { View,Text, StyleSheet, Pressable,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AntDesign from 'react-native-vector-icons/AntDesign'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default function TestTile({name,age,prescription}){
    const [isPressed,setPressed]=useState(false);
    const navigation=useNavigation();
    
    return(
       <>
        <View style={styles.container}>
            <Pressable onPress={()=>{
                setPressed(!isPressed)
            }}
            style={{
                marginHorizontal:responsiveHeight(1)
            }}>
            <AntDesign name='down' color={GlobalStyles.colors.p1} size={32}/></Pressable>
            <View>
        <View style={styles.subCont}>
            <View>
            <Text style={styles.subHead}>Name:</Text></View>
           <View><Text style={styles.subDetail}>{name}</Text></View>
        </View>
        <View style={styles.subCont}>
         <Text style={styles.subHead}>Age:</Text>
         <Text style={styles.subDetail}>{age}</Text>
         </View>
         {isPressed &&
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Prescription:</Text>
         
            <Text style={styles.subDetail}>{prescription}</Text>
         </View>
}
     </View>

     
     </View>
     {isPressed &&
        <View style={styles.drop}>
     <Text style={styles.heading}>1. Glucose Random</Text>
     <View style={styles.button}>
         <Pressable style={styles.buttonView}>
             <Text style={styles.buttonText}>Completed</Text>
         </Pressable>
         <Pressable style={styles.buttonView}>
             <Text style={styles.buttonText}>Update</Text>
         </Pressable>
     </View>
     <Text style={styles.heading}>2. Haemoglobin</Text>
     <View style={styles.button}>
         <Pressable style={styles.buttonView}>
             <Text style={styles.buttonText}>Sample Collected</Text>
         </Pressable>
         <Pressable 
         onPress={()=>navigation.navigate('TestPrescription')}
         style={[
            styles.buttonView,{backgroundColor:GlobalStyles.colors.p1}
        ]}
         >
             <Text style={styles.buttonText}>Update</Text>
         </Pressable>
     </View>
  </View>}
  </>
    )
    
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        borderTopWidth:0.75,
        paddingTop:10

        
    },
    subCont:{
        flexDirection:'row',
        marginLeft:16,
        // justifyContent:'space-between',
        marginBottom:2,
        
        

    },
    subHead:{
        marginRight:40,
        width:100,
        marginBottom:8,
        color:GlobalStyles.colors.p1,
        fontWeight:'900'
    },
    subDetail:{
        color:GlobalStyles.colors.p1,
        fontWeight:'600'
    },
    drop:{
        marginHorizontal:responsiveHeight(1),
        borderTopWidth:0.5,
        paddingTop:responsiveHeight(1.5)
    },
    heading:{
        fontWeight:'800',
        color:GlobalStyles.colors.p1,
        fontSize:responsiveHeight(1.65),
        
    },
    buttonView:{
        backgroundColor:'#949494',
        padding:responsiveHeight(1),
        borderRadius:16
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:responsiveHeight(2)
    },
    buttonText:{
        color:GlobalStyles.colors.p4,
        fontWeight:'600'
    }
    
    
    

})