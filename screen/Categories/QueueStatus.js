import { View,Text, SafeAreaView, StyleSheet } from "react-native"
import CatHead from "../../component/CatHead"
import { GlobalStyles } from "../../Styles/LightMode"
import HeadIcon from "../../component/HeadIcon"
export default function Queue(){
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title={'Queue Status'}/>
            <View style={{borderBottomWidth:1,marginHorizontal:18}}>
                <View style={styles.cont1}>
                    <Text style={styles.conText}>Current Patient No.: 1</Text>
                    <Text style={styles.conText}>Total no. of patient in queue: 0</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    cont1:{
        margin:18
    },
    conText:{
        color:GlobalStyles.colors.p1,
        fontWeight:'700'
    }
})