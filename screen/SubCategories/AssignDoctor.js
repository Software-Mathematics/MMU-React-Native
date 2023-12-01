import { StyleSheet, View,Text,Pressable, SafeAreaView } from "react-native";
import CatHead from "../../component/CatHead";
import Icon from 'react-native-vector-icons/Ionicons'
import { GlobalStyles } from "../../Styles/LightMode";
import DropdownInput from "../../component/DropdownInput";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { TextInput } from "react-native-paper";
import HeadIcon from "../../component/HeadIcon";
import Button from "../../component/Button";
export default function AssignDoctor({route}){
    const doctor=[{label:'Saraswati Kumari',value:'saraswati'},{label:'Dr. Sultan',value:'sultan'}]
    const visit=[{label:'New',value:'new'},{label:'FollowUp',value:'followup'}]
    const category=[{label:'MMU Visit',value:'mmu'},{label:'Home Visit',value:'home'}]
    const {id}=route.params;
    return(
        <SafeAreaView>
            <HeadIcon/>
            <CatHead title={'Assign Doctor'}/>
            <View style={[styles.subCont,{alignItems:'center',marginRight:responsiveHeight(2),borderBottomWidth: 0.5,paddingBottom:responsiveHeight(2),marginBottom:responsiveHeight(2)}]}>
            <Pressable style={{marginRight:responsiveHeight(2)}}>
            <Icon name='caret-down-circle' color={GlobalStyles.colors.p1} size={32}/></Pressable>
                <Text style={styles.subHead}>PatientID:</Text>
                <Text style={styles.subHead}>{id}</Text>
            </View>
            <View>
            <View style={styles.subCont}>
         <Text style={styles.subHead}>Available Dr.</Text>
         <DropdownInput data={doctor}/>
         </View><View style={styles.subCont}>
         <Text style={styles.subHead}>Visit Type</Text>
         <DropdownInput data={visit}/>
         </View><View style={styles.subCont}>
         <Text style={styles.subHead}>Visit Category</Text>
         <DropdownInput data={category}/>
         </View>
         <View style={styles.subCont}>
         <Text style={styles.additional}>Additional Notes</Text>
         </View>
            <TextInput style={styles.subDetail} multiline={true}/>
            </View>
            <Button title={'Submit'}/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    subHead:{
        marginRight:40,
        width:100,
        marginBottom:8,
        color:GlobalStyles.colors.p1,
        fontWeight:'900'
    },
    subDetail:{
        color: GlobalStyles.colors.p1,
    fontWeight: '600',
    borderWidth: 3.5,
   backgroundColor:'white',
 
  margin:4,
   height:responsiveHeight(18),
    borderColor: GlobalStyles.colors.p3,margin:4,
    },subCont:{
        flexDirection:'row',
        marginLeft:16,
        // justifyContent:'space-between',
        marginBottom:2,
    },additional:{
        marginRight:40,
        
        marginBottom:8,
        color:GlobalStyles.colors.p1,
        fontWeight:'900'
    }
})