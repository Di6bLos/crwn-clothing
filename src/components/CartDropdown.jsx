import ButtonInput from "./ButtonInput";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart.context";


const CartDropdown = () => {

    const { cartItems, cartQuantity, addCartQuantity } = useContext(CartContext);
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
            }
            </div>
            <ButtonInput value={"Go To Checkout"} />
        </div>
    )
}

export default CartDropdown;