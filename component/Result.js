import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import Icon from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UpdateIcon from './UpdateIcon';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export default function Result({id, name, age, village, ID, doctor, date}) {
  const[visible,setVisible]=useState(false);
  function toggle(){
    setVisible(!visible);
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.head}>Patient ID</Text>
        <Text style={styles.head}>Patient Name</Text>
        <Text style={styles.head}>Patient Age</Text>
        <Text style={styles.head}>Patient Village</Text>
        <Text style={styles.head}>Prescription ID</Text>
        <Text style={styles.head}>Doctor</Text>
        <Text style={styles.head}>Test Date</Text>
      </View>
      <View style={{alignItems:'flex-end'}}>
        
        <Text style={styles.detail}>{id}</Text>
        <Text style={styles.detail}>{name}</Text>
        <Text style={styles.detail}>{age}</Text>
        <Text style={styles.detail}>{village}</Text>
        <Text style={styles.detail}>{ID}</Text>
        <Text style={styles.detail}>{doctor}</Text>
        <Text style={styles.detail}>{date}</Text>
      </View>
      <UpdateIcon onPress={toggle}/>
      </View>
    
     <View style={{flex:1,justifyContent:'center'}}> 
      <Dialog.Container visible={!!visible}  contentStyle={{height: responsiveHeight(70), width: responsiveWidth(90), paddingBottom: 105,borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}>
       
        <Dialog.Description >
        <View style={{}}>
          <Pressable style={{marginVertical:10,alignItems:'flex-end',marginBottom:responsiveHeight(5)}} onPress={toggle}> 
          <MaterialIcons name='cancel' color={GlobalStyles.colors.p1} size={18}/></Pressable>
          <View style={styles.container}>
          <View style={styles.heading}>           
            <Text style={styles.head}>Lab Technician</Text>
            <Text style={styles.head}>Typhoid</Text>
            <Text style={styles.head}>Name:</Text>
            <Text style={styles.head}>UOM:</Text>
            <Text style={styles.head}>Range:</Text>
            <Text style={styles.head}>Value:</Text>
            </View>
          
          <View style={{alignItems:'flex-end'}}>
          <Text style={styles.detail}>Sanskar Singh</Text>
          <Text style={styles.detail}>Completed</Text>
          <Text style={styles.detail}>{name}</Text>
          <Text style={styles.detail}>NA</Text>
          <Text style={styles.detail}>-</Text>
          <Text style={styles.detail}>negative</Text>
          </View>
          </View>
          <Text style={styles.detail}>Test Result</Text>
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
    margin: 20,
    marginTop: 5,
    // borderBottomWidth: 1,
    borderColor: GlobalStyles.colors.p1,
    justifyContent: 'space-between',
    // width:100
  },
  heading: {
    marginRight: 50,
    marginBottom: 20,
  },
  head: {
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
    fontSize: 15,marginBottom:responsiveHeight(1)
  },
  detail: {
    color: GlobalStyles.colors.p1,
    fontSize: 15,
    fontWeight: '600',
    marginBottom:responsiveHeight(1)
  },
});
