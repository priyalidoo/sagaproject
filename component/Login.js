import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export const Login = (props) => {
    const [name, setname]= useState("");
    Age= 29;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ fontSize: 40, color: "red" }}> Login Page</Text>
            <TextInput style={{fontSize:20, borderWidth:2, borderColor:'#000'}} placeholder='Enter the name'
            onChangeText={(text)=>setname(text)}/>
            <Button title="Go to Home Page" onPress={()=> props.navigation.navigate("Home",{name, Age})} />
        </View>
    )
}

