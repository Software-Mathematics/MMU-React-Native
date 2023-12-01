import {StyleSheet, Text, TextInput, View,Pressable, SafeAreaView} from 'react-native';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import Button from '../../component/Button';
import {GlobalStyles} from '../../Styles/LightMode';
import {responsiveHeight} from 'react-native-responsive-dimensions';
export default function EmergencyDetails({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <HeadIcon />
        <CatHead title={'New Beneficiary Registration'} />
        <Text
          style={[
            styles.head,
            {
              fontSize: 18,
              marginLeft: responsiveHeight(2),
              marginTop: responsiveHeight(2),
            },
          ]}>
          Emergency Contact Details
        </Text>
        <View style={styles.container}>
          <View style={styles.heading}>
            <View style={styles.View}>
              <Text style={styles.head}>Name:</Text>
            </View>
            <View style={styles.View}>
              <Text style={styles.head}>Mobile No:</Text>
            </View>
            <View style={[styles.View, {height: responsiveHeight(12)}]}>
              <Text style={styles.head}>Address:</Text>
            </View>
          </View>
          <View>
            <View style={styles.View}>
              <TextInput style={styles.detail} />
            </View>
            <View style={styles.View}>
              <TextInput style={styles.detail} />
            </View>
            <View style={styles.View}>
              <TextInput
                style={[styles.detail, {height: responsiveHeight(12)}]}
              />
            </View>
          </View>
        </View>
        <Button title={'Create Benificiary'} />
      </View>
      <View style={{justifyContent:'flex-end',marginTop:responsiveHeight(10)}}>
        <Pressable style={styles.view} onPress={()=>navigation.goBack()}>
            <Text style={styles.text}>Prev</Text>
        </Pressable></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 5,
    marginBottom:responsiveHeight(-10),
    borderColor: GlobalStyles.colors.p1,
    justifyContent: 'space-between',
    // width:100
  },
  heading: {
    marginRight: 50,
    marginBottom: responsiveHeight(6),
  },
  head: {
    color: GlobalStyles.colors.p1,
    fontWeight: '900',
    fontSize: 15,
    //    height:responsiveHeight(14)
  },
  detail: {
    color: GlobalStyles.colors.p1,
    fontWeight: '600',
    borderWidth: 3.5,
    width: responsiveHeight(27),
    height: responsiveHeight(8),
    borderRadius: 14,
    borderColor: GlobalStyles.colors.p3,
  },
  View: {
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
  },view:{
    backgroundColor:GlobalStyles.colors.p1,
    margin:18,
    marginRight:responsiveHeight(36),
    padding:Platform.OS==='ios'?responsiveHeight(2): responsiveHeight(2),
    borderRadius:16,
    alignItems:'flex-start',
    justifyContent:'flex-start'
},
text:{
    color:'white',
    fontWeight:'bold',
    fontSize:14
},
});
