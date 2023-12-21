import { View,SafeAreaView,Text, StyleSheet } from "react-native";
import Detail from "../../component/Detail";
import HeadIcon from "../../component/HeadIcon";
import CatHead from "../../component/CatHead";
import { GlobalStyles } from "../../Styles/LightMode";
import { responsiveHeight } from "react-native-responsive-dimensions";
import DropdownInput from "../../component/DropdownInput";
import { TextInput } from "react-native-paper";
export default function Update({route}){
    const{id,submit,status,date}=route.params
    return(
        <SafeAreaView>
            <HeadIcon/>
        <CatHead title="Indent Management" />
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,borderBottomWidth:1,borderColor:GlobalStyles.colors.p1}}>
        <View>
        <Detail head='Request ID:' detail={id}/>
        <Detail head='Submitted by:' detail={submit}/>
        <Detail head='Status:' detail={status}/>
        <Detail head='Request Date:' detail={date}/>
        </View>  
        </View>
        
            <View style={styles.cont2}>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2),
                  flexDirection:'row'
                }}
                >
                       <Text 
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1),
                      marginRight:responsiveHeight(1)
                    }}>S.No.</Text>
                    <Text 
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>Medicine Description</Text>
                    
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    <Text
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>UOM</Text>
                    
                </View>
                <View
                style={{
                  marginLeft:responsiveHeight(1),
                  marginTop:responsiveHeight(2)
                }}>
                    <Text
                    style={{
                      fontWeight:'800',
                      color:GlobalStyles.colors.p1,
                      fontSize:15,
                      marginBottom:responsiveHeight(1)
                    }}>Qty</Text>
                    
                </View>
               
            </View>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems:'center'
            }}>
                <Text>1</Text>
                
                <Text>MG</Text>
                <TextInput/>
            </View>
          
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    cont2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:responsiveHeight(1)
      },cont1:{
        margin:8,
        padding:4,
        borderWidth:4,
        borderRadius:10,
        borderColor:GlobalStyles.colors.p3
      }
})