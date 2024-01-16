import { FlatList, SafeAreaView, StyleSheet, Text,View ,} from "react-native";
import SearchTab from "../../component/SearchTab";
import { GlobalStyles } from "../../Styles/LightMode";
import { useState,useEffect } from "react";
import axios from "axios";
import CatHead from "../../component/CatHead";
import HeadIcon from "../../component/HeadIcon";
import ResultTile from "../../component/ResultTile";

export default function ResultAwaited(){
    const [array, setData] = useState([]);
    useEffect(() => {
      async function LabResultApi() {
        try {
          
          const data = [];
          const response = await axios.get(
            'https://api.thehansfoundation.org/aggregation-service/api/Aggregation/v1/get?mmucode=SI-17251&recstatus=RESULT_AWAITED',
          );
          const arr = response.data.data.visitAggregationDTOList.map(item => item);
   
          arr.forEach(item => {
            let obj = {};
              item.prescriptionlist.map(item => {
              (obj.id= item.id),
              (obj.name = item.name),
              (obj.age = item.age)
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
    function renderDetail(itemData){
       return(
           <ResultTile {...itemData.item}/>
       )
   }
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title='Patient Result Awaited'/>
            <SearchTab/><View>
          
<FlatList data={array} keyExtractor={(item)=>item.id} renderItem={renderDetail}/></View>
        </SafeAreaView>
    )
}
