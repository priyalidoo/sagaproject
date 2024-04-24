import React from 'react';
import { ScrollView, StyleSheet, View , Text} from 'react-native';
import Product from './component/redux/Product';
import Header from './component/redux/Header';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './ProductWrapper';
import UserList from './UserList';
const Stack = createNativeStackNavigator();

const App = () => {
    
    
    return (
        <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name="Home" component={ProductWrapper}/>
    <Stack.Screen name="User" component={UserList}/>
</Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default App;