import { Icon } from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";

import {
  getCartProduct,
  useCart,
  useDispatchCart,
} from "@/providers/CartProvider/CartContext";

import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  const cart = useCart();
  const cartProduct = getCartProduct(cart, product.id);

  const QuantityButtons = () => {
    const cartDispatch = useDispatchCart();

    const handleInputChange = (id) => {
      return (event) => dispatchQuantityChange(id, event.target.value);
    };

    const handleQuantityChange = (id, quantity) => () => {
      dispatchQuantityChange(id, quantity);
    };

    const dispatchQuantityChange = (id, quantity) => {
      if (quantity <= 0)
        cartDispatch({
          type: "delete",
          id,
        });
      else
        cartDispatch({
          type: "editQuantity",
          id,
          quantity,
        });
    };

    return (
      <>
        <button
          className={styles.cartButton}
          onClick={handleQuantityChange(product.id, cartProduct.quantity - 1)}
        >
          <Icon path={mdiMinus} size={1} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          className={styles.quantityInput}
          value={cartProduct.quantity}
          onChange={handleInputChange(product.id)}
        />
        <button
          className={styles.cartButton}
          onClick={handleQuantityChange(product.id, cartProduct.quantity + 1)}
        >
          <Icon path={mdiPlus} size={1} />
        </button>
      </>
    );
  };

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
          {cartProduct ? <QuantityButtons /> : <AddToCartButton />}
        </div>
      </div>
    </div>
  );
};
