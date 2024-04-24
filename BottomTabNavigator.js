import  React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flexbox from './Flexbox';
import ModalView from './ModalView';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            var iconName;
            if (route.name == 'BottomFlexbox') {
              iconName = require('./iconn1.png');
            } else {
              iconName = require('./iconn2.png');
            }
            return <Image source={iconName} style={{ height: 30, width: 30 }} resizeMode='contain' />;
          }
        })}>
        <BottomTab.Screen name='BottomFlexbox' component={Flexbox} options={{ title: 'FlexBox', headerShown: false }} />
        <BottomTab.Screen name='BottomModalView' component={ModalView} options={{ title: 'ModalView', headerShown: false }} />
      </BottomTab.Navigator>
    </View>
  );
}

export default BottomTabNavigator;    