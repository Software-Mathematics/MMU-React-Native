import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../screen/Login';
import Reset from '../screen/ResetPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screen/Home';
import Account from '../screen/Account';
import ToDO from '../screen/ToDo';
import Notification from '../screen/Notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyles} from '../Styles/LightMode';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LabResult from '../screen/Categories/LabResult';
import SearchPatient from '../screen/Categories/SearchPatient';
import Benificiery from '../screen/Categories/CreateBenificiery';
import StockStatus, {Stock} from '../screen/Categories/StockStatus';
import IndentManagement from '../screen/Categories/IndentManagement';
import IndentRequest from '../screen/Categories/IndentRequest';

import {BottomNavigation, Text} from 'react-native-paper';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import Queue from '../screen/Categories/QueueStatus';
import Prescription from '../screen/Categories/Prescription';
import EditPatient from '../screen/SubCategories/EditPatient';
import AssignDoctor from '../screen/SubCategories/AssignDoctor';
import History from '../screen/SubCategories/History';
import EmergencyDetails from '../screen/SubCategories/EmergencyDetails';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function NavApp() {
  function Next() {
    const isFocus = useIsFocused();
    return (
      <Tab.Navigator
        barStyle={{backgroundColor: GlobalStyles.colors.p1}}
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.p1,
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let style;
            style = focused ? 14 : 0;
            if (route.name === 'Tab1') {
              iconName = 'home';
              style = focused ? 10 : 0;
            } else if (route.name === 'ToDo') {
              iconName = 'text-box-check';
            } else if (route.name === 'Account') {
              iconName = 'account';
            } else if (route.name === 'Notification') {
              iconName = 'bell';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={'white'}
                style={{marginBottom: style}}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Tab1" component={Tab1} />

        <Tab.Screen name="ToDo" component={ToDO} />

        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    );
  }

  function Patient() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={SearchPatient} />
        <Stack.Screen name="Assign" component={AssignDoctor} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Edit" component={EditPatient} />
      </Stack.Navigator>
    );
  }

  function NewBenificiery(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateBenificiery" component={Benificiery} />
        <Stack.Screen name="Emergency" component={EmergencyDetails} />
      </Stack.Navigator>
    )
  }

  function Tab1() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LabResult" component={LabResult} />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="Benificiery" component={NewBenificiery} />
        <Stack.Screen name="Stock" component={StockStatus} />
        <Stack.Screen name="Queue" component={Queue} />
        <Stack.Screen name="Prescription" component={Prescription} />
        <Stack.Screen name="Indent" component={IndentManagement} />
        <Stack.Screen name="IndentRequest" component={IndentRequest} />
      </Stack.Navigator>
    );
  }
  function Authentication() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={Reset} />

        {/* <Stack.Screen name='Task' component={Search}/>/ */}
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NavApp" component={Authentication} />
      <Stack.Screen name="Next" component={Next} />
    </Stack.Navigator>
  );
}
