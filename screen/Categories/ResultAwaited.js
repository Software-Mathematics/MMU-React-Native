import { FlatList, SafeAreaView, StyleSheet, Text,View ,} from "react-native";
import SearchTab from "../../component/SearchTab";
import { GlobalStyles } from "../../Styles/LightMode";

import CatHead from "../../component/CatHead";
import HeadIcon from "../../component/HeadIcon";
import ResultTile from "../../component/ResultTile";

 const dummy=[
    {id:1,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:2,name:'abcd',age:30,ID:345672,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:3,name:'abcd',age:30,ID:345679,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:4,name:'abcd',age:30,ID:345674,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:5,name:'abcd',age:30,ID:344545,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954},
    {id:6,name:'abcd',age:30,ID:345678,mob:3793983624,village:'Rajasthan',DocType:'Adhaar Card',DocNo:5678954}
 ]

 function renderDetail(itemData){
    return(
        <ResultTile {...itemData.item}/>
    )
}
export default function ResultAwaited(){
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title='Patient Result Awaited'/>
            <SearchTab/><View>
          
<FlatList data={dummy} keyExtractor={(item)=>item.id} renderItem={renderDetail}/></View>
        </SafeAreaView>
    )
}
