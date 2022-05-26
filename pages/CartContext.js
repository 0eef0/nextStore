import React, { createContext, useReducer } from 'react';

const cartContext = createContext([], () => {});
const updateCart = (state, action) => {
    const temp = state.cart;
    if(state.cart.indexOf(action.id) > -1) {
        temp = temp.filter((item) => item != action.id)
        localStorage.setItem('yakuzaCart', temp);
        return { cart: temp };
    } else {
        temp.push(action.id);
        localStorage.setItem('yakuzaCart', temp);
        return { cart: temp };
    }
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useReducer(updateCart, { cart: [] });

  return (
    <cartContext.Provider value={[cart, setCart]}>
        {children}
    </cartContext.Provider>
  )
}

export { cartContext }