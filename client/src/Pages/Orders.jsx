import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Orders = () => {
  const {products , currency} = useContext(ShopContext);
  return (
    <section className='max-container margin padding'>
            <h1 className='text-xl my-4 font-semibold'>Your Orders</h1>
            <div>
              {
                products.slice(0,4).map((item,index)=>(
                  <div key={index} className='flex flex-col  md:grid md:grid-cols-[2fr_1.4fr] gap-6 mb-4 justify-between items-center'>
                    <div className='flex gap-10'>
                      <img className="w-[6rem] h-[6rem] object-contain" src={item.image[0]} alt="image" />
                      <div className='flex flex-col gap-1'>
                        <p className='font-semibold'>{item.title}</p>
                        <p className='text-lightColor text-lg'>{currency} {item.price} Quantity: {2}</p>
                        <span className='flex items-center gap-2 text-sm'>
                          <p>Color: </p><div style={{backgroundColor:`${item.color}`}} className='w-4 h-4 ring-1 ring-black rounded-full mr-3' ></div>
                          <p>Size:</p><div className='w-4 h-4 ring-1 ring-black rounded-full mr-3 flex justify-center items-center'>{item.size}</div>
                          <p>Date: 2024-02-24</p>
                        </span>
                      </div>
                    </div>
                   
    
                    <div className='flex justify-between gap-4'>
                      
                      <span className='flex gap-2 items-center'><div className='w-4 h-4 bg-green-600 rounded-full'></div>Ready to Ship</span>   
                      <div className=''>
                        Track Order
                      </div>   
                    </div>     

                          
                  </div>
                ))
              }
            </div>
          
            
        </section>
  )
}

export default Orders