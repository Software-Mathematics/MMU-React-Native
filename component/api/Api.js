import axios from 'axios';
export default async function LabResultApi() {
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
        doctor: doctor,
        date: date,
        labTechnician: labTechnician,
        disease: disease,
        uom: uom,
        range: range,
        value: value,
      };
    }
    const data = [];
    const response = await axios.get(
      'https://api.thehansfoundation.org/aggregation-service/api/Aggregation/v1/getLabTestByVisit?recstatus=PRESCRIBED&mmucode=SI-17251',
    );
    const arr = response.data.data.labTestAggregationList.map(item => item);

    arr.forEach(item => {
      data.push(
        createObject(
          item.patient.village,
          item.patient.name,
          item.patient.patientid,
          item.patient.age,
          item.visit.presid,
          item.labtestslist.createdby,
          item.patient.createddate,
          item.labtestslist.modifiedby,
        ),
      );
    });
    arr.forEach(item => {
      item.labtestslist.map(item =>
        item.investigationlist.forEach(item => {
          data.push(item.name, item.uom, item.range, item.value);
        }),
      );
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log('roor');
  }
}
