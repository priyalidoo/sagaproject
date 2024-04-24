import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const MyButton=(props) =>{
  const{title, bgColor,h, w, r, color ,onclick, count, setCount}= props;
  return (
   <TouchableOpacity style={{backgroundColor:bgColor, width:w, height:h, borderRadius:r , alignItems:'center', 
   paddingTop:7}}
   onPress={()=>{setCount(count+1);
   }}>
<Text style={{color}}>{title}</Text>
   </TouchableOpacity>
  );
}


export default MyButton;
