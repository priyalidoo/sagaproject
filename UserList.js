import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUserList } from './actions';


const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer)

    useEffect(() => {
        dispatch(getUserList())
    }, [])
    console.warn("in component", userList)
    return (
        <ScrollView >
            {
                userList.length?
                userList.map((item) => (<Text style={{ fontSize: 18 }}>{item.firstName}</Text>))
                :null
            }
        </ScrollView>
    );
};

export default UserList;
