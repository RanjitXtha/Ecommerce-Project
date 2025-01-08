import React, { useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Sidebar from '../Sections/Sidebar';
import { PiPackageFill } from "react-icons/pi";

const AdminOrders = () => {
    const [orders ,setOrders] = useState([]);
    useEffect(()=>{
        const getOrders = async()=>{
            try{
            const response = await fetch('http://localhost:5000/api/order/getAllOrders')
            const data = await response.json();
            if(data.success){
                setOrders(data.orders);
            }
        }catch(err){
            console.log(err);
        }
        }
        getOrders();
    },[])
  return (
    <div className='grid grid-cols-[10rem_1fr] margin gap-10'>
        <Sidebar />
        <section className=''>
           {
            orders && orders.map((order,index)=>(
                <div className='grid grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr] items-center gap-6'>
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
                    <div>
                        order placed
                    </div>
                </div>
            ))
           }
        </section>

    </div>
  )
}

export default AdminOrders