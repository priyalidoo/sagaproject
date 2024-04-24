import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CustomText=(props) =>{
  return (
    
      <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
     
  );
}

const styles= StyleSheet.create(
  {
    textStyle:{
    color:'#000',
    fontSize:14
  }
})
