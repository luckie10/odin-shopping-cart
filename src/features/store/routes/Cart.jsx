import { useCart } from "@/providers/CartProvider/CartContext";
import { useProductsContext } from "@/providers/ProductProvider/ProductContext";

import styles from "./Cart.module.css";

export const Cart = () => {
  const cart = useCart();
  const { products, error, loading } = useProductsContext();

  const getProductById = (products, id) =>
    products.filter((product) => product.id === id)[0];

  const composeCartItem = (item) => {
    const product = getProductById(products, item.id);

    return (
      <div className={styles.itemContainer}>
        <img
          className={styles.productImage}
          src={product.image}
          alt={product.title}
        />
        <div>
          <h1 className={styles.productName}>{product.title}</h1>
          <div className="quantity">{item.quantity}</div>
        </div>
        <span className="price">${product.price}</span>
      </div>
    );
  };

  const calculateSubtotal = () => {
    const total = cart.reduce((accumulator, item) => {
      const product = getProductById(products, item.id);
      const price = product.price;
      return accumulator + price * item.quantity;
    }, 0);

    return Math.round((total + Number.EPSILON) * 100) / 100;
  };

  if (loading) return "Loading...";
  if (error) console.error(error);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsContainer}>
        {cart.map((item) => composeCartItem(item))}
      </div>
      <div className={styles.checkoutContainer}>
        Subtotal: {calculateSubtotal()}
      </div>
    </div>
  );
};
