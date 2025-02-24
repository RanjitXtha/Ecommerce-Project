import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => { 
  const {user} = useContext(AuthContext);
  
  const navigate = useNavigate();
  const {cartItems,currency ,setCartItems , increaseQuantity , decreaseQuantity , removeFromCart , delivery_fee} = useContext(ShopContext);
  const [total , setTotal] = useState(0);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get('status');
  console.log('status' + status);

  useEffect(()=>{
    const totalPrice = cartItems.reduce((sum,item)=>sum+item.quantity*item.price,0);
    setTotal(parseFloat(totalPrice.toFixed(2)));
    console.log(cartItems)
  },[cartItems]);
 

  useEffect(() => {
    if (status === 'success') {
      toast.success("Payment successful!");
      setCartItems([]);

    } else if (status === 'failure') {
      toast.error("Payment failed. Please try again.");
    }
  }, [status]);

  const placeOrder = ()=>{
    if(user){
      navigate('/place-order');
    }else{
      navigate('/login');
    }
    
  }

  if (cartItems.length ===0){
    return(
      <div className='max-container margin padding'>
        There are no items in the cart....
      </div>
    )
  }
  return (
    <section className='max-container margin padding'>
        <h1 className='text-xl my-4 font-semibold'>Your Cart</h1>
        <div>
          {
            cartItems.map((item,index)=>(
              <div key={index} className='flex flex-col  md:grid md:grid-cols-[2fr_1.4fr] gap-6 mb-4 justify-between items-center'>
                <div className='flex gap-10'>
                  <img className="w-[6rem] h-[6rem] object-contain" src={item.image.startsWith("http") 
    ? item.image
    : `https://ecommerce-project-ierh.vercel.app/uploads/${item.image}`} alt="image" />
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>{item.title}</p>
                    <p className='text-lightColor text-lg'>{currency} {item.price}</p>
                    <span className='flex items-center gap-2'>
                      <p>Color: </p><div style={{backgroundColor:`${item.color}`}} className='w-6 h-6 ring-1 ring-black rounded-full mr-3' ></div>
                      <p>Size:</p><div className='w-6 h-6 ring-1 ring-black rounded-full mr-3 flex justify-center items-center'>{item.size}</div>
                    </span>
                  </div>
                </div>
               

                <div className='flex justify-between gap-4'>
                  <div className='flex justify-between font-semibold items-center w-[8rem] h-[3rem] rounded-3xl bg-customGrey'>
                      <button onClick={()=>increaseQuantity(item.id , item.size , item.color)} className='w-[2.5rem] h-full flex justify-center items-center'><IoIosArrowUp  /></button>
                          {item.quantity}
                      <button onClick={()=>decreaseQuantity(item.id , item.size , item.color)} className='w-[2.5rem] h-full flex justify-center items-center'><IoIosArrowDown /></button>
                  </div>

                  <div>
                    <button className='text-xl bg-customGrey rounded-full p-3' onClick={()=>removeFromCart(item.id , item.color , item.size)}><FaTrashCan /></button>
                  </div>
                </div>
             
                
              </div>
            ))
          }
        </div>
        <div className='flex flex-col items-end '>
          <div className='w-full sm:w-[50%] md:w-[30%]'>
            <h1 className='text-xl font-semibold mt-[3rem] my-[1rem]'>Cart Total:</h1>
            <span className='flex justify-between '><p>Subtotal: </p><p>{currency} {total.toFixed(2)}</p></span>
            <span className='flex justify-between '><p>Delivery: </p><p>{currency} {delivery_fee}</p></span>
            <span className='flex justify-between  font-semibold my-2 p-1 border-black border-t-[1px]'><p>Total: </p><p>{total+delivery_fee}</p></span>
            
          </div>
          <button onClick={placeOrder} className='buttons'>Check Out</button>
        </div>
        
    </section>
  )
}

export default Cart