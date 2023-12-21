import { SafeAreaView,View,Text, StyleSheet } from "react-native";
import HeadIcon from "../../component/HeadIcon";
import CatHead from "../../component/CatHead";
import SearchTab from "../../component/SearchTab";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { GlobalStyles } from "../../Styles/LightMode";

export default function LabKitStatus(){
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title={'Lab Kit Status'}/>
            <SearchTab place={'Search Medicine'}/>
            <View
            style={styles.headView}>
                <Text
                style={styles.headText}
                >S.No.
                </Text>
                <Text
                style={styles.headText}
                >Lab Kits and Equipments
                </Text>
                <Text
                style={styles.headText}
                >Avail. Qty
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    headView:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:responsiveHeight(1)
    },
    headText:{
        color:GlobalStyles.colors.p1,
        fontWeight:'800',
        fontSize:responsiveHeight(1.5)
    }
})