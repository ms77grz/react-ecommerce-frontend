import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants.js';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newCartItem = action.payload;
      const existCartItem = state.cartItems.find(
        cartItem => cartItem.id === newCartItem.id
      );
      if (existCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === existCartItem.id ? newCartItem : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};
