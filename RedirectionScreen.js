import React from 'react';
import { View, StyleSheet, Button,  } from 'react-native';

export default RedirectionScreen=({navigation}) =>{
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonView}>
        <Button title ='Bottom Tab' onPress={()=>{
navigation.navigate('BottomTabNavigator')
        }}/>
</View>
<View style={styles.buttonView}>
<Button title ='Material bottom Tab' onPress={()=>{
navigation.navigate('MaterialBottomTabNavigator')
}}/>
</View>
<View style={styles.buttonView}>
<Button title ='Material Top Tab' onPress={()=>{
navigation.navigate('MaterialTopTab')
}}/>
      </View>

      <View style={styles.buttonView}>
<Button title ='DrawerNavigator' onPress={()=>{
navigation.navigate('DrawerNavigator')
}}/>
      </View>

      <View style={styles.buttonView}>
<Button title ='FlatList' onPress={()=>{
navigation.navigate('FlatListExample')
}}/>
      </View>
      <View style={styles.buttonView}>
<Button title ='SectionList' onPress={()=>{
navigation.navigate('SectionListExample')
}}/>
</View>
<View style={styles.buttonView}>
<Button title ='TouchableExample' onPress={()=>{
navigation.navigate('TouchableExample')
}}/>
</View>
<View style={styles.buttonView}>
<Button title ='CustomComponenteExample' onPress={()=>{
navigation.navigate('CustomComponentExample')
}}/>
</View>
<View style={styles.buttonView}>
<Button title ='App' onPress={()=>{
navigation.navigate('App')
}}/>
</View>

     </View>
  );
}

const styles= StyleSheet.create({
        mainContainer:{
            flex:1,
            paddingHorizontal:20,
    },
    buttonView:{
        marginTop: 30
    }
})
