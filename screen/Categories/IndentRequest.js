import {StyleSheet, View, Text, FlatList, Pressable,SafeAreaView} from 'react-native';
import CatHead from '../../component/CatHead';
import SearchTab from '../../component/SearchTab';
import {GlobalStyles} from '../../Styles/LightMode';
import Indent from '../../component/Indent';
import { useState } from 'react';
import { Dialog } from 'react-native-paper';
import Input from '../../component/Input';
import Button from '../../component/Button';

import HeadIcon from '../../component/HeadIcon';

export default function IndentRequest() {
    const dummy=[
        {
            id:1,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },
        {
            id:2,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },{
            id:3,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },{
            id:4,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },{
            id:5,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        }
    ]

    function renderItem(itemData){
        return(
            <Indent {...itemData.item}/>
        )
    }

    const [create,setCreate]=useState(false)

  return (
    
        <SafeAreaView>
          <HeadIcon/>
      <CatHead title="Indent Request" />
      {!create &&
      <>
      
      <FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderItem}/>
      </>}
      {
        create &&
        <>
        <Text>Create Indent or Upload file</Text>
        <View style={styles.cont1}>
            <View style={styles.cont2}>
                <View>
                    <Text>Medicine Description</Text>
                    <Dialog></Dialog>
                </View>
                <View>
                    <Text>UOM</Text>
                    <Text>PKT</Text>
                </View>
                <View>
                    <Text>Qty</Text>
                    <Input/>
                </View>
               
            </View>
            <View style={{width:180,}}>
            <Button title={'Add Line'}/></View>
        </View>
       
        <Button title={'Submit Indent'} onPress={()=>setCreate(false)}/>
        </>
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.p1,
    margin: 10,
    marginHorizontal: 150,
    borderRadius: 18,
  },
  cont2:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },cont1:{
    margin:8,
    padding:4,
    borderWidth:4,
    borderRadius:10,
    borderColor:GlobalStyles.colors.p3
  }
});
