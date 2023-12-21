import { FlatList, SafeAreaView, StyleSheet, Text,View } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import CatHead from "../../component/CatHead";
import HeadIcon from "../../component/HeadIcon";
import CommunityTile from "../../component/CommunityTile";

 const dummy=[
    {id:1,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0},
    {id:2,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0},
    {id:3,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0},
    {id:4,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0},
    {id:5,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0},
    {id:6,name:'abcd',village:'Gurjugarji',activity:'string',participants:0,persons:0,due:0,opd:0,followup:0,data:'2023-1-1',hhs:0}
 ]

 function renderDetail(itemData){
    return(
        <CommunityTile {...itemData.item}/>
    )
}
export default function CommunityQueue(){
    return(
        <SafeAreaView>
            <ScrollView>
            <HeadIcon/>
            <CatHead title='Community Queue' style={{borderBottomWidth:0}}/>
            <View>
          
<FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderDetail}/></View>
</ScrollView>
        </SafeAreaView>
    )
}
