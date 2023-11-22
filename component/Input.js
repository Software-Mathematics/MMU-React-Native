import {StyleSheet, TextInput,View,Text} from 'react-native';
import { GlobalStyles } from '../Styles/LightMode';

export default function Input({place}) {
  return (
    <View style={styles.view}>
      <TextInput placeholder={place} placeholderTextColor={GlobalStyles.colors.p1} style={{fontWeight:'bold'}} />
      
    </View>
  );
}

const styles = StyleSheet.create({
    view:{
        borderWidth:1,
        borderColor:GlobalStyles.colors.p3,
        backgroundColor:'#f5f5f5',
        padding:16,
        borderRadius:16,
        margin:10,
        borderWidth:4
    },
    input:{
        
    }
});
