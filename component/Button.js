import { Pressable, View } from "react-native"
export default function Button({title}){
    return(
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    )
}