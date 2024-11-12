import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart, } from '../redux/action';
import {useEffect, useState} from 'react';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handelAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
 
    
  };


  useEffect(() => {
   let result = cartItems.find((cartItem) => cartItem.name === item.name);
   setIsAdded(!!result);
  }, [cartItems]);

  return (
    <View style={styles.main}>
      <Text style={styles.text}>{item.name} </Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.color}</Text>
      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={handelAddToCart} />
      )}
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'skyblue',
    paddingLeft: 15,
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
