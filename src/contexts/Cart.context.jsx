import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // loops through the array of cartItems and finds an item that matches the id of the product being added
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    // If it finds and existing item, then it returns a NEW object with all the existing properties, but increases the quantity by 1
    if(existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ? 
            {...item, quantity: item.quantity + 1}
            : item
        );
    }
    // If it does not find an existing item that matches the id, 
    // then it adds a cart item with all the properties of the product plus an addidtional quantity property set to 1
    return [...cartItems, { ...productToAdd, quantity: 1}]
};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
     cartCount: 0,
});

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount ] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0 );
        setCartCount(newCartCount);
    },
    [cartItems])

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}