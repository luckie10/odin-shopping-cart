import {
  getCartProduct,
  useCart,
  useDispatchCart,
} from "@/providers/CartProvider/CartContext";

import { QuantityButtons } from "./QuantityButtons";

import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  const cart = useCart();
  const cartProduct = getCartProduct(cart, product.id);

  const AddToCartButton = () => {
    const cartDispatch = useDispatchCart();

    const addToCart = (dispatch, id) => () => {
      dispatch({
        type: "add",
        id,
        quantity: 1,
      });
    };

    return (
      <button
        className={styles.addCartButton}
        onClick={addToCart(cartDispatch, product.id)}
      >
        Add to Cart
      </button>
    );
  };

  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.title}
      />
      <h1 className={styles.productName}>{product.title}</h1>
      <div className={styles.cartButtonsContainer}>
        <div className={styles.quantityButtonsContainer}>
          {cartProduct ? (
            <QuantityButtons cartProduct={cartProduct} id={product.id} />
          ) : (
            <AddToCartButton />
          )}
        </div>
      </div>
    </div>
  );
};
