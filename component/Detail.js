import { StyleSheet,View,Text } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
export default function Detail({head,detail}){
    return(
        <View style={styles.subCont}>
            <View>
            <Text style={styles.subHead}>{head}</Text></View>
           <View><Text style={styles.subDetail}>{detail}</Text></View>
        </View>
    )
}

const styles=StyleSheet.create({
    subCont:{
        flexDirection:'row',
        marginLeft:16,
        // justifyContent:'space-between',
        marginBottom:2,
        
        

    },
    subHead:{
        marginRight:40,
        width:100,
        marginBottom:8,
        color:GlobalStyles.colors.p1,
        fontWeight:'900'
    },
    subDetail:{
        color:GlobalStyles.colors.p1,
        fontWeight:'600'
    },
})