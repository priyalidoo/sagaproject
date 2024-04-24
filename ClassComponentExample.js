import React, { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';

const ClassComponentExample = () => {
    const[isExmaple , setIsExample]= useState(true)

    const onhandleEvent=()=>{
        setIsExample(!isExmaple);
    }

    const countExample= isExmaple
    ? require('./EnterDone/Enter.png'):
    require('./EnterDone/send.png')

return(
    <View style= {styles.main}>
        
            <Image source ={countExample}/>
        
        <Button title ="send Image" onPress={onhandleEvent}/>
    </View>
)}

const styles= StyleSheet.create({
    main: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})



export default ClassComponentExample;