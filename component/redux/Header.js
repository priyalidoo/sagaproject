import React, { useEffect, useState } from 'react';
import { Text, View} from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

    const cartData = useSelector((state) => state.reducer);
    const [cartItems, setCartItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        <View >
            <Text style={{fontSize:20,padding:30,textAlign:'right',backgroundColor:'orange',color:'#000'}}>{cartItems}</Text>
        </View>
    );
};

export default Header;

