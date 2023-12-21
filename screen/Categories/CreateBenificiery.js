import {ScrollView, StyleSheet, View, Text, TextInput, SafeAreaView,Pressable} from 'react-native';
import {GlobalStyles} from '../../Styles/LightMode';

import { useState } from 'react';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import Button from '../../component/Button';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import DropdownInput from '../../component/DropdownInput';
export default function Benificiery({navigation}) {
    const gender=[
        {label:'Male',value:'male'},{label:'Female',value:'female'},{label:'Prefer Not to tell',value:'prefer'},
    ]

    const marital=[
      {label:'Married',value:'married'},
      {label:'Unmarried',value:'unmarried'},
      {label:'Widow',value:'widow'},
      {label:'Widower',value:'widower'},
      {label:'Divorcee',value:'divorcee'},
      {label:'Separated',value:'separated'},
      {label:'Other',value:'other'},
  ]

  const education=[
    {label:'Under Graduate',value:'undergraduate'},
    {label:'PG',value:'pg'}, 
    {label:'No formal Edu',value:'noformal'},
    {label:'Graduate',value:'Graduate'},
  ]

  const occupation=[
    {label:'Govt Service',value:'govtservice'},
    {label:'Housewife',value:'Student'},
    {label:'Carpenter',value:'carpenter'},
    {label:'Software Engineer',value:'software engineer'},
    {label:'Pvt Service',value:'pvt service'},
    {label:'Self-Employed',value:'self-employed'},
    {label:'Agriculture',value:'agriculture'},
    {label:'Labour',value:'labour'},
    {label:'N/A',value:'n/a'},
  ]
    
  return (
    
      <SafeAreaView style={{flex:1}}>
        <HeadIcon/>
        <CatHead title='New Benificiery Registration'/>
        <View style={{flex:1}}>
        <ScrollView>
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
          <DropdownInput data={gender}/>
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}> Marital Status</Text>
          <DropdownInput
          data={marital}
          />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Education</Text>
          <DropdownInput
          data={education}
          />
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
        </ScrollView></View>
        {/* <View style={{justifyContent:'flex-end',width:300}}>
        <Button title={'Continue'}/></View> */}
        <View style={{justifyContent:'flex-end'}}>
        <Pressable style={styles.view} onPress={()=>navigation.navigate('Emergency')}>
            <Text style={styles.text}>Continue</Text>
        </Pressable></View>
      </SafeAreaView>
  
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
    width: responsiveHeight(27),
    height: 50,
    borderRadius: 14,
    borderColor: GlobalStyles.colors.p3,
  },
  view:{
    backgroundColor:GlobalStyles.colors.p1,
    margin:18,
    marginLeft:responsiveHeight(30),
    padding:Platform.OS==='ios'?responsiveHeight(2): responsiveHeight(2),
    borderRadius:16,
    alignItems:'flex-end',
    justifyContent:'flex-end'
},
text:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
},

  
});
