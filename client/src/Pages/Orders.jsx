import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { AuthContext } from '../Context/AuthContext';
import { PiPackageFill } from "react-icons/pi";

const Orders = () => {
  const [orders , setOrders] = useState([]);
  const {currency} = useContext(ShopContext);
  const {user} = useContext(AuthContext);


  useEffect(()=>{
    const getOrders =async()=>{
      console.log(user.userId)
      try{
      const response = await fetch(`https://ecommerce-project-ierh.vercel.app/api/order/${user.userId}/getOrder`);
      const data = await response.json();
      if(!data.success){
       console.log('Error during fetching data');
       return;
      }

      console.log(data.orders)
      setOrders(data.orders)
    }catch(error){
      console.log(error)
    }
    }

    getOrders();
  },[user])
  return (
    <section className='max-container margin padding'>
            <h1 className='text-xl my-4 font-semibold'>Your Orders</h1>
            <div>
              {
               orders && orders.map((order,index)=>(
                <div key={index} className='grid grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr] items-center gap-6 mb-2'>
                <div>
                   <PiPackageFill className='text-6xl' />
               </div>
               <div className='mb-4 text-sm text-textColor'>
                   {
                       order.items.map((item,index)=>(
                           <div key={index}>
                               <p className='text-black font-semibold'>{item.title} ({item.size}) x{item.quantity}</p>
                           </div>
                       ))
                   }
                   
                   <p>{order.address.firstName} {order.address.lastName}</p>
                   <p>{order.address.email}</p>
                   <p>{order.address.city}, {order.address.district}, {order.address.province}, {order.address.landMark}</p>
                   <p>{order.address.phoneNumber}</p>
               </div>

               <div className='text-sm text-textColor'>
                   <p className='text-black font-semibold mb-2'>Items: {order.items.length}</p>
               <p><span className='text-black font-semibold'>Method: </span>{order.paymentMethod}</p>
                   <p><span className='text-black font-semibold'>Payment: </span>{order.payment?'Completed':'Pending'}</p>
                   <p className='mt-1'>{order.date.slice(0,10)}</p>
               </div>

               <div>Rs. {order.items.reduce((total ,item)=>total + parseFloat(item.price) , 0)}</div>

                <span className='flex gap-2 items-center'>
                  <div className='w-4 h-4 bg-green-600 rounded-full'></div>
                  Ready to Ship
                </span> 
                
               
           </div>
                ))
              }
            </div>
          
            
        </section>
  )
}

export default Orders