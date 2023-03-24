import { useContext } from "react";
import { CartContext } from "../contexts/Cart.context";

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, addItemToCart, deleteItemFromCart } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = item;

  const deleteItemHandler = () => deleteItemFromCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);

  return (
    <div className="checkout-item-container">
      <div className="img-container"><img src={`${imageUrl}`} alt={`${name}`} /></div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="decrease-count arrow"
          onClick={removeItemHandler}
        >
          &#10094;
        </div > 
        <span className="value">{quantity}</span>
        <div
          className="increase-count arrow"
          onClick={addItemHandler}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-btn" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
