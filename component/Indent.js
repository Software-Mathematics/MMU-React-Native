import { View } from "react-native";
import Detail from "./Detail";
import UpdateIcon from "./UpdateIcon";
import { GlobalStyles } from "../Styles/LightMode";
export default function Indent({ID,submit,status,date}){
    return(<View style={{flexDirection:'row',justifyContent:'space-between',margin:10,borderBottomWidth:1,borderColor:GlobalStyles.colors.p1}}>
        <View>
        <Detail head='Request ID:' detail={ID}/>
        <Detail head='Submitted by:' detail={submit}/>
        <Detail head='Status:' detail={status}/>
        <Detail head='Request Date:' detail={date}/>
        </View>
        <UpdateIcon/></View>
    )
}