import React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import KeyboardAvoiding from './KeyboardAvoiding';
import ReactNativeStyle from './ReactNativeStyle';

const Tab = createMaterialBottomTabNavigator();
const MaterialBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            shifting={true}
            
        >
            <Tab.Screen name='Keyboard Avoiding' component={KeyboardAvoiding}
                options={{
                    tabBarColor: '#13BB9F',
                    tabBarBadge: true,
                    tabBarIcon: () => (
                        <Image source={require('./icon1.png')} style={{ height: 30, width: 30, marginBottom: 5 }} resizeMode='contain' />
                    )
                }}
            />
            <Tab.Screen name='Styles' component={ReactNativeStyle}
                options={{
                    tabBarColor: '#d0f',
                    
                    tabBarIcon: () => (
                        <Image source={require('./iconn2.png')} style={{ height: 30, width: 30 , marginBottom: 5}} resizeMode='contain' />
                    
                        )
                }}
            />
        </Tab.Navigator>
    );
}
export default MaterialBottomTabNavigator;
