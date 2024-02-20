import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
      <Link to="..">Home</Link>
      <Link to="store">Store</Link>
      <Link to="store/cart">Cart</Link>
    </div>
  );
};
