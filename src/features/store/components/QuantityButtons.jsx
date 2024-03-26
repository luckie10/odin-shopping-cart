import { Icon } from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";

import { useDispatchCart } from "@/providers/CartProvider/CartContext";

import styles from "./QuantityButtons.module.css";

export const QuantityButtons = ({ quantity, id }) => {
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
        onClick={handleQuantityChange(id, quantity - 1)}
      >
        <Icon path={mdiMinus} size={1} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        className={styles.quantityInput}
        value={quantity}
        onChange={handleInputChange(id)}
      />
      <button
        className={styles.cartButton}
        onClick={handleQuantityChange(id, quantity + 1)}
      >
        <Icon path={mdiPlus} size={1} />
      </button>
    </>
  );
};
