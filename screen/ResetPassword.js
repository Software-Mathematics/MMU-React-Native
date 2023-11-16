import { Text, TouchableOpacity, View } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";

export default function Reset(){
    return(
        <View>
            <Text>Reset Password</Text>
        <InputTile>
        <Input place='Username'/><Input place='New Password'/><Input place='Confirm Password'/>
        <Button title='Continue'/></InputTile>
        
        </View>
    )
}