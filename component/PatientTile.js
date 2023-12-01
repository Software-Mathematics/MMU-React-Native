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

export default function PatientTile({name,age,ID,mob,village,DocType,DocNo}){
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
         <Pressable style={styles.buttonView} onPress={()=>navigation.navigate('Assign',{
            id:ID
         })}>
            <Text style={styles.buttonText}>Assign Doctor</Text>
            </Pressable>
         <Pressable style={styles.buttonView}><Text  style={styles.buttonText}>Create Vitals</Text>
         </Pressable>
         <Pressable style={styles.buttonView} onPress={()=>navigation.navigate('History',{
            id:ID
         })}>
            <Text style={styles.buttonText}>View History</Text>
            </Pressable >
         <Pressable style={styles.buttonView} onPress={toggle}>
            <Text style={styles.buttonText}>Edit Patient</Text>
            </Pressable>
            </View>
            </>}


        <View style={{flex:1,justifyContent:'center'}}> 
            <Dialog.Container visible={!!visible} contentStyle={{height: responsiveHeight(70), width: responsiveWidth(90), paddingBottom: 105}}>
        <Dialog.Description >
        <View style={{}}>
            <Pressable style={{marginVertical:10,justifyContent:'flex-end',alignItems:'flex-end',marginBottom:responsiveHeight(5)}} onPress={toggle}> 
          <MaterialIcons name='cancel' color={GlobalStyles.colors.p1} size={24}/>
          </Pressable>
          <View style={styles.dialog}>
            <Text style={styles.detail}>Mobile No.:</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.dialog}>
            <Text style={styles.detail}>COMP.DOC..:</Text>
            <DropdownInput data={document} style={{width:responsiveHeight(20)}}/>
           </View><View style={styles.dialog}>
            <Text style={styles.detail}>DOC No.:</Text>
            <TextInput style={styles.input}/>
          </View>
          <Button title={'Update Patient'}/>
          </View>
        </Dialog.Description>
      </Dialog.Container> 
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