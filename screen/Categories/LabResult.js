import { FlatList, SafeAreaView, StyleSheet, Text,View } from "react-native";
import { SearchBar } from "react-native-screens";
import SearchTab from "../../component/SearchTab";
import { GlobalStyles } from "../../Styles/LightMode";
import Result from "../../component/Result";
import CatHead from "../../component/CatHead";
import HeadIcon from "../../component/HeadIcon";
const dummy=[
    {
        id:1,
        name:'abcd',
        age:45,
        village:'rampur',
        ID:49330,
        doctor:'dr. a',
        date:"2020-3-3"
    },
    {
        id:2,
        name:'abcd',
        age:45,
        village:'rampur',
        ID:49330,
        doctor:'dr. a',
        date:"2020-3-3"
    },
    {
        id:3,
        name:'abcd',
        age:45,
        village:'rampur',
        ID:49330,
        doctor:'dr. a',
        date:"2020-3-3"
    },
    {
        id:4,
        name:'abcd',
        age:45,
        village:'rampur',
        ID:49330,
        doctor:'dr. a',
        date:'2020-3-3'
    }
]

function renderDetail(itemData){
    return(
        <Result {...itemData.item}/>
    )
}
export default function LabResult(){
    return(
        <SafeAreaView>
            <HeadIcon/>
        <CatHead title='Search Lab Results'/>
            <SearchTab/>
<FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderDetail}/>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        borderBottomWidth:0.5,
        margin:10
    }
})