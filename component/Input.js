import {StyleSheet, TextInput,View,Text, Platform} from 'react-native';
import { GlobalStyles } from '../Styles/LightMode';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
export default function Input({place,value,onChange}) {
  return (
    <View style={styles.view}>
      <TextInput placeholder={place} placeholderTextColor={GlobalStyles.colors.p1} style={{fontWeight:'bold'}} value={value} onChangeText={onChange}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
    view:{
        borderWidth:1,
        borderColor:GlobalStyles.colors.p3,
        backgroundColor:'#f5f5f5',
        padding:Platform.OS==='ios'?responsiveHeight(2): responsiveHeight(0.5),
        borderRadius:16,
        margin:Platform.OS==='ios'?responsiveWidth(3):responsiveWidth(2),
        borderWidth:4,
        paddingHorizontal:8,
        
    },
    input:{
        
    }
});
