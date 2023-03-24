
import { useContext } from "react";
import { CartContext } from "../contexts/Cart.context";

import ButtonInput from "./ButtonInput";


const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartContext);
    const {name, imageUrl, price} = product;
    const addToCart = () => addItemToCart(product);

  return ( <div className="product-card-container">
        <img src={`${imageUrl}`} alt={`${name}`} />
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <ButtonInput buttonType="inverted" value="Add to Cart" onClick={addToCart}/>
    </div>)
}

export default ProductCard;