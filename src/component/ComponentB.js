import React from 'react';
import {Text, View} from 'react-native';
const ComponentB=()=>
{
    const value= useContext(MyContext)
return(
    <View>
        <Text>ComponentB {value}</Text>
    </View>
)
}
export default ComponentB;