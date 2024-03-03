import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiCartVariant, mdiPlus, mdiMinus } from "@mdi/js";

import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const onInputChange = (setStateFunction) => {
    return (event) => {
      setStateFunction(event.target.value);
    };
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 0) return;

    setQuantity(quantity - 1);
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
          <button className={styles.cartButton} onClick={decrementQuantity}>
            <Icon path={mdiMinus} size={1} />
          </button>
          <input
            type="text"
            inputMode="numeric"
            className={styles.quantityInput}
            value={quantity}
            onChange={onInputChange(setQuantity)}
          />
          <button className={styles.cartButton} onClick={incrementQuantity}>
            <Icon path={mdiPlus} size={1} />
          </button>
        </div>
        <button className={styles.addCartButton}>
          <Icon path={mdiCartVariant} size={1} color="rgb(18 18 18)" />
        </button>
      </div>
    </div>
  );
};
