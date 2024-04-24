import React, { useState } from 'react';
import {Platform, Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native';

const imageExample=()=>
{
  const [textInput , settextInput]= useState();
  return(
  <View style={styles.mainConatiner}>
    <SafeAreaView>
      <ScrollView>
      
    <View style={{borderWidth:1}}>
    <Text style={{color: Platform.OS=='android'?'green':'black',fontWeight: Platform.OS=='ios'?'700':'800'}}>Image Example</Text>

    <Image
    source ={{uri:"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} 
    style={{height: 200, weight:200}}
    resizeMode='contain' />

  </View>

  <View style={{borderWidth:1}}>
    <Text style={{color: Platform.OS=='android'?'green':'black',fontWeight: Platform.OS=='ios'?'700':'800'}}>Image Example</Text>

    <Image
    source ={{uri:"https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon-thumbnail.png"}} 
    style={{height: 200, weight:200}}
    resizeMode='contain' />

  </View>
  <View style={{borderWidth:1}}>
    <Text style={{color: Platform.OS=='android'?'green':'black',fontWeight: Platform.OS=='ios'?'700':'800'}}>Image Example</Text>

    <Image
    source ={{uri:"https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon-thumbnail.png"}} 
    style={{height: 200, weight:200}}
    resizeMode='contain' />

  </View>
  <View style={{borderWidth:1}}>
    <Text style={{color: Platform.OS=='android'?'green':'black',fontWeight: Platform.OS=='ios'?'700':'800'}}>Image Example</Text>

    <Image
    source ={{uri:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"}} 
    style={{height: 200, weight:200}}
    resizeMode='contain' />

  </View>
  <View style={{borderWidth:1}}>
    <Text style={{color: Platform.OS=='android'?'green':'black',fontWeight: Platform.OS=='ios'?'700':'800'}}>Image Example</Text>

    <Image
    source ={{uri:"https://images.pexels.com/photos/16948299/pexels-photo-16948299/free-photo-of-close-up-of-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600"}} 
    style={{height: 200, weight:200}}
    resizeMode='contain' />

  </View>
  </ScrollView>
  <KeyboardAvoidingView
  behaviour= 'position'>
  <TextInput
value= {textInput} onChangeText={(value)=>{settextInput(value)}}
placeholder='typehere' placeholderTextColor={'#000'}
style={{paddingVertical:10, paddingHorizontal:15, borderWidth:1, marginTop:10, marginVertical:15, backgroundColor:"#c4c4c4"}}
  />
  </KeyboardAvoidingView>
  </SafeAreaView> 
  <Text>hello</Text>
  </View>);
}
const styles= StyleSheet.create({
  mainConatiner:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default imageExample;

       



