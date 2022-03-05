import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, mainColor, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + mainColor);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + mainColor) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return {
            ...cartItem,
            amount: newAmount,
          };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + mainColor,
        name: product.name,
        mainColor,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, decOrInc } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      let newAmount;
      if (cartItem.id === id) {
        const { amount, max } = cartItem;
        if (decOrInc === "dec") {
          newAmount = amount > 1 ? amount - 1 : amount;
        }
        if (decOrInc === "inc") {
          newAmount = amount <= max ? amount + 1 : amount;
        }
      }
      return {
        ...cartItem,
        amount: newAmount,
      };
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const id = action.payload;
    const tempCart = state.cart.filter((cartItem) => cartItem.id !== id);
    return { ...state, cart: tempCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
