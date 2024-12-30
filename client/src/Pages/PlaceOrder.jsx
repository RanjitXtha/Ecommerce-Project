import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const {delivery_fee , currency} = useContext(ShopContext);
  return (
    <div className='margin max-container padding'>
        <h1 className='text-xl my-4 font-semibold mb-6'>Delivery Information</h1>
        <section className='grid grid-cols-2'>
          <div className='flex flex-col gap-4'>
              <span className='flex justify-between'>
                <input placeholder='First Name' className='input-field' type="text" name="firstname" id="firstname" />
                <input placeholder='Last Name' className='input-field' type="text" name="lastname" id="lastname" />
              </span>

              <input type="email" placeholder='Email Address' className='input-field' />
              <input type="text" placeholder='Street' className='input-field' />
              <span className='flex justify-between'>
                <input type="text" placeholder='City' className='input-field' />
                <input type="text" placeholder='State' className='input-field' />
              </span>
              <input type="text" placeholder='Land Mark' className='input-field' />
              <input type="text" placeholder='Phone Number' className='input-field' />

          </div>

          <div>
          <h1 className='text-xl font-semibold mt-[3rem] my-[1rem]'>Cart Total:</h1>
            <span className='flex justify-between '><p>Subtotal: </p><p>{currency} {1000}</p></span>
            <span className='flex justify-between '><p>Delivery: </p><p>{currency} {delivery_fee}</p></span>
            <span className='flex justify-between  font-semibold my-2 p-1 border-black border-t-[1px]'><p>Total: </p><p>{total+delivery_fee}</p></span>
          </div>
        </section>
    </div>
  )
}

export default PlaceOrder