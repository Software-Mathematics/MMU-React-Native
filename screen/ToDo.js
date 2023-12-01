import { Text,View } from "react-native"
import Button from "../component/Button"
export default function ToDO({navigation,route}){
    // const {role}=route.params;
    return(
        <View>
            <Text>todo</Text>
            <Button onPress={()=>navigation.navigate('NavApp',{ screen: 'Login' })}>Logout</Button>
        </View>
    )
}