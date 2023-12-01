import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../Styles/LightMode';
import TaskTile from '../component/TaskTile';
import { ActivityIndicator } from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator';
import Progress from '../component/Progress';
export default function Home({navigation,route}) {
  // const {role}=route.params
  const {role}=route.params;
  // const role='doctor';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/user.png')}
          style={{height: 50, width: 50}}
        />
        <View style={styles.header1}>
          <Text style={{fontWeight: '600', fontSize: 16,color:'black'}}>Hello</Text>
          <Text style={{fontWeight: '800', fontSize: 16,color:'black'}}>{role==='nurse'?'Saraswati Kumari':(role=='doctor'?'Dr Sultan null':'user')}</Text>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop:18}}>
        
       </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Progress/>
          <View style={styles.textView}>
            <Text style={styles.text}>Expected Turnout</Text>
          </View></View>
          <View>
            <Progress/>
          <View style={styles.textView}>
          <Text style={styles.text}>Total Queue</Text></View></View>
          <View>
            <Progress/>
          <View style={styles.textView}>
          <Text style={styles.text}>Closed Prescription</Text></View></View>
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
      
        {role=='nurse' && 
        <>
        <View style={{flexDirection: 'row', marginTop: 20}}>
        <TaskTile title={'Queue Status'} onPress={()=>navigation.navigate('Queue')}/>
        <TaskTile title="Create" 
         onPress={()=>navigation.navigate('Benificiery')}/>
         <TaskTile
          title="Lab Results"
          onPress={() => navigation.navigate('LabResult')}
        />
        
      </View>
      <View style={{flexDirection:'row'}}>
      <TaskTile title="Search Patient" 
        onPress={()=>navigation.navigate('Patient')}/>
        <TaskTile title={"Search Prescription"} onPress={()=>navigation.navigate('Prescription')}/>
        </View>
        </>
        }
     
     {
      role=='doctor' &&
      <>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TaskTile title={'Change Request'} onPress={()=>navigation.navigate('Queue')}/>
        <TaskTile title="Follow Ups" 
         onPress={()=>navigation.navigate('Benificiery')}/>
         <TaskTile
          title="Result Awaited"
          onPress={() => navigation.navigate('LabResult')}
        />
        
      </View>
      <View style={{flexDirection:'row'}}>
      <TaskTile title="Patient Queue" 
        onPress={()=>navigation.navigate('Patient')}/>
        <TaskTile title={"Indent Request"} onPress={()=>navigation.navigate('IndentRequest')}/>
        <TaskTile title={"Test Results"} onPress={()=>navigation.navigate('LabResult')}/>
        </View>
      </>
     }
      
      

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
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:12
  },
  textView:{
    padding: 6,
    margin: 10,
    backgroundColor:'white',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
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
