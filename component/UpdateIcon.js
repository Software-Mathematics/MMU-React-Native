import { GlobalStyles } from "../Styles/LightMode"
import { Pressable,Text } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
export default function UpdateIcon({onPress}){
    return(
        <Pressable style={{alignItems: 'center'}} onPress={onPress}>
        <Icon name="profile" size={20} color={GlobalStyles.colors.p1} />
        <Text
          style={{
            color: GlobalStyles.colors.p1,
            fontSize: 8,
            fontWeight: '600',
            marginTop: 5,
          }}>
          View and Update details
        </Text>
      </Pressable>
    )
}