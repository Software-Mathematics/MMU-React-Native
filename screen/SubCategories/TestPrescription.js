import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import CatHead from '../../component/CatHead';
import HeadIcon from '../../component/HeadIcon';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {GlobalStyles} from '../../Styles/LightMode';
import Button from '../../component/Button';

export default function TestPrescription() {
  return (
    <SafeAreaView>
      <HeadIcon />
      <CatHead title={'Prescription'} />
      <View style={styles.id}>
        <Text style={styles.idText}>PATIENT ID:</Text>
        <Text style={styles.idText}>1234556</Text>
      </View>

      <View style={styles.subView}>
        <Text
          style={{
            fontSize: responsiveHeight(2),
            color: GlobalStyles.colors.p1,
            fontWeight: '800',
            marginBottom: responsiveHeight(2),
          }}>
          Lab Test
        </Text>
        <Text
          style={{
            fontSize: responsiveHeight(2),
            color: GlobalStyles.colors.p1,
            fontWeight: '600',
            marginBottom: responsiveHeight(1.5),
          }}>
          Haemoglobin
        </Text>
        <View style={styles.box}>
          <View style={styles.detail}>
            <Text style={styles.subHead}>Name:</Text>
            <Text style={styles.subDetail}>Haemoglobin</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.subHead}>UOM:</Text>
            <Text style={styles.subDetail}>g/dl</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.subHead}>Range:</Text>
            <Text style={styles.subDetail}>13.0-18.0</Text>
          </View>
          <View
            style={[
              styles.detail,
              {
                borderBottomWidth: 0.5,
                paddingBottom: responsiveHeight(2),
              },
            ]}>
            <Text style={styles.subHead}>Value:</Text>
            <TextInput style={styles.input} placeholder="Add Value" />
          </View>
          <View>
            <TextInput
              style={[
                {
                  marginVertical: responsiveHeight(2),
                  marginHorizontal: responsiveHeight(1),
                  height: responsiveHeight(20),
                  borderWidth: 3.5,
                  borderColor: GlobalStyles.colors.p3,
                  borderRadius: 10,
                  padding: responsiveHeight(1),
                },
              ]}
              placeholder="Add Comment"
              multiline={true}
            />
          </View>
        </View>
      </View>
      <Button title={'Submit Lab Results'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  id: {
    flexDirection: 'row',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(3),
    borderBottomWidth: 0.5,
    marginHorizontal: responsiveHeight(1),
  },
  idText: {
    fontWeight: '700',
    fontSize: responsiveHeight(2),
    color: GlobalStyles.colors.p1,
  },
  subView: {
    marginHorizontal: responsiveHeight(1),
    marginVertical: responsiveHeight(3),
  },
  box: {
    borderWidth: 3.5,
    borderColor: GlobalStyles.colors.p3,
    borderRadius: 10,
  },
  detail: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(1),
    marginTop: responsiveHeight(1),
  },
  subHead: {
    width: responsiveHeight(16),
    color: GlobalStyles.colors.p1,
    fontWeight: '700',
  },
  subDetail: {
    color: GlobalStyles.colors.p1,
    fontWeight: '600',
  },
  input: {
    borderWidth: 3.5,
    borderColor: GlobalStyles.colors.p3,
    borderRadius: 10,
    flex: 1,
    // height:responsiveHeight(4),
    padding: responsiveHeight(1),
  },
});
