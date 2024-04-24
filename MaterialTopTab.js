import React from 'react';
import imageExample from './imageExample';
import ClassComponentExample from './ClassComponentExample';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTab= createMaterialTopTabNavigator();

export default MaterialTopTab=() =>{
  return (
    <TopTab.Navigator>
        <TopTab.Screen name='TopTabImage' component={imageExample} options={{title:'Image'}}/>
        <TopTab.Screen name='TopTabClassComponent' component={ClassComponentExample} options={{title:'class'}}/>
    </TopTab.Navigator>
    );
}
