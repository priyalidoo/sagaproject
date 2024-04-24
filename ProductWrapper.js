import React from 'react';
import { ScrollView, StyleSheet, View , Text, Button} from 'react-native';
import Product from './component/redux/Product';
import Header from './component/redux/Header';


const ProductWrapper = ({navigation}) => {
    const products = [
        {
            name: "Samsung",
            color: "black",
            image: "https://w7.pngwing.com/pngs/2/872/png-transparent-telephone-samsung-t-mobile-4g-smartphone-samsung-gadget-mobile-phone-mobile-phones.png",
            price: 70000
        },
        {
            name: "LG",
            color: "Grey",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0D8oPqdEaTp--1eYkIAChmwPV3dEMqNib9pDK3l-lQ&s",
            price: 80000
        },
        {
            name: "Motorola",
            color: "Pink",
            image: "https://motorolain.vtexassets.com/arquivos/ids/158498-800-auto?width=800&height=auto&aspect=true",
            price: 100000
        },
        {
            name: "i phone",
            color: "Yellow",
            image: "https://image.similarpng.com/very-thumbnail/2020/09/Iphone-xr-yellow-mobile-phone-on-transparent-background-PNG.png",
            price: "150000"
        },
    ]
    return (
        <View style={styles.container}>
            <Button title ="Go to User List" onPress={()=>navigation.navigate("User")}/>
            <Header/>
           <ScrollView>

                {
                    products.map((item) => <Product item={item} />)
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        }
    }
)
export default ProductWrapper;