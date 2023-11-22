import { View,Text, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
export default function Patient({name,age,ID,mob,village,DocType,DocNo}){
    const [isPressed,setPressed]=useState(false);
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
            <Text style={styles.subHead}>Name:</Text></View>
           <View><Text style={styles.subDetail}>{name}</Text></View>
        </View>
        <View style={styles.subCont}>
         <Text style={styles.subHead}>Age:</Text>
         <Text style={styles.subDetail}>{age}</Text>
         </View>
        {isPressed && 
        <>
         
         <View style={styles.subCont}>
         <Text style={styles.subHead}>PatientID:</Text>
         <Text style={styles.subDetail}>{ID}</Text>
         </View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Mobile No.:</Text>
         <Text style={styles.subDetail}>{mob}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Village:</Text>
         <Text style={styles.subDetail}>{village}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>Document Type:</Text>
         <Text style={styles.subDetail}>{DocType}</Text></View>
         <View style={styles.subCont}>
         <Text style={styles.subHead}>DocNo. No.:</Text>
         <Text style={styles.subDetail}>{DocNo}</Text></View>
         
         </>
         }
     </View>
     
     </View>
     {isPressed && <>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
         <Pressable style={styles.buttonView}><Text style={styles.buttonText}>Assign Doctor</Text></Pressable>
         <Pressable style={styles.buttonView}><Text  style={styles.buttonText}>Create Vitals</Text></Pressable><Pressable style={styles.buttonView}><Text style={styles.buttonText}>View History</Text></Pressable ><Pressable style={styles.buttonView}><Text style={styles.buttonText}>Edit Patient</Text></Pressable></View></>}
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
    }
    

})