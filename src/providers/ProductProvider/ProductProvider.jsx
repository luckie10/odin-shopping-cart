import { ProductsContext } from "./ProductContext";

import { useProducts } from "@/hooks/useProducts";

export const ProductProvider = ({ children }) => {
  const products = useProducts();

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
