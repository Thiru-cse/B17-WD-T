import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        
        const exist = cartItems.find((item) => item.id === product.id);

        if (exist) {
            setCartItems(
                cartItems.map(
                    (item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }

        alert(`Added ${product.productName} to the Cart Successfully! 🛒`);
    }; 

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));

        alert(`Removed Item from the Cart Successfully! 🛒`);
    } 

    const updateQuantity = (id, quantity) => {
        setCartItems(
            cartItems.map(
                (item) =>
                    item.id === id 
                ? {...item, quantity: quantity < 1 ? 1 : quantity} : item
            )
        )
    }
    
    const isInCart = (id) => cartItems.some((item) => item.id === id);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}