import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CatHead from '../../component/CatHead';
import { GlobalStyles } from '../../Styles/LightMode';
import Stock from '../../component/Stock';
export default function StockStatus() {
    const dummy=[{
        id:1,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:2,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:3,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:4,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:5,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:6,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:7,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:8,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:9,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:10,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:11,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },{
        id:12,
        medicine:'anticold tablet 1*10-250mg',
        uom:'MG',
        consume:'10',
        qty:109
    },]

    function renderItem(itemData){
        return(
            <Stock {...itemData.item}/>
        )
    }
  return (
    <SafeAreaView>
      <CatHead title="Stock Status" />
      <View style={styles.container}>
       
          <Text style={styles.b1}>S.No.</Text>
    
          <Text style={styles.b2}>Medicine</Text>

   
          <Text style={styles.b3}>UOM</Text>
   
          <Text style={styles.b4}>15Days Consumed</Text>
    
          <Text style={styles.b5}>Qty</Text>
     
      </View>
      <FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderItem}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  b1: {
    width: 40,
    color:GlobalStyles.colors.p1,
    fontWeight:'900',
    fontSize:16
  },
  b2:{
    width:100,
    color:GlobalStyles.colors.p1,
    fontWeight:'900',
    fontSize:16
  },
  b3:{
    width:50,
    color:GlobalStyles.colors.p1,
    fontWeight:'900',
    fontSize:16
  },
  b4:{
    width:100,
    color:GlobalStyles.colors.p1,
    fontWeight:'900',
    fontSize:16
  },b5:{
    width:40,
    color:GlobalStyles.colors.p1,
    fontWeight:'900',
    fontSize:16
  }
});
