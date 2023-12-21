import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../Styles/LightMode';

const Multi = () => {
 const [count, setCount] = useState(0);

 const handleButtonClick = () => {
    setCount(count + 1);
 };

 const createComponent = (index) => {
    return (
      <View key={index} style={styles.component}>
        <Text>Component  1</Text>
      </View>
    );
 };

 return (
    <View style={styles.container}>
      {Array.from({ length: count }, createComponent)}
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text>Increase Count</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    marginTop:100,
    justifyContent: 'center',
    borderRadius:GlobalStyles.colors.p1,
    borderWidth:4,
    margin:10
 },
 component: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
 },
 button: {
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    marginTop: 10,
 },
});

export default Multi;