import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case CartActionTypes.ADD_ITEM:
          return {
              ...state,
              cartItems: [...state.cartItems, acction.payload]
          }
    default:
      return state;
  }
};

export default cartReducer;
