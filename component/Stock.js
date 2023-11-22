import {StyleSheet, Text, View} from 'react-native';
import { GlobalStyles } from '../Styles/LightMode';

export default function Stock({medicine,id,uom,consume,qty}) {
  return (
    
      
      <View style={styles.container}>
       
          <Text style={styles.b1}>{id}</Text>
    
          <Text style={styles.b2}>{medicine}</Text>

   
          <Text style={styles.b3}>{uom}</Text>
   
          <Text style={styles.b4}>{consume}</Text>
    
          <Text style={styles.b5}>{qty}</Text>
     
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  b1: {
    width: 40,
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:16
  },
  b2:{
    width:100,
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:16
  },
  b3:{
    width:50,
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:16
  },
  b4:{
    width:70,
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:16
  },b5:{
    width:40,
    color:GlobalStyles.colors.p1,
    fontWeight:'600',
    fontSize:16
  }
});
