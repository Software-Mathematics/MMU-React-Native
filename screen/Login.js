import { Text, TouchableOpacity, View } from "react-native";
import Button from "../component/Button";
import InputTile from "../component/InputTile";
import Input from "../component/Input";
export default function Login(){
    return(
        <View>
            <Text>Log In</Text>
        <InputTile>
        <Input place='Username'/><Input place='Password'/>
        <Button title='Continue'/></InputTile>
        <TouchableOpacity><Text>Forget Password</Text></TouchableOpacity>
        </View>
    )
}