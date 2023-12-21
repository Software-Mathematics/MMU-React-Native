import { FlatList, SafeAreaView, StyleSheet, Text,View ,ScrollView} from "react-native";
import SearchTab from "../../component/SearchTab";
import { GlobalStyles } from "../../Styles/LightMode";
import TestTile from "../../component/TestTile";
import CatHead from "../../component/CatHead";
import HeadIcon from "../../component/HeadIcon";

 const dummy=[
    {id:1,name:'abcd',age:30,prescription:'PRSI-34342334345343'},
    {id:2,name:'abcd',age:30,prescription:'PRSI-3434211114343'},
    {id:3,name:'abcd',age:30,prescription:'PRSI-898543344343'},
    {id:4,name:'abcd',age:30,prescription:'PRSI-4543344343'},
    {id:5,name:'abcd',age:30,prescription:'PRSI-3532334535'},
    {id:6,name:'abcd',age:30,prescription:'PRSI-343423344343'}
 ]

 function renderDetail(itemData){
    return(
        <TestTile {...itemData.item}/>
    )
}
export default function LabTest(){
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title='Lab Test Queue' style={{borderBottomWidth: 0}}/>
            <View>
          
<FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderDetail}/></View>
        </SafeAreaView>
    )
}
