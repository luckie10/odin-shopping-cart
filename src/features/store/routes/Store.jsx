import { useProducts } from "../api/products";
import { ProductCard } from "../components/ProductCard";

import styles from "./Store.module.css";

export const Store = () => {
  const { products, error, loading } = useProducts();

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
