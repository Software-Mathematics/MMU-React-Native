import {View, Text, StyleSheet, Pressable, TextInput,} from 'react-native';
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
  const navigation = useNavigation();
  const [medicne, setMedicine] = useState(false);
  const [line, setLine] = useState(false);

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
          height: responsiveHeight(85),
          width: responsiveWidth(90),
          paddingBottom: 105,
          alignItems: 'center',
          borderColor:GlobalStyles.colors.p3,
          borderWidth:4,
          backgroundColor:'white'
        }}>
        <Dialog.Description>
          <View style={{}}>
            <Pressable
              style={{
                marginVertical: 10,
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
              <View style={styles.input} >
              <TextInput/></View>
            </View>
            <View style={styles.dialog}>
              <Text style={styles.detail}>Remark:</Text>
              <DropdownInput
                data={document}
                style={{width: responsiveHeight(20)}}
              />
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
                  height: responsiveHeight(7),
                  marginVertical: responsiveHeight(2),
                  borderRadius: 10,
                }}>
                <Pressable
                  style={[styles.buttonView, {width: responsiveHeight(10)}]}
                  onPress={addLine}>
                  <Text style={[styles.buttonText,]}>Add Line</Text>
                </Pressable>
              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',}}>
            <Pressable
                  style={[styles.buttonView, ]}
                  >
                  <Text style={[styles.buttonText,{fontSize:16}]}>Select FoolowUp Date</Text>
                </Pressable>
              <Text>dd:MM:YY</Text>
            </View>
            <Button title={'Submit Prescription'} />
          </View>
        </Dialog.Description>

        {/* 2nd container */}

        <Dialog.Container
        visible={!!line}
        contentStyle={{
          height: responsiveHeight(65),
          width: responsiveWidth(90),
          paddingBottom: 105,
          alignItems: 'center',
            borderColor:GlobalStyles.colors.p3,
            borderWidth:4,
            backgroundColor:'white'
        }}>
        <Dialog.Description>
          <View style={{}}>
            <Pressable
              style={{
                marginVertical: 10,
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
                data={document}
                style={{width: responsiveHeight(20)}}
              />
            </View>
            <View style={styles.dialog}>
              <Text style={styles.detail}>Frequency</Text>
              <DropdownInput
                data={document}
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
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.dialog}>
                <Text style={styles.detail}>Duration Days</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={{alignItems:'flex-end'}}>
            <Pressable
                  style={[styles.buttonView, {width: responsiveHeight(10)}]}
                  onPress={addLine}>
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
});
