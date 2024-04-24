import React, { createContext } from 'react';
import {Text, View} from 'react-native';
import ComponentA from './ComponentA';
let x= 'Hello how are you';
const MyContext = createContext();
const Hooks =()=>
{
  
return(
    <MyContext.Provider value={x}>
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ComponentA x= {x}/>
    </View>
    </MyContext.Provider>
)
}
export default Hooks;