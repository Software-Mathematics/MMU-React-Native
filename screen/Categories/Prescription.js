import { SafeAreaView, StyleSheet,FlatList } from "react-native";
import CatHead from "../../component/CatHead";
import SearchTab from "../../component/SearchTab";
import HeadIcon from "../../component/HeadIcon";
import axios from 'axios';
import {useState, useEffect} from 'react';
import PrescriptionTile from "../../component/PrescriptionTile";
export default function Prescription(){
    const [array, setData] = useState([]);
    const [allData,setAllData]=useState([])
  useEffect(() => {
    async function LabResultApi() {
      try {
        const data = [];
        const response = await axios.get(
          'https://api.thehansfoundation.org/aggregation-service/api/Aggregation/v1/getPrescription?mmucode=SI-17251',
        );
        const arr = response.data.data.prescriptionAggregationDTOList.map(item => item);
        arr.forEach(item => {
          let obj = {};
          (obj.village = item.patient.village),
            (obj.name = item.prescription.name),
            (obj.id = item.patient.patientid),
            (obj.age = item.patient.age),
            (obj.ID = item.prescription.presid),
            (obj.mobile=item.patient.mobileno),
            (obj.address=item.patient.address),
            (obj.gender=item.patient.gender)
            item.doseslist.map(item => {
                // console.log(item.medicinename)
            });
          data.push(obj);
        // console.log(obj)
        });
        setTimeout(() => {
          setData(data);
          setAllData(data)
        }, 1);
      } catch (error) {
        console.log(error);
      }
    }
    LabResultApi();
  }, []);
  const onSearch=(txt)=>{
    if(txt==''){
      setData(allData)
    }
    else{
      let tempList=array.filter(item =>{
        return (item.mobile.toLowerCase().indexOf(txt.toLowerCase())>-1 ||
        item.id.toLowerCase().indexOf(txt.toLowerCase())>-1 ||item.age.toLowerCase().indexOf(txt.toLowerCase())>-1 ||
        item.name.toLowerCase().indexOf(txt.toLowerCase())>-1)
      })
      setData(tempList)
    }
    
    
  }

  function renderDetail(itemData) {
    return <PrescriptionTile {...itemData.item} />;
  }
    return(
        <SafeAreaView><HeadIcon/>
            <CatHead title={'Search Prescription'}/>
            <SearchTab place={'Search by Patient/Mobile NO.,Name'} onChangeText={(txt)=>{
              onSearch(txt)
            }}/>
            <FlatList
        data={array}
        keyExtractor={item => item.ID}
        renderItem={renderDetail}
      />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      margin: 10,
    },
  });