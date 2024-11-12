import {AddToCart, RemoveFromCart} from './constants';

export function addToCart(item) {
  return {
    type: AddToCart,
    data: item,
  };
}

export function removeFromCart(item) {  
  return {
    type: RemoveFromCart,
    data: item,
  };

  
}
