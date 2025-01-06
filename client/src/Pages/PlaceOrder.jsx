import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PlaceOrder = () => {
  //const navigate = useNavigate();
  const {delivery_fee, currency , cartItems } = useContext(ShopContext);
  const {user} = useContext(AuthContext);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    const totalPrice = cartItems.reduce((sum,item)=>sum+item.quantity*item.price,0);
    setTotal(parseFloat(totalPrice.toFixed(2)));
  },[cartItems])

  const [orderDetail, setOrderDetail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    landMark: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const orderData = {
      userId: user.userId,
      items: JSON.stringify(cartItems),
      amount: (total+delivery_fee).toFixed(2),
      address: orderDetail,
      status: 'Order Placed',
      paymentMethod: 'eSewa',
      payment:true,
    }
    const response = await fetch('http://localhost:5000/api/order/addOrder',{
      method:'POST',
      headers:{
        Authorization:user,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(orderData)
    })

    const data = await response.json();
    console.log(orderData)
    
  }

  return (
    <div className='margin max-container padding'>
      <h1 className='text-xl my-4 font-semibold mb-6'>Delivery Information</h1>
      <form className='flex flex-col md:flex-row gap-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <span className='flex justify-between gap-4'>
            <input
              placeholder='First Name'
              className='input-field w-[50%] md:w-[20vw]'
              type='text'
              name='firstName'
              value={orderDetail.firstName}
              onChange={handleChange}
            />
            <input
              placeholder='Last Name'
              className='input-field w-[50%] md:w-[20vw]'
              type='text'
              name='lastName'
              value={orderDetail.lastName}
              onChange={handleChange}
            />
          </span>

          <input
            type='email'
            placeholder='Email Address'
            className='input-field'
            name='email'
            value={orderDetail.email}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Street'
            className='input-field'
            name='street'
            value={orderDetail.street}
            onChange={handleChange}
          />
          <span className='flex justify-between gap-4'>
            <input
              type='text'
              placeholder='City'
              className='input-field w-[50%] md:w-[20vw]'
              name='city'
              value={orderDetail.city}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='State'
              className='input-field w-[50%] md:w-[20vw]'
              name='state'
              value={orderDetail.state}
              onChange={handleChange}
            />
          </span>
          <input
            type='text'
            placeholder='Land Mark'
            className='input-field'
            name='landMark'
            value={orderDetail.landMark}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Phone Number'
            className='input-field'
            name='phoneNumber'
            value={orderDetail.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className='w-full'>
          <h1 className='text-xl font-semibold mt-[3rem] my-[1rem]'>Cart Total:</h1>
          <span className='flex justify-between'>
            <p>Subtotal: </p>
            <p>{currency} {total}</p>
          </span>
          <span className='flex justify-between'>
            <p>Delivery: </p>
            <p>{currency} {delivery_fee}</p>
          </span>
          <span className='flex justify-between font-semibold my-2 p-1 border-black border-t-[1px]'>
            <p>Total: </p>
            <p>{(total + delivery_fee).toFixed(2)}</p>
          </span>
          <div>
            <p className='mt-4 mb-2 text-lg font-semibold'>Payment Method:</p>
            <div className='w-[6rem] h-[4rem] bg-green-600 mb-6'></div>
            <button className='buttons'>
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
