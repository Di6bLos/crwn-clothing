import ButtonInput from "./ButtonInput";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart.context";
import { Link } from "react-router-dom";


const CartDropdown = () => {

    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

    const closeDropdown = () => setIsCartOpen(false);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
            }
            </div>
            <Link to={"/checkout"}>
                <ButtonInput value={"Go To Checkout"} onClick={closeDropdown}/>
            </Link>
        </div>
    )
}

export default CartDropdown;