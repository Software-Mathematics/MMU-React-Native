import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import TaskTile from '../component/TaskTile';

export default function Home({navigation}) {
  return (
    // <SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/user.png')}
          style={{height: 50, width: 50}}
        />
        <View style={styles.header1}>
          <Text style={{fontWeight: '600', fontSize: 16}}>Hello</Text>
          <Text style={{fontWeight: '800', fontSize: 16}}>Rajesh Murmu</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text
          style={{
            color: GlobalStyles.colors.p4,
            fontWeight: '600',
            fontSize: 16,
            justifyContent: 'center',
          }}>
          Current Status
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{borderRadius: 10}}>
            <Text style={styles.text}>Expected Turnout</Text>
          </View>

          <Text style={styles.text}>Total Queue</Text>
          <Text style={styles.text}>Closed Prescription</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', margin: 16}}>
        <Text
          style={{
            color: GlobalStyles.colors.p1,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Task Categories
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TaskTile
          title="Lab Results"
          onPress={() => navigation.navigate('LabResult')}
        />
        <TaskTile title="Search Patient" 
        onPress={()=>navigation.navigate('Patient')}/>
        <TaskTile title="Create" 
         onPress={()=>navigation.navigate('Benificiery')}/>

      </View>
      <View style={{flexDirection:'row'}}>
      <TaskTile title="Stock Status" 
         onPress={()=>navigation.navigate('Stock')}/>
         <TaskTile title="Indent Management" 
         onPress={()=>navigation.navigate('Indent')}/>
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position:'absolute',
  },
  status: {
    backgroundColor: GlobalStyles.colors.p1,
    padding: 20,
    borderRadius: 16,
    margin: 10,
    marginTop: 50,
    alignItems: 'center',

    height: 200,
  },
  text: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 6,
    margin: 10,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    margin: 10,
  },
  header1: {
    // marginTop:10
    justifyContent: 'center',
    marginLeft: 10,
  },
});
