import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../Styles/LightMode';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function PrescriptionTile({name, age, prescription}) {
  const [isPressed, setPressed] = useState(false);
  const navigation = useNavigation();

  
  return (
    <>
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
          {isPressed && 
          <>
            <View style={styles.subCont}>
              <Text style={styles.subHead}>Prescription:</Text>

              <Text style={styles.subDetail}>{prescription}</Text>
            </View>
            <View style={styles.subCont}>
            <Text style={styles.subHead}>Status:</Text>

            <Text style={styles.subDetail}>PRESCRIBED</Text>
          </View>
          </>
          }
        </View>
      </View>
      {isPressed && (
        <View style={styles.drop}>
          <View style={{
            marginBottom:responsiveHeight(1)

          }}>
            <View style={styles.headView}>
              <Text style={styles.headText}>Med Desc</Text>
              <Text style={styles.headText}>Freq</Text>
              <Text style={styles.headText}>Dur.</Text>
              <Text style={styles.headText}>UOMc</Text>
              <Text style={styles.headText}>Qty.</Text>
              <Text style={styles.headText}>Given</Text>
            </View>
            <View style={styles.detailView}>
              <View>
                <Text style={[styles.detailText]}>Syp Ferric</Text>
                <Text style={styles.detailText}>Amminium</Text>
              </View>
              <Text style={styles.detailText}>OD</Text>
              <Text style={styles.detailText}>1</Text>
              <Text style={styles.detailText}>NA</Text>
              <Text style={styles.detailText}>1.0</Text>
              <View
                style={{
                  alignItems: 'center',
                  width: responsiveHeight(7.5),
                }}>
                <TextInput
                  style={{
                    borderWidth: 3.5,
                    borderColor: GlobalStyles.colors.p3,
                    borderRadius: 16,
                    width: responsiveHeight(5),
                    justifyContent: 'center',
                    height: responsiveHeight(4),
                    backgroundColor: '#ffff',
                    paddingHorizontal: responsiveHeight(2),
                  }}
                />
              </View>
            </View>
          </View>
          <Text style={{
            fontWeight:'700',
            color:GlobalStyles.colors.p1,
            marginBottom:responsiveHeight(1)

          }}>Form</Text>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:responsiveHeight(1)
          }}>
          <Text style={{
            fontWeight:'700',
            color:GlobalStyles.colors.p1,
            marginRight:responsiveHeight(1),
            justifyContent:'space-between'
          }}>Batch</Text>
          <View style={{
            borderWidth:3.5,
            borderColor:GlobalStyles.colors.p3,
            padding:responsiveHeight(1),
            flex:1,
            backgroundColor:'#ffff',
            borderRadius:16
          }}>
            <Text>Time stamp</Text>
          </View>
          </View>
          <View style={styles.headView}>
              <Text style={styles.headText}>Med Desc</Text>
              <Text style={styles.headText}>Freq</Text>
              <Text style={styles.headText}>Dur.</Text>
              <Text style={styles.headText}>UOMc</Text>
              <Text style={styles.headText}>Qty.</Text>
              <Text style={styles.headText}>Given</Text>
            </View>
            <View style={styles.detailView}>
              <View>
                <Text style={[styles.detailText]}>Syp Ferric</Text>
                <Text style={styles.detailText}>Amminium</Text>
              </View>
              <Text style={styles.detailText}>OD</Text>
              <Text style={styles.detailText}>1</Text>
              <Text style={styles.detailText}>NA</Text>
              <Text style={styles.detailText}>1.0</Text>
              <View
                style={{
                  alignItems: 'center',
                  width: responsiveHeight(7.5),
                }}>
                <TextInput
                  style={{
                    borderWidth: 3.5,
                    borderColor: GlobalStyles.colors.p3,
                    borderRadius: 16,
                    width: responsiveHeight(5),
                    justifyContent: 'center',
                    height: responsiveHeight(4),
                    backgroundColor: '#ffff',
                    paddingHorizontal: responsiveHeight(2),
                  }}
                />
              </View>
            </View>
          <Text style={{
            fontWeight:'700',
            color:GlobalStyles.colors.p1,
            marginBottom:responsiveHeight(1)

          }}>Form</Text>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:responsiveHeight(1)
          }}>
          <Text style={{
            fontWeight:'700',
            color:GlobalStyles.colors.p1,
            marginRight:responsiveHeight(1),
            justifyContent:'space-between'
          }}>Batch</Text>
          <View style={{
            borderWidth:3.5,
            borderColor:GlobalStyles.colors.p3,
            padding:responsiveHeight(1),
            flex:1,
            backgroundColor:'#ffff',
            borderRadius:16
          }}>
            <Text>Time stamp</Text>
          </View>
          </View>
          <View style={styles.button}>
         <Pressable style={styles.buttonView}>
             <Text style={styles.buttonText}>Update</Text>
         </Pressable>
         <Pressable 
         onPress={()=>navigation.navigate('PrescriptionRequest',{
            name:name,
            age:age,
            prescription:prescription
         })}
         style={[
            styles.buttonView,{backgroundColor:GlobalStyles.colors.p1}
        ]}
         >
             <Text style={styles.buttonText}>Req. Change</Text>
         </Pressable>
     </View>
        </View>
      )}
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
  drop: {
    marginHorizontal: responsiveHeight(1),
    paddingTop: responsiveHeight(1.5),
  },
  headView: {
    flexDirection: 'row',
    // justifyContent:'space-between'
  },
  headText: {
    color: GlobalStyles.colors.p1,
    width: responsiveHeight(7.70),
    textAlign: 'center',
    fontWeight: '700',
  },
  detailView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  detailText: {
    color: GlobalStyles.colors.p1,
    width: responsiveHeight(7.70),
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonView:{
    backgroundColor:GlobalStyles.colors.p1,
    padding:responsiveHeight(1),
    borderRadius:16,
    paddingHorizontal:responsiveHeight(2)
},
button:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginVertical:responsiveHeight(2)
},
buttonText:{
    color:GlobalStyles.colors.p4,
    fontWeight:'600'
}
});
