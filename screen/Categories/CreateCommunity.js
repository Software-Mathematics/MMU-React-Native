import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {GlobalStyles} from '../../Styles/LightMode';

import {useState} from 'react';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import Button from '../../component/Button';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import DropdownInput from '../../component/DropdownInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function CreateCommunity1({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('dd:MM:YY');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + ':' + x1[1] + ':' + x1[0]);
    setSelectedDate(x1[2] + ':' + x1[1] + ':' + x1[0]);
    hideDatePicker();
  };
  const gender = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Prefer Not to tell', value: 'prefer'},
  ];

  const marital = [
    {label: 'Married', value: 'married'},
    {label: 'Unmarried', value: 'unmarried'},
    {label: 'Widow', value: 'widow'},
    {label: 'Widower', value: 'widower'},
    {label: 'Divorcee', value: 'divorcee'},
    {label: 'Separated', value: 'separated'},
    {label: 'Other', value: 'other'},
  ];

  const education = [
    {label: 'Under Graduate', value: 'undergraduate'},
    {label: 'PG', value: 'pg'},
    {label: 'No formal Edu', value: 'noformal'},
    {label: 'Graduate', value: 'Graduate'},
  ];

  const occupation = [
    {label: 'Govt Service', value: 'govtservice'},
    {label: 'Housewife', value: 'Student'},
    {label: 'Carpenter', value: 'carpenter'},
    {label: 'Software Engineer', value: 'software engineer'},
    {label: 'Pvt Service', value: 'pvt service'},
    {label: 'Self-Employed', value: 'self-employed'},
    {label: 'Agriculture', value: 'agriculture'},
    {label: 'Labour', value: 'labour'},
    {label: 'N/A', value: 'n/a'},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeadIcon />
      <CatHead title="Create Community" />
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.subCont}>
            <Text style={styles.subHead}>Name of SPO/VHW</Text>
            <TextInput style={styles.subDetail} />
          </View>

          <View style={styles.subCont}>
            <Text style={styles.subHead}>Village</Text>
            <DropdownInput data={gender} />
          </View>
          <View style={{
            flexDirection: 'row',
             alignItems: 'center',
             justifyContent:'space-evenly',
             marginTop:responsiveHeight(1)}}>
            <Pressable style={[styles.buttonView]} onPress={showDatePicker}>
              <Text style={[styles.buttonText, {fontSize: 16}]}>
                Date of Visit
              </Text>
            </Pressable>
            <Text
              style={{
                color: GlobalStyles.colors.p1,
                fontWeight: '800',
                marginLeft: responsiveHeight(2),
                fontSize: 14,
              }}>
              {selectedDate}
            </Text>
          </View>
          <View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={styles.subCont}>
            <Text style={styles.subHead}>Type of Visit</Text>
            <DropdownInput data={marital} />
          </View>

          <View style={styles.subCont}>
            <Text style={styles.subHead}>No. of Persons Me</Text>
            <TextInput style={styles.subDetail} />
          </View>
        </ScrollView>
      </View>
      {/* <View style={{justifyContent:'flex-end',width:300}}>
        <Button title={'Continue'}/></View> */}
      <View style={{justifyContent: 'flex-end'}}>
        <Pressable
          style={styles.view}
          onPress={() => navigation.navigate('Community2')}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subCont: {
    flexDirection: 'row',
    margin: 16,
    // justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  subHead: {
    marginRight: 40,
    width: 100,
    marginBottom: 8,
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
  },
  subDetail: {
    color: GlobalStyles.colors.p1,
    fontWeight: '600',
    borderWidth: 3.5,
    width: responsiveHeight(27),
    height: 50,
    borderRadius: 14,
    borderColor: GlobalStyles.colors.p3,
  },
  view: {
    backgroundColor: GlobalStyles.colors.p1,
    margin: 18,
    marginLeft: responsiveHeight(30),
    padding: Platform.OS === 'ios' ? responsiveHeight(2) : responsiveHeight(2),
    borderRadius: 16,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonView: {
    backgroundColor: GlobalStyles.colors.p1,
    margin: 4,
    padding: responsiveHeight(1),
    paddingHorizontal: responsiveHeight(2),
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: GlobalStyles.colors.p4,
    fontWeight: '700',
    fontSize: 12,
  },
});
