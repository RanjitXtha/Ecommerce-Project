import { createContext } from "react";
import products from "../../data";

export const ShopContext = createContext();

export const ShopContextProvider = ({children})=>{
    const currency = 'Rs.';
    const delivery_fee = 100;
    const value = {
        products , currency , delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}