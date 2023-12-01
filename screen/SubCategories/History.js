import { StyleSheet, View,Pressable,Text,SafeAreaView} from "react-native";
import CatHead from "../../component/CatHead";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../../Styles/LightMode";
import HeadIcon from "../../component/HeadIcon";
export default function History({route}){
    const {id}=route.params;
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title={'Patient History'}/>
            <View style={[styles.subCont,{alignItems:'center',marginRight:responsiveHeight(2),borderBottomWidth: 0.5,paddingBottom:responsiveHeight(2),marginBottom:responsiveHeight(2)}]}>
            <Pressable style={{marginRight:responsiveHeight(2)}}>
            <Icon name='caret-down-circle' color={GlobalStyles.colors.p1} size={32}/></Pressable>
                <Text style={styles.subHead}>PatientID:</Text>
                <Text style={styles.subHead}>{id}</Text>
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    subCont:{
        flexDirection:'row',
        marginLeft:16,
        // justifyContent:'space-between',
        marginBottom:2,
    }
})