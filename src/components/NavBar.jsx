import { Link } from "react-router-dom";

import { useCart } from "@/providers/CartProvider/CartContext";

export const NavBar = () => {
  const cart = useCart();

  return (
    <div>
      <Link to="..">Home</Link>
      <Link to="store">Store</Link>
      <Link to="store/cart">Cart [{cart.length}]</Link>
    </div>
  );
};
