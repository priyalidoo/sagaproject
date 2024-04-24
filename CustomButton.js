import React from 'react';
import {  Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

export default CustomButton=(props) =>{
    const{title, onPress=()=>{}, buttonStyle, textStyle} =props;
  return (
   <TouchableOpacity style={[styles.mainContainer ,buttonStyle]}
   onPress={onPress}>
      {/* <Text style={[styles.customButtonText, textStyle]}>{title}</Text> */}
      <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
      </TouchableOpacity>
  );
}
const styles= StyleSheet.create({
    mainContainer:{
    width:'100%',
    height:32,
    marginTop:10,
    marginBottom:10,
    borderRadius: 20,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
    },
    customButtonText:{
        color:"#000"
    }
})
