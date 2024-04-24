import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import ModalView from './ModalView';
import Flexbox from './Flexbox';
import Componentvalue from './Componentvalue';
import RedirectionScreen from './RedirectionScreen';
import BottomTabNavigator from './BottomTabNavigator';
import MaterialTopTab from './MaterialTopTab';
import MaterialBottomTabNavigator from './MaterialBottomTabnavigator';
import DrawerNavigator from './DrawerNavigator';
import FlatListExample from './FlatListExample';
import SectionListExample from './SectionListExample';
import TouchableExample from './TouchableExample';
import CustomComponent from './CustomComponent';
const stackNavigation = createNativeStackNavigator();

export default mainNavigator = () => {
  return (

    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName='MainScreen' >
        <stackNavigation.Screen name="App" component={App} />
  
        <stackNavigation.Screen name="ModalView" component={ModalView} />
        <stackNavigation.Screen name="Flexbox" component={Flexbox} />
        <stackNavigation.Screen name="MainScreen" component={RedirectionScreen} options={{ title: 'Main Screen' }} />
        <stackNavigation.Screen name="Componentvalue" component={Componentvalue} />
        <stackNavigation.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Bottom Tab navigator Example' }} />
        <stackNavigation.Screen name="MaterialBottomTabNavigator" component={MaterialBottomTabNavigator} options={{ title: "Material Bottom Tab" }} />
        <stackNavigation.Screen name='MaterialTopTab' component={MaterialTopTab} options={{ title: "Material TopTab Example" }} />
        <stackNavigation.Screen name="DrawerNavigator" component={DrawerNavigator} options={{title:"DrawerNavigator Example", headerShown:false}}/>
        <stackNavigation.Screen name="FlatListExample" component={FlatListExample} options={{title:"FlatList Example"}}/>
        <stackNavigation.Screen name="SectionListExample" component={SectionListExample} options={{title:"SectionList Example"}}/>
       
        <stackNavigation.Screen name="TouchableExample" component={TouchableExample} options={{title:"Touchable Exmaple"}}/>
        <stackNavigation.Screen name="CustomComponentExample" component={CustomComponent} options={{title:"Custom Component Exmaple"}}/>
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}

