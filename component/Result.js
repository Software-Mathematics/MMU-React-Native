import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import Icon from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UpdateIcon from './UpdateIcon';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
export default function Result({id, name, age, village, ID, doctor, date,labTechnician,disease,uom,range,value}) {
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
        <Text style={styles.head}>Patient Village</Text>
        <Text style={styles.detail}>{village}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Prescription ID</Text>
        <Text style={styles.detail}>{ID}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Doctor</Text>
        <Text style={styles.detail}>{doctor}</Text>
        </View>
        <View style={styles.entity}>
        <Text style={styles.head}>Test Date</Text>
        <Text style={styles.detail}>{date}</Text>
        </View>
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
          <View style={styles.entity}>           
            <Text style={styles.head}>Lab Technician</Text>
            <Text style={styles.detail}>{labTechnician}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Typhoid</Text>
            <Text style={styles.detail}>Completed</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Name:</Text>
            <Text style={styles.detail}>{disease}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>UOM:</Text>
            <Text style={styles.detail}>{uom}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Range:</Text>
            <Text style={styles.detail}>{range}</Text>
            </View>
        <View style={styles.entity}>
            <Text style={styles.head}>Value:</Text>
            <Text style={styles.detail}>{value}</Text>
            </View>
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
