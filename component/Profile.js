import React from 'react';
import {Text, View} from 'react-native';

const Profile= (props)=>
{
    console.warn("props".props)
        return(
            <View>
                <Text style={{fontSize:50}}>{props.data}</Text>
                
                </View>

        )
    }

export default Profile;