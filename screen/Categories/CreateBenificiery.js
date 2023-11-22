import {ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {GlobalStyles} from '../../Styles/LightMode';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import CatHead from '../../component/CatHead';
export default function Benificiery() {
    // const data=[
    //     {label:'Male',value:'male'},{label:'Female',value:'female'},{label:'Prefer Not to tell',value:'prefer'},
    // ]
    // const[gender,setGender]=useState(null);
  return (
    <ScrollView>
      <View>
        <CatHead title='New Benificiery Registration'/>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Name:</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>MMU Number:</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Village</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Address:</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Age:</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Gender:</Text>
          {/* <Dropdown style={styles.subDetail} /> */}
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}> Marital Status</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Education</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Occupation</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Ration Card</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Disability</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>COMP. DOC.</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>DOC. NO.</Text>
          <TextInput style={styles.subDetail} />
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subCont: {
    flexDirection: 'row',
    margin:16,
    // justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  subHead: {
    marginRight: 40,
    width: 100,
    marginBottom: 8,
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
  },
  subDetail: {
    color: GlobalStyles.colors.p1,
    fontWeight: '600',
    borderWidth: 3.5,
    width: 260,
    height: 50,
    borderRadius: 14,
    borderColor: GlobalStyles.colors.p3,
  },
  
});
