import React, { useState } from 'react';
import { View, Text, Button, Modal,StyleSheet, Image, Alert, StatusBar} from 'react-native';

export default ModalView=(props)=> {
    const[isVisible, setisVisible]= useState(false)
  return (
    <View style={styles.mainContainer}>
        <StatusBar barStyle='dark-content' backgroundColor={'transparent'} translucent />
      <Button title='open Modal' onPress={()=>{setisVisible(true)}} />
      <View><Button title='Show Alert' onPress={()=>{Alert.alert("Be Awear of the Guy")}}/></View>

    <Modal visible={isVisible}
    animationType='slide'
    transparent={true}>
        <View style={styles.moadalView}>
            <View style={styles.modal}>
                <Text style={{fontSize:30, color:'red'}}>Hello</Text>
                <Image source={{uri:"https://i.stack.imgur.com/ILTQq.png"}}
                style={{height: 200, width:200}}
                resizeMode='stretch'/>
                <Button title='close Modal' onPress={()=>{setisVisible(false)}}/>
            </View>
        </View>
    </Modal>
     </View>
  );
}
const styles= StyleSheet.create({
mainContainer:{
    flex: 1,
   justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue"
},
moadalView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
modal:{
    backgroundColor:'white',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20,
    borderRadius: 20
}
})
