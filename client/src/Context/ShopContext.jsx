import { createContext, useEffect, useState } from "react";
//import products from "../data";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const[products , setProducts] = useState([]);

    useEffect(()=>{

      const getAllProducts = async()=>{

        try{
        const response = await fetch('http://localhost:5000/api/admin/get-all-product');
        const product = await response.json();
        console.log("fetching product data")
        setProducts(product.productList);
        }catch(error){
          console.log(error);
        }
      }

      getAllProducts();
    },[])

 
  const currency = "Rs.";
  const delivery_fee = 100;

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  useEffect(()=>{
    console.log("setting item in cart")
    localStorage.setItem('cart',JSON.stringify(cartItems));
  },[cartItems])

  const addToCart = (productData) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.id === productData.id &&
        item.size === productData.size &&
        item.color === productData.color
    );
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const existingItem = updatedCartItems[existingItemIndex];

      const newQuantity = existingItem.quantity + productData.quantity;
      if (newQuantity <= existingItem.stock) {
        existingItem.quantity = newQuantity;
        setCartItems(updatedCartItems);
      } else {
        console.log("Stock limit reached");
      }
    } else {
     
      setCartItems([...cartItems, { ...productData, quantity: productData.quantity }]);
      console.log("Added to cart");
    }
  };
  


  const increaseQuantity = (id , size  , color) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
      (item.id === id && item.color === color && item.size === size) && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id , size , color) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
      (item.id === id && item.color === color && item.size === size) && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  
  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === id && item.color === color && item.size === size)
      )
    );
  };
  
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    totalQuantity,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart, 
  };

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};
