import React from 'react'
import {Text, View} from 'react-native';
import ComponentB from './ComponentB';
const ComponentA =({x})=>
{
return(
    <View>
    <ComponentB x={x}/>
    </View>
)
}
export default ComponentA;