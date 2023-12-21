import { View,Text, StyleSheet, Pressable,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Dialog from 'react-native-dialog';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import DropdownInput from "./DropdownInput";
import Button from "./Button";

export default function CommunityTile({name,village,opd,due,participants,persons,followup,date,activity,hhs}){
    const [isPressed,setPressed]=useState(false);
    const navigation=useNavigation();
    const[visible,setVisible]=useState(false)
    const toggle=()=>{
        setVisible(!visible)
    }
    const document=[
        {labe:'Drv License',value:'driving'},
        {labe:'PAN Card',value:'pan'},
        {labe:'Adhaar Card',value:'adhaar'},
        {labe:'Ration Card',value:'ration'},
    ]
    return(
        <>
        <View style={styles.container}>
            <Pressable onPress={()=>{
                setPressed(!isPressed)
            }}>
            <Icon name='caret-down-circle' color={GlobalStyles.colors.p1} size={32}/></Pressable>
            <View>
        <View style={styles.subCont}>
            <View>
            <Text style={styles.subHead}>Name: of SPO/VHW</Text></View>
           <View><Text style={styles.subDetail}>{name}</Text></View>
        </View>
        <View style={styles.subCont}>
         <Text style={styles.subHead}>Village:</Text>
         <Text style={styles.subDetail}>{village}</Text>
         </View>
        {isPressed && 
        <>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Date of Visit:</Text>
         <Text style={styles.subDetail}>{date}</Text>
         </View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Type of Activity</Text>
         <Text style={styles.subDetail}>{activity}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Total Participants</Text>
         <Text style={styles.subDetail}>{participants}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>No. of Persons</Text>
         <Text style={styles.subDetail}>{persons}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>No. of HHS</Text>
         <Text style={styles.subDetail}>{hhs}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Total Due List</Text>
         <Text style={styles.subDetail}>{due}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Registered in Opd</Text>
         <Text style={styles.subDetail}>{opd}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Follow Up Done</Text>
         <Text style={styles.subDetail}>{followup}</Text></View>
         </>
         }
     </View>
     
     </View>
     
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
    buttonView:{
        backgroundColor:GlobalStyles.colors.p1,
        margin:4,
        padding:6,
        borderRadius:20
    },
    buttonText:{
        color:GlobalStyles.colors.p4,
        fontWeight:'700',
        fontSize:12
    },detail: {
        color: GlobalStyles.colors.p1,
        fontSize: 15,
        fontWeight: '600',marginRight:responsiveHeight(4),
        
      },
    dialog:{
        flexDirection:'row',justifyContent:'space-between',marginBottom:responsiveHeight(4)
    },input:{
        borderColor:GlobalStyles.colors.p3,borderWidth:3.5,width:responsiveHeight(20),height:responsiveHeight(4),borderRadius:10
    }

})