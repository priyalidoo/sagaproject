import React from 'react';
import{View, Text} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen1 from './DrawerScreen1';
import DrawerScreen2 from './DrawerScreen2';
import DrawerContent from './DrawerContent';
import ReactNativeFetch from './ReactNativeFetch';
const Drawer= createDrawerNavigator();

const DrawerNavigator = ()=> {
  return (

<Drawer.Navigator screenOptions={{drawerType:'back'}} drawerContent={(props)=>(<DrawerContent{...props}/>)}>
<Drawer.Screen name="Home" component={ReactNativeFetch} options={{title:'React Native Fetch'}}/>
<Drawer.Screen name="Dashboard" component={DrawerScreen2}/>
</Drawer.Navigator>
 );
}
export default DrawerNavigator;
