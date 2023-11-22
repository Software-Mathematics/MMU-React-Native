import { FlatList, StyleSheet, Text,View } from "react-native";
import SearchTab from "../../component/SearchTab";
import { GlobalStyles } from "../../Styles/LightMode";
import Patient from "../../component/Patient";
import CatHead from "../../component/CatHead";
 const dummy=[
    {id:1,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:2,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:3,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:4,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:5,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:6,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954}
 ]

 function renderDetail(itemData){
    return(
        <Patient {...itemData.item}/>
    )
}
export default function SearchPatient(){
    return(
        <View>
            <CatHead title='Search Patient'/>
            <SearchTab/>
<FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderDetail}/>
        </View>
    )
}
