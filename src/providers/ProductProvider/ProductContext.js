import { createContext, useContext } from "react";

export const ProductsContext = createContext(null);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context) return context;
  return new Error("Context must be used within a Provider");
};
