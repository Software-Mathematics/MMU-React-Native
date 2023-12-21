import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../Styles/LightMode';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Dialog from 'react-native-dialog';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import DropdownInput from './DropdownInput';
import Button from './Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-virtualized-view';

export default function ResultTile({
  name,
  age,
  ID,
  mob,
  village,
  DocType,
  DocNo,
}) {
  const [isPressed, setPressed] = useState(false);

  const [medicne, setMedicine] = useState(false);
  const [line, setLine] = useState(false);
  const [med, setMed] = useState([]);
  const addMedicine = () => {
    setMedicine(!medicne);
  };
  const addLine = () => {
    setLine(!line);
  };
  const document = [
    {label: 'Drv License', value: 'driving'},
    {label: 'PAN Card', value: 'pan'},
    {label: 'Adhaar Card', value: 'adhaar'},
    {label: 'Ration Card', value: 'ration'},
  ];
  const medicineList = [
    {label: 'BComplex', value: 'CAP'},
    {label: 'Cough Syrup', value: '100ML'},
    {label: 'Ecosrine', value: 'FamotiDINE'},
    {label: 'GAMA Benzene', value: '100ML'},
  ];
  const frequency = [
    {label: 'BD', value: 'bd'},
    {label: 'OD', value: 'od'},
    {label: 'TDS', value: 'tds'},
    {label: 'SOS as per need', value: 'sos'},
    {label: 'HS - Night', value: 'hs'},
    {label: 'BBF(Before Breakfast)', value: 'bbf'},
    {label: 'QID', value: 'qid'},
    {label: 'STAT', value: 'stat'},
  ];

  const handleButtonClick = () => {
    const componentId = med.length + 1;
    setMed([...med, {id: componentId}]);
  };

  const renderComponent = ({item}) => (
    <Pressable
      onPress={addLine}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 4,
        borderRadius: 16,
        borderColor: GlobalStyles.colors.p3,
        margin: responsiveHeight(0.5),
        padding: responsiveHeight(0.5),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 4,
          borderRadius: 16,
          borderColor: GlobalStyles.colors.p3,
          margin: responsiveHeight(0.5),
          padding: responsiveHeight(0.5),
        }}>
        <Text
          style={{
            color: GlobalStyles.colors.p1,
            fontWeight: '700',
            fontSize: 16,
            marginRight: responsiveWidth(8),
          }}>
          Medicine
        </Text>
        <AntDesign name="down" size={15} />
      </View>
      <View
        style={[
          styles.buttonView,
          {
            width: responsiveHeight(10),
            backgroundColor: GlobalStyles.colors.p1,
            margin: 4,
            padding: responsiveHeight(1),
            paddingHorizontal: responsiveHeight(2),
            borderRadius: 20,
            alignItems: 'center',
          },
        ]}
        onPress={addLine}>
        <Text style={[styles.buttonText]}>Medicine</Text>
      </View>
    </Pressable>
  );

  const [dose, setDose] = useState('');

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
  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setPressed(!isPressed);
          }}>
          <Icon
            name="caret-down-circle"
            color={GlobalStyles.colors.p1}
            size={32}
          />
        </Pressable>
        <View>
          <View style={styles.subCont}>
            <View>
              <Text style={styles.subHead}>Name:</Text>
            </View>
            <View>
              <Text style={styles.subDetail}>{name}</Text>
            </View>
          </View>
          <View style={styles.subCont}>
            <Text style={styles.subHead}>Age:</Text>
            <Text style={styles.subDetail}>{age}</Text>
          </View>
        </View>
      </View>
      {isPressed && (
        <>
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.buttonView} onPress={addMedicine}>
              <Text style={styles.buttonText}>Add Medicine</Text>
            </Pressable>
          </View>
        </>
      )}

      <Dialog.Container
        visible={!!medicne}
        contentStyle={{
          height: responsiveHeight(90),
          width: responsiveWidth(90),
          paddingBottom: 105,
          alignItems: 'center',
          borderColor: GlobalStyles.colors.p3,
          borderWidth: 4,
          backgroundColor: 'white',
        }}>
        <Dialog.Description>
          <ScrollView style={{}}>
            <Pressable
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginBottom: responsiveHeight(5),
              }}
              onPress={addMedicine}>
              <MaterialIcons
                name="cancel"
                color={GlobalStyles.colors.p1}
                size={24}
              />
            </Pressable>
            <View style={styles.dialog}>
              <Text style={styles.detail}>Disease</Text>
              <DropdownInput
                data={document}
                style={{width: responsiveHeight(20)}}
              />
            </View>
            <View
              style={[
                styles.dialog,
                {flexDirection: 'column', alignItems: 'flex-start'},
              ]}>
              <Text style={styles.detail}>Remark:</Text>
              <View
                style={[
                  styles.input,
                  {
                    marginTop: responsiveHeight(2),
                    height: responsiveHeight(10),
                    width: responsiveWidth(60),
                  },
                ]}>
                <TextInput style={{height: responsiveHeight(6)}} />
              </View>
            </View>
            <View
              style={[
                {marginBottom: responsiveHeight(4), flexDirection: 'column'},
              ]}>
              <Text style={styles.detail}>Medicine</Text>
              <View
                style={{
                  borderColor: GlobalStyles.colors.p3,
                  borderWidth: 3.5,
                  justifyContent: 'flex-end',
                  
                  marginVertical: responsiveHeight(2),
                  borderRadius: 10,
                }}>
                <FlatList
                  data={med}
                  renderItem={renderComponent}
                  keyExtractor={item => item.id.toString()}
                />
                <Pressable
                  style={[styles.buttonView, {width: responsiveHeight(10)}]}
                  onPress={addLine}>
                  <Text style={[styles.buttonText]}>Add Line</Text>
                </Pressable>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable style={[styles.buttonView]} onPress={showDatePicker}>
                <Text style={[styles.buttonText, {fontSize: 16}]}>
                  Select FoolowUp Date
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
            <Button title={'Submit Prescription'} />
          </ScrollView>
        </Dialog.Description>

        {/* 2nd container */}

        <Dialog.Container
          visible={!!line}
          contentStyle={{
            height: responsiveHeight(75),
            width: responsiveWidth(90),
            paddingBottom: 105,
            alignItems: 'center',
            borderColor: GlobalStyles.colors.p3,
            borderWidth: 4,
            backgroundColor: 'white',
          }}>
          <Dialog.Description>
            <View style={{}}>
              <Pressable
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginBottom: responsiveHeight(5),
                }}
                onPress={addLine}>
                <MaterialIcons
                  name="cancel"
                  color={GlobalStyles.colors.p1}
                  size={24}
                />
              </Pressable>
              <View style={styles.dialog}>
                <Text style={styles.detail}>Medicine</Text>
                <DropdownInput
                  data={medicineList}
                  style={{width: responsiveHeight(20)}}
                />
              </View>
              <View style={styles.dialog}>
                <Text style={styles.detail}>Frequency</Text>
                <DropdownInput
                  data={frequency}
                  style={{width: responsiveHeight(20)}}
                />
              </View>
              <View style={styles.dialog}>
                <Text style={styles.detail}>UOM</Text>
                <Text style={styles.detail}>UOM</Text>
              </View>
              <View style={styles.dialog}>
                <Text style={styles.detail}>Form</Text>
                <Text style={styles.detail}>Form</Text>
              </View>
              <View style={styles.dialog}>
                <Text style={styles.detail}>Dose</Text>
                <TextInput
                  style={styles.input}
                  value={dose}
                  onChangeText={txt => {
                    setDose(txt);
                  }}
                />
              </View>
              <View style={styles.dialog}>
                <Text style={styles.detail}>Duration Days</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Pressable
                  style={[styles.buttonView, {width: responsiveHeight(10)}]}
                  onPress={handleButtonClick}>
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </Dialog.Description>
        </Dialog.Container>
      </Dialog.Container>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderTopWidth: 0.75,
    paddingTop: 10,
  },
  subCont: {
    flexDirection: 'row',
    marginLeft: 16,
    // justifyContent:'space-between',
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
  detail: {
    color: GlobalStyles.colors.p1,
    fontSize: 15,
    fontWeight: '600',
    marginRight: responsiveHeight(4),
  },
  dialog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
    alignItems: 'center',
  },
  input: {
    borderColor: GlobalStyles.colors.p3,
    borderWidth: 3.5,
    width: responsiveHeight(20),
    height: responsiveHeight(4),
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  component: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
