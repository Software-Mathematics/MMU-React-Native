import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-screens';
import SearchTab from '../../component/SearchTab';
import {GlobalStyles} from '../../Styles/LightMode';
import Result from '../../component/Result';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function LabResult() {
  const [array, setData] = useState([]);
  useEffect(() => {
    async function LabResultApi() {
      try {
        function createObject(
          name,
          village,
          patientid,
          age,
          predid,
          doctor,
          date,
          labTechnician,
          disease,
          uom,
          range,
          value,
        ) {
          return {
            name: name,
            village: village,
            id: patientid,
            age: age,
            ID: predid,
            date: date,
            doctor: doctor,
            labTechnician: labTechnician,
            disease: disease,
            uom: uom,
            range: range,
            value: value,
          };
        }

        function add() {}
        const data = [];
        const response = await axios.get(
          'https://api.thehansfoundation.org/aggregation-service/api/Aggregation/v1/getLabTestByVisit?recstatus=PRESCRIBED&mmucode=SI-17251',
        );
        const arr = response.data.data.labTestAggregationList.map(item => item);

        arr.forEach(item => {
          let obj = {};
          (obj.village = item.patient.village),
            (obj.name = item.patient.name),
            (obj.id = item.patient.patientid),
            (obj.age = item.patient.age),
            (obj.ID = item.visit.presid),
            // item.labtestslist.createdby,
            (obj.date = item.patient.createddate),
            // item.labtestslist.,

            item.labtestslist.map(item => {
              (obj.doctor = item.createdby),
                (obj.labTechnician = item.modifiedby);
              item.investigationlist.forEach(item => {
                (obj.disease = item.name),
                  (obj.uom = item.uom),
                  (obj.range = item.range),
                  (obj.value = item.value);
              });
            });
          data.push(obj);
        });
        setTimeout(() => {
          setData(data);
        }, 1);
      } catch (error) {
        console.log(error);
      }
    }
    LabResultApi();
  }, []);

  function renderDetail(itemData) {
    return <Result {...itemData.item} />;
  }
  return (
    <SafeAreaView>
      <HeadIcon />
      <CatHead title="Search Lab Results" />
      <SearchTab />
      <FlatList
        data={array}
        keyExtractor={item => item.ID}
        renderItem={renderDetail}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    margin: 10,
  },
});
