import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import{DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';


export default DrawerContent=(props) =>{
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.topBanner}>
<Image source={require('./nature1.jpg')} style={{height:'100%', width:'100%'}} resizeMode='contain'/>
        
</View>
     <DrawerContentScrollView {...props}>
        <DrawerItem
        label="Home"
        icon={()=>(
<Image source={require('./iconn2.png')} style={{height:30, width:30, marginBottom:5}} resizeMode='cover'/>
        )}
        onPress={()=>{
props.navigation.navigate('Home')
        }}
        
        />
         <DrawerItem
        label="Message"
        icon={()=>(
<Image source={require('./iconn1.png')} style={{height:30, width:30, marginBottom:5}} resizeMode='cover'/>
        )}
        onPress={()=>{
props.navigation.navigate('Dashboard')
        }}
        
        />

        
     </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1
    },
    imageStyle:{
        height:200,
        width:300
    },
    topBanner:{
      width:'100%',
      height:200,
      alignItem:"center",
      justifyContent:"center",
      marginTop:20,

    }
})
