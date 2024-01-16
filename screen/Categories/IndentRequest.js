import {StyleSheet, View, Text, FlatList, Pressable,SafeAreaView} from 'react-native';
import CatHead from '../../component/CatHead';
import SearchTab from '../../component/SearchTab';
import {GlobalStyles} from '../../Styles/LightMode';
import Indent from '../../component/Indent';
import { useState,useEffect } from 'react';
import { Dialog } from 'react-native-paper';
import Input from '../../component/Input';
import Button from '../../component/Button';

import HeadIcon from '../../component/HeadIcon';
import axios from 'axios';
export default function IndentRequest() {
    const [array, setData] = useState([]);
  useEffect(() => {
    async function LabResultApi() {
      try {
        
        const data = [];
        const response = await axios.get(
          'https://api.thehansfoundation.org/medrequisitiongen-service/api/MedRequisitionGen/v1/getRequisitionAggregation?mmucode=SI-17251&recstatus=OPEN',
        );
        const arr = response.data.data.medRequisitionAggregationList.map(item => item);

        arr.forEach(item => {
          let obj = {};
            item.medrequisitiongendtoList.map(item => {
            (obj.ID = item.mrnumber),
            (obj.submit = item.createdby),
            (obj.date = item.createddate),
            (obj.status = item.recstatus)
            });
          data.push(obj);
        });
        setTimeout(() => {
          setData(data);
        }, 1);
        // console.log(arr)
      } catch (error) {
        console.log(error);
      }
    }
    LabResultApi();
  }, []);

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
      
      <FlatList data={array} keyExtractor={(item)=>item.ID} renderItem={renderItem}/>
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
