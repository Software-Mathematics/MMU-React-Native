import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import Icon from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UpdateIcon from './UpdateIcon';
export default function Result({id, name, age, village, ID, doctor, date}) {
  const[visible,setVisible]=useState(false);
  function toggle(){
    setVisible(!visible);
  }
  return (
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
      <View>
        <Text style={styles.detail}>{id}</Text>
        <Text style={styles.detail}>{name}</Text>
        <Text style={styles.detail}>{age}</Text>
        <Text style={styles.detail}>{village}</Text>
        <Text style={styles.detail}>{ID}</Text>
        <Text style={styles.detail}>{doctor}</Text>
        <Text style={styles.detail}>{date}</Text>
      </View>

     <UpdateIcon onPress={toggle}/>
      <Dialog.Container visible={!!visible}>
        <Dialog.Description>
        <View><Pressable style={{justifyContent:'flex-end', alignItems:'flex-end',marginVertical:10}} onPress={toggle}> 
          <MaterialIcons name='cancel' color={GlobalStyles.colors.p1} size={18}/></Pressable>
          <View style={styles.container}>
            <Text>Lab Technician</Text>
            <Text>Sanskar Singh</Text>
          </View>
          <View  style={styles.container}>
            <Text>Typhoid</Text>
            <Text>Completed</Text>
          </View>
          <View  style={styles.container}>
            <Text>Name:</Text>
            <Text>{name}</Text>
          </View>
          <View  style={styles.container}>
            <Text>UOM:</Text>
            <Text>NA</Text>
          </View>
          
          <View  style={styles.container}>
            <Text>Range:</Text>
            <Text></Text>
          </View>
          <View style={styles.container}>
            <Text>Value:</Text>
            <Text>negative</Text>
          </View>
          
          <Text>Test Result</Text>
          </View>
        </Dialog.Description>
      </Dialog.Container>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: GlobalStyles.colors.p1,
    justifyContent: 'space-between',
  },
  heading: {
    marginRight: 50,
    marginBottom: 20,
  },
  head: {
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
    fontSize: 15,
  },
  detail: {
    color: GlobalStyles.colors.p1,
    fontSize: 15,
    fontWeight: '600',
  },
});
