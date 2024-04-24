import React, { useState } from 'react';
import { View, Text, Button, Modal,StyleSheet, Image, Alert, StatusBar, SafeAreaView} from 'react-native';

export default Flexbox=()=> {
  return (
    <View style= {styles.mainContainer}>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.View1}></View>
      <View
style={styles.View2}>
      </View>
      <View style={styles.View3}><Text>Flexbox</Text></View>
      <View style={styles.View4}></View>
      <View style={styles.View5}></View>
      </SafeAreaView>
   
     </View>
  );
}
const styles= StyleSheet.create({
    mainContainer:{
        flex: 1,
      },
      SafeAreaViewStyle:{
        flex:1,
flexDirection:'row',

      },
      View1:{
width:100, 
height:100,
backgroundColor:'blue',
left:50,
top:50,

      },
      View2:{

backgroundColor:"red",
width:100,
height:100,
left:40,
top:40,
      },
      View3:{
        left:30,
        top:30,
        backgroundColor:"orange",
        width:100,
height:100,
justifyContent: 'center',
alignItems:"center",
 },
 View4:{

  backgroundColor:"pink",
  width:100,
  height:100,
  left:20,
  top:20
        },
        View5:{

          backgroundColor:"cfcf",
          width:100,
          height:100,
          position:'absolute',
          left:10,
        top:10
                },

    })
    