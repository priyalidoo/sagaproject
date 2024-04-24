import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet,Platform, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
export default TouchableExample=() =>{
 
  return (
    <View style={styles.mainContainer}>
        <TouchableWithoutFeedback 
        onPress={()=>{console.log('TouchableWithoutExample');
        }}>
          <View style={styles.touchableWithoutFeedback}>
      <Text style={styles.touchableWithoutFeedbacktext}>TouchableWithoutFeedback</Text>
      </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={()=>{console.log('TouchableOpacity');
        }}>
      <Text style={[styles.touchableWithoutFeedback, {marginTop:15}]}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={()=>{console.log('TouchableHighLight');
    }}>
      <Text style={[styles.touchableWithoutFeedback, {marginTop:15}]}>TouchableHighLight</Text>

      </TouchableHighlight>
      {
        Platform.OS=='android' &&
        
        <TouchableNativeFeedback 
       
        onPress={()=>{console.log('TouchableNativeExample Pressed');

        }}>
      
          <View style={[styles.touchableWithoutFeedback, {marginTop:15}]}>
       <Text style={styles.touchableWithoutFeedbacktext}>TouchableNativeFeedback</Text>
       </View>
   </TouchableNativeFeedback>
    }
      <CustomButton
      title={'Button'}
      onPress={()=>{
      console.log('button 1 clicked')
      }}
    />
<CustomButton
      title={'Button1'}
      onPress={()=>{
      console.log('Button 2 clicked')
      }}
      buttonStyle={styles.button1Style}
      textStyle={styles.button1TextStyle}/>
      <CustomText>
        Hello
      </CustomText>
     </View>
  );
}
const styles= StyleSheet.create(
    {
        mainContainer:{
            flex:1,
         paddingHorizontal:20,
         paddingTop:20,
        },
        touchableWithoutFeedback:{
paddingVertical: 5,
borderWidth:1,
borderRadius:15,
justifyContent:"center",
alignItems:'center',
color:'red',
textAlign:'center'
        },
        touchableWithoutFeedbacktext:{
     color:'#000',
     },
     button1Style:{
      backgroundColor:'blue',
      width:'100%'
     }, 
     button1TextStyle:{
      color:'#000',
      
     }
    }

)
