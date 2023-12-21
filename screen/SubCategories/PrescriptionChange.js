import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import HeadIcon from '../../component/HeadIcon';
import CatHead from '../../component/CatHead';
import {GlobalStyles} from '../../Styles/LightMode';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../component/Button';
import {SelectList} from 'react-native-dropdown-select-list';
export default function PrescriptionChange({route}) {
  const {name, age, prescription} = route.params;
  const document = [
    {labe: 'Drv License', value: 'driving'},
    {labe: 'PAN Card', value: 'pan'},
    {labe: 'Adhaar Card', value: 'adhaar'},
    {labe: 'Ration Card', value: 'ration'},
  ];
  return (
    <SafeAreaView>
      <HeadIcon />
      <CatHead title={'Prescription Change Request'} />
      <ScrollView>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setPressed(!isPressed);
          }}
          style={{
            marginHorizontal: responsiveHeight(1),
          }}>
          <AntDesign name="down" color={GlobalStyles.colors.p1} size={32} />
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

          <View style={styles.subCont}>
            <Text style={styles.subHead}>Prescription:</Text>

            <Text style={styles.subDetail}>{prescription}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: responsiveHeight(1),
        }}>
        <Text style={styles.suggestionHead}>Medicine Prescribed:</Text>
        <Text
          style={[
            styles.suggestionHead,
            {
              width: responsiveHeight(25),
            },
          ]}>
          Syp Ferric Amminimium(160mg)+Vit B12 + Folic acid(0.5mg)
        </Text>
      </View>
      <Text
        style={[
          styles.suggestionHead,
          {
            marginHorizontal: responsiveHeight(1),
          },
        ]}>
        Suggestions
      </Text>
      <View
        style={{
          flexDirection: 'row',
         
          marginHorizontal: responsiveHeight(1),
        }}>
        <View style={{
            marginRight:responsiveHeight(2)
        }}>
          <Text style={styles.suggestionHead}>Medicine Description:</Text>
          <View
            style={{
              marginTop: responsiveHeight(1),
              width: responsiveHeight(25),
              
            }}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={document}
              save="value"
              boxStyles={{height: responsiveHeight(5), alignItems: 'center',borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.suggestionHead}>UOM</Text>
          <Text style={styles.suggestionHead}>NA</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: responsiveHeight(1),
          paddingBottom: responsiveHeight(1),
          borderBottomWidth: 1.5,
          borderColor: GlobalStyles.colors.p1,
          marginTop:responsiveHeight(1)
        }}>
        <View>
          <Text style={styles.suggestionHead}>Frequency</Text>
          <View
            style={{
              marginTop: responsiveHeight(1),
              width: responsiveHeight(20),
              
            }}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={document}
              save="value"
              boxStyles={{height: responsiveHeight(5), alignItems: 'center',borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.suggestionHead}>Duration</Text>

          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.suggestionHead}>Dose</Text>

          <TextInput style={styles.input} />
        </View>
      </View>

      {/* 2nd component */}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: responsiveHeight(1),
        }}>
        <Text style={styles.suggestionHead}>Medicine Prescribed:</Text>
        <Text
          style={[
            styles.suggestionHead,
            {
              width: responsiveHeight(25),
            },
          ]}>
          Syp Ferric Amminimium(160mg)+Vit B12 + Folic acid(0.5mg)
        </Text>
      </View>
      <Text
        style={[
          styles.suggestionHead,
          {
            marginHorizontal: responsiveHeight(1),
          },
        ]}>
        Suggestions
      </Text>
      <View
        style={{
          flexDirection: 'row',
         
          marginHorizontal: responsiveHeight(1),
        }}>
        <View style={{
            marginRight:responsiveHeight(2)
        }}>
          <Text style={styles.suggestionHead}>Medicine Description:</Text>
          <View
            style={{
              marginTop: responsiveHeight(1),
              width: responsiveHeight(25),
              
            }}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={document}
              save="value"
              boxStyles={{height: responsiveHeight(5), alignItems: 'center',borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.suggestionHead}>UOM</Text>
          <Text style={styles.suggestionHead}>NA</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: responsiveHeight(1),
          paddingBottom: responsiveHeight(1),
          borderBottomWidth: 1.5,
          borderColor: GlobalStyles.colors.p1,
          marginTop:responsiveHeight(1)
        }}>
        <View>
          <Text style={styles.suggestionHead}>Frequency</Text>
          <View
            style={{
              marginTop: responsiveHeight(1),
              width: responsiveHeight(20),
              
            }}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={document}
              save="value"
              boxStyles={{height: responsiveHeight(5), alignItems: 'center',borderWidth:3.5,borderColor:GlobalStyles.colors.p3}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.suggestionHead}>Duration</Text>

          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.suggestionHead}>Dose</Text>

          <TextInput style={styles.input} />
        </View>
      </View>
      <Button title={'Submit'} style={{marginBottom:responsiveHeight(1)}}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: responsiveHeight(1),

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
  input: {
    borderWidth: 3.5,
    borderColor: GlobalStyles.colors.p3,
    borderRadius: 16,
    width: responsiveHeight(8),
    justifyContent: 'center',
    height: responsiveHeight(5),
    backgroundColor: '#ffff',
    paddingHorizontal: responsiveHeight(2),
    marginTop: responsiveHeight(1),
  },
  suggestionHead: {
    color: GlobalStyles.colors.p1,
    fontWeight: '800',
    marginTop: responsiveHeight(1),
  },
});
