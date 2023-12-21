import { View } from "react-native";
import Detail from "./Detail";
import UpdateIcon from "./UpdateIcon";
import { GlobalStyles } from "../Styles/LightMode";
import { useNavigation } from "@react-navigation/native";
export default function Indent({ID,submit,status,date,}){
    const navigation=useNavigation()
    return(<View style={{flexDirection:'row',justifyContent:'space-between',margin:10,borderBottomWidth:1,borderColor:GlobalStyles.colors.p1}}>
        <View>
        <Detail head='Request ID:' detail={ID}/>
        <Detail head='Submitted by:' detail={submit}/>
        <Detail head='Status:' detail={status}/>
        <Detail head='Request Date:' detail={date}/>
        </View>
        <UpdateIcon onPress={()=>
            navigation.navigate('Update',{
                id:ID,
                submit:submit,
                status:status,
                date:date
            })
        }/></View>
    )
}