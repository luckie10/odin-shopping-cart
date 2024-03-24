import { ProductCard } from "../components/ProductCard";

import styles from "./Store.module.css";
import { useProductsContext } from "@/providers/ProductProvider/ProductContext";

export const Store = () => {
  const { products, error, loading } = useProductsContext();

  if (loading) return "Loading...";
  if (error) console.error(error);

  return (
    <div className={styles.storeContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
