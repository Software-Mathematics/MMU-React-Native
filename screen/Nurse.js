import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Text, View } from "react-native"
import Home from "./Home";
import ToDO from "./ToDo";
import Account from "./Account";
import Notification from "./Notification";
const Tab=createMaterialBottomTabNavigator();

export default function Nurse(){
    return(
        <Tab.Navigator>
            <Tab.Screen  name="Home" component={Home}/>
            <Tab.Screen name="ToDo" component={ToDO}/>
            <Tab.Screen name="Account" component={Account}/>
            <Tab.Screen name="Notification" component={Notification}/>

        </Tab.Navigator>
    )
}