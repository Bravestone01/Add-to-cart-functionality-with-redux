import { AddToCart, RemoveFromCart, } from "./constants"


const initialState = [];

export const reducer = (state = initialState, action) => {
   
    
  switch (action.type) {
    case AddToCart:
      return [...state, action.data];

    case RemoveFromCart:
      let result = state.filter(item =>{
        return item.name!==action.data
      })
  

      return [...result];

    default:
      return state;
  }
};
