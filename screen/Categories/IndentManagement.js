import {StyleSheet, View, Text, FlatList, Pressable, SafeAreaView, ScrollView} from 'react-native';
import CatHead from '../../component/CatHead';
import SearchTab from '../../component/SearchTab';
import {GlobalStyles} from '../../Styles/LightMode';
import Indent from '../../component/Indent';
import { useState } from 'react';
import { Dialog, TextInput } from 'react-native-paper';
import Input from '../../component/Input';
import Button from '../../component/Button';
import HeadIcon from '../../component/HeadIcon';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function IndentManagement() {
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
        },{
            id:6,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },{
            id:7,
            ID:'rhd-373',
            submit:'Rajesh',
            date:'2020-03-03',
            status:'RECIEVED'
        },{
            id:8,
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
    const [update,setUpdate]=useState(false)
    const [count, setCount] = useState(0);

 const handleButtonClick = () => {
    setCount(count + 1);
 };
 
 const createComponent = (index) => {
  return (
    <View 
    key={index}
    style={[styles.cont2,{marginTop:responsiveHeight(-1)}]}>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}
                >
                    <View 
                    style={{
                      alignItems:'center',
                      borderWidth:3.5,
                      borderColor:GlobalStyles.colors.p3,
                      paddingVertical:responsiveHeight(1),
                      paddingHorizontal:responsiveHeight(7),
                      borderRadius:10
                      }}>
                    <Text>Select Item</Text>
                    </View>
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    
                    <Text
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>PKT</Text>
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    
                    <View style={{
                      alignItems:'center',
                      borderWidth:3.5,
                      borderColor:GlobalStyles.colors.p3,
                      height:responsiveHeight(5),
                      borderRadius:10,
                      backgroundColor:'#f5f5f5'
                    }}>
                      <TextInput style={{
                        height:responsiveHeight(3),
                        
                      }}/>
                    </View>
                </View>
               
            </View>
  );
};

  return (
    
        <SafeAreaView><HeadIcon/>
      <CatHead title="Indent Management" />
      {(!create && !update) &&
      <>
      <SearchTab place="Search Indent" />
      <Pressable style={styles.container} onPress={()=>setCreate(true)}>
        <Text
          style={{
            margin: 10,
            fontWeight: 'bold',
            color: GlobalStyles.colors.p4,
          }}>
          Create New
        </Text>
      </Pressable>
      <FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderItem}/>
      </>}
      {
        create &&
        <ScrollView style={{marginBottom:responsiveHeight(12)}}>
        <Text
        style={{
          color:GlobalStyles.colors.p1,
          fontWeight:'800',
          marginLeft:responsiveHeight(1.5),
          fontSize:16
        }}
        >Create Indent or Upload file</Text>
        <View style={styles.cont1}>
            <View style={styles.cont2}>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}
                >
                    <Text 
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>Medicine Description</Text>
                    
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    <Text
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>UOM</Text>
                    
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    <Text
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>Qty</Text>
                    
                </View>
               
            </View>
            {Array.from({ length: count }, createComponent)}
            <View style={{width:180,}}>
            <Button title={'Add Line'} onPress={handleButtonClick}/></View>
        </View>
       
        <Button title={'Submit Indent'} onPress={()=>setCreate(false)}/>
        </ScrollView>
      }

      {
        update &&
        <>
        
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
