
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { addToCart, removeFromCart } from './actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer)
  const [isAdded, setIsAdded] = useState(false);

  const handleaddTOCart = (item) => {
    dispatch(addToCart(item))

  }
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === item.name
    });
    if (result.length) {
      setIsAdded(true)
    }
    else {
      setIsAdded(false)
    }
  }, [cartItems])
  return (

    <View style={styles.mainContainer}>
      <Text style={styles.text}> {item.name} </Text>
      <Text style={styles.text}> {item.color} </Text>
      <Text style={styles.text}> {item.price} </Text>
      < Image style={styles.image} source={{ uri: item.image }} />
      {
        isAdded ?
          <Button title="Remove To Cart" onPress={() => handleRemoveFromCart(item)} />
          :
          <Button title="Add To Cart" onPress={() => handleaddTOCart(item)} />
      }
    </View>

  )
}
const styles = StyleSheet.create(
  {

    mainContainer: {
      alignItems: 'center',
      borderBottomColor: 'orange',
      borderBottomWidth: 2,
      padding: 10,
      margin: 5

    },
    text: {
      fontSize: 20,
      color: '#000',
      margin: 2,
      padding: 2,
      paddingTop: 30,

    },
    image: {
      height: 100,
      width: 50
    }
  }
)
export default Product;