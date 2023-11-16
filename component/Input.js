import { TextInput } from "react-native";

export default function Input({place}){
    return(
<View>
    <TextInput placeholder={place}/>
</View>
    )
}