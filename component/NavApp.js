import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Login from "../screen/Login";
import Reset from "../screen/ResetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nurse from "../screen/Nurse";
import Home from "../screen/Home";
import Account from "../screen/Account";
import ToDO from "../screen/ToDo";
import Notification from "../screen/Notification";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalStyles } from "../Styles/LightMode";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LabResult from "../screen/Categories/LabResult";
import SearchPatient from "../screen/Categories/SearchPatient";
import Benificiery from "../screen/Categories/CreateBenificiery";
import StockStatus, { Stock } from "../screen/Categories/StockStatus";
import IndentManagement from "../screen/Categories/IndentManagement";

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();


export default function NavApp(){
    function Next(){
        return(
            <Tab.Navigator barStyle={{backgroundColor:GlobalStyles.colors.p1,}}   screenOptions={{
                tabBarActiveBackgroundColor:GlobalStyles.colors.p1,
                tabBarStyle:{
                    backgroundColor:GlobalStyles.colors.p1
                },
                tabBarShowLabel:false,
                headerShown:false
                
            }}
            >
            <Tab.Screen  name="Tab1" component={Tab1} options={{
          tabBarIcon: ()=>
            <MaterialCommunityIcons name="home" color={GlobalStyles.colors.p4} size={30} />
          ,
        }}/>
            <Tab.Screen name="ToDo" component={ToDO} options={{
          tabBarIcon: ()=>
            <MaterialCommunityIcons name="text-box-check" color={GlobalStyles.colors.p4} size={30} />
          ,
        }}/>
            <Tab.Screen name="Account" component={Account} options={{
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="account" color={GlobalStyles.colors.p4} size={30} />
          ),
        }}/>
            <Tab.Screen name="Notification" component={Notification} options={{
          tabBarIcon: ()=>(
            <MaterialCommunityIcons name="bell" color={GlobalStyles.colors.p4} size={30} />
          ),
        }}/>

        </Tab.Navigator>
        )
    }

    function Tab1(){
      return (<Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='LabResult' component={LabResult}/>
        <Stack.Screen name="Patient" component={SearchPatient}/>
        <Stack.Screen name="Benificiery" component={Benificiery}/>
        <Stack.Screen name="Stock" component={StockStatus}/>
        <Stack.Screen name="Indent" component={IndentManagement}/>
      </Stack.Navigator>)
    }
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Reset" component={Reset}/>
            <Stack.Screen name='Next' component={Next}/>
            {/* <Stack.Screen name='Task' component={Search}/>/ */}
          </Stack.Navigator>
    )
}