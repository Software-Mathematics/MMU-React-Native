import { View } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screen/Login";
import Reset from "./screen/ResetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavApp from "./component/NavApp";

const Stack=createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <NavApp/>
    </NavigationContainer>
    
  )
}