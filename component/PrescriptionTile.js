import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import Icon from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UpdateIcon from './UpdateIcon';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export default function PrescriptionTile({id, name, age, mobile, ID,gender,village,address}) {
  const[visible,setVisible]=useState(false);
  function toggle(){
    setVisible(!visible);
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.heading}>
      <View style={styles.entity}>
        <Text style={styles.head}>Patient ID</Text>
        <Text style={styles.detail}>{id}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Patient Name</Text>
        <Text style={styles.detail}>{name}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Patient Age</Text>
        <Text style={styles.detail}>{age}</Text>
        </View>
        
        <View style={styles.entity}>
        <Text style={styles.head}>Prescription ID</Text>
        <Text style={styles.detail}>{ID}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Mobile No.</Text>
        <Text style={styles.detail}>{mobile}</Text>
        </View>
      </View>
      <UpdateIcon onPress={toggle}/>
      </View>
    
     <View style={{flex:1,justifyContent:'center'}}> 
      <Dialog.Container visible={!!visible}  contentStyle={{height: responsiveHeight(70), width: responsiveWidth(90), paddingBottom: 105,borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}>
       
        <Dialog.Description >
        <View >
          <Pressable style={{marginVertical:10,alignItems:'flex-end',marginBottom:responsiveHeight(5)}} onPress={toggle}> 
          <MaterialIcons name='cancel' color={GlobalStyles.colors.p1} size={18}/></Pressable>
          <Text style={[styles.head,{fontSize:responsiveHeight(2)}]}>Prescription</Text>
          <View style={styles.container}>
          <View style={styles.heading}>
          
       
        <View style={styles.entity}>
            <Text style={styles.head}>Name:</Text>
            <Text style={styles.detail}>{name}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Village</Text>
            <Text style={styles.detail}>{village}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Address:</Text>
            <Text style={styles.detail}>{address}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Age:</Text>
            <Text style={styles.detail}>{age}</Text>
            </View>
            <View style={styles.entity}>
            <Text style={styles.head}>Gender:</Text>
            <Text style={styles.detail}>{gender}</Text>
            </View>
            </View>
          </View>
         
          </View>
        </Dialog.Description>
      </Dialog.Container>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    borderBottomWidth: 2,
    borderColor: GlobalStyles.colors.p1,
    justifyContent: 'space-between',
    
  },
  heading: {
   
    marginBottom: 20,
  },
  head: {
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
    fontSize: 15,marginBottom:responsiveHeight(1),
    width:responsiveHeight(16)
  },
  detail: {
    color: GlobalStyles.colors.p1,
    fontSize: 15,
    fontWeight: '600',
    marginBottom:responsiveHeight(1),
    alignItems:'flex-start',
    width:responsiveHeight(18)
  },entity:{
    flexDirection:'row'
  }
});
