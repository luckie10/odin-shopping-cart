import { createContext, useContext } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

export const getCartProduct = (cart, id) => {
  return cart.find((product) => {
    return product.id === id;
  });
};
