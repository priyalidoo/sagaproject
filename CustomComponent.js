import React,{useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import MyButton from "./MyButton";

const CustomComponent =()=>
{
const [count, setCount]= useState(0);
return(
 <TouchableOpacity
 style={styles.maincontainer}>
    <MyButton 
    title={'My Custom Component'+ count} 
    bgColor={'green' }
    h={40 }
    w={200}
     r={10}
     color={'#fff'}
    count={count}
    setCount={setCount}
    onclick={(x)=>{alert(x)}}/>
    </TouchableOpacity>
)
}
const styles= StyleSheet.create(
  {
    maincontainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
  
  }
)
export default CustomComponent