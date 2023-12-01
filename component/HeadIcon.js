import Icon from 'react-native-vector-icons/AntDesign'
import { View,Text, Pressable } from 'react-native'
import { GlobalStyles } from '../Styles/LightMode'
import { useNavigation } from '@react-navigation/native'
export default function HeadIcon(){
    const navigation=useNavigation();
    return(
        <Pressable style={{marginLeft:18,}} onPress={()=>navigation.goBack()}>
           
        <Icon name='left' size={40} color={GlobalStyles.colors.p1} /></Pressable>
    )
}