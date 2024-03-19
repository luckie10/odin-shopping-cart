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
  const cartDispatch = useDispatchCart();
  const cartProduct = getCartProduct(cart, product.id);

  const handleInputChange = (dispatch, id) => {
    return (event) => dispatchQuantityChange(dispatch, id, event.target.value);
  };

  const handleQuantityChange = (dispatch, id, quantity) => () => {
    dispatchQuantityChange(dispatch, id, quantity);
  };

  const dispatchQuantityChange = (dispatch, id, quantity) => {
    if (quantity <= 0)
      dispatch({
        type: "delete",
        id,
      });
    else
      dispatch({
        type: "editQuantity",
        id,
        quantity,
      });
  };

  const addToCart = (dispatch, id) => () => {
    dispatch({
      type: "add",
      id,
      quantity: 1,
    });
  };

  const AddToCartButton = () => {
    return (
      <button
        className={styles.addCartButton}
        onClick={addToCart(cartDispatch, product.id)}
      >
        Add to Cart
      </button>
    );
  };

  const QuantityButtons = () => {
    return (
      <>
        <button
          className={styles.cartButton}
          onClick={handleQuantityChange(
            cartDispatch,
            product.id,
            cartProduct.quantity - 1,
          )}
        >
          <Icon path={mdiMinus} size={1} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          className={styles.quantityInput}
          value={cartProduct.quantity}
          onChange={handleInputChange(cartDispatch, product.id)}
        />
        <button
          className={styles.cartButton}
          onClick={handleQuantityChange(
            cartDispatch,
            product.id,
            cartProduct.quantity + 1,
          )}
        >
          <Icon path={mdiPlus} size={1} />
        </button>
      </>
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
