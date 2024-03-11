import { useReducer } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";

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

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...cart,
        {
          id: action.id,
          quantity: action.quantity,
        },
      ];
    }
    case "delete": {
      return cart.filter((item) => item.id !== action.id);
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
