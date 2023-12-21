import {StyleSheet, Text, TextInput, View,Pressable, SafeAreaView} from 'react-native';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import Button from '../../component/Button';
import {GlobalStyles} from '../../Styles/LightMode';
import {responsiveHeight} from 'react-native-responsive-dimensions';
export default function CreateCommunity2({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <HeadIcon />
        <View>
        <CatHead title={'Create Community'} />
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Name of HHS</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Follow Up Done</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <View style={styles.subCont}>
          <Text style={styles.subHead}>Remarks</Text>
          <TextInput style={styles.subDetail} />
        </View>
        <Button title={'Create Community'} style={{marginTop:responsiveHeight(5)}}/>
      </View>
      </View>
      <View style={{justifyContent:'flex-end',marginTop:responsiveHeight(30)}}>
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
subCont: {
    flexDirection: 'row',
    margin:16,
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
});
