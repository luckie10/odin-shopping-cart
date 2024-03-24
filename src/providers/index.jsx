import { CartProvider } from "./CartProvider";
import { ProductProvider } from "./ProductProvider";

export const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};
