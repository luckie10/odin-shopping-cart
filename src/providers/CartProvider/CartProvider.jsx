import { useReducer } from "react";
import {
  CartContext,
  CartDispatchContext,
  getCartProduct,
} from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

const addToCart = (cart, action) => {
  if (getCartProduct(cart, action.id)) return editCartQuantity(cart, action);

  return [...cart, { id: action.id, quantity: action.quantity }];
};

const editCartQuantity = (cart, action) => {
  return cart.map((product) => {
    if (product.id === action.id) {
      return { ...product, quantity: action.quantity };
    }

    return product;
  });
};

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "add":
      return addToCart(cart, action);
    case "editQuantity":
      return editCartQuantity(cart, action);
    case "delete": {
      return cart.filter((item) => item.id !== action.id);
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
