import { createContext, useEffect, useState } from "react";
import products from "../data";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = 'Rs.';
    const delivery_fee = 100;

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productData) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === productData.id);
        
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            const existingItem = updatedCartItems[existingItemIndex];
            
            if (existingItem.quantity < existingItem.stock) {
                existingItem.quantity++;
                setCartItems(updatedCartItems); 
                console.log('Quantity increased');
            } else {
                console.log('Stock limit reached');
            }
        } else {
            setCartItems([...cartItems, { ...productData, quantity: 1 }]);
            console.log('Added to cart');
        }
    };

    useEffect(() => {
        console.log("Updating total quantity...");
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(total);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        addToCart,
        cartItems,
        totalQuantity,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
