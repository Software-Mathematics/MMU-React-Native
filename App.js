import { View } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screen/Login";
import Reset from "./screen/ResetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavApp from "./component/NavApp";
import { Provider } from "react-redux";
import store from "./redux/store";



export default function App(){
  return(
    <Provider store={store}>
    <NavigationContainer>
      <NavApp/>
    </NavigationContainer>
    </Provider>
    
  )
}