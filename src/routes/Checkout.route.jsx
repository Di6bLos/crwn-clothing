import { useContext } from "react";
import { CartContext } from "../contexts/Cart.context";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutHeader from "../components/CheckoutHeader";


const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <CheckoutHeader />
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
