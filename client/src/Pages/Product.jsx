import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../data';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiShoppingBagFill } from "react-icons/pi";
import { ShopContext } from '../assets/Context/ShopContext';
const Product = () => {
    const {currency , delivery_fee} = useContext(ShopContext);
    const {productId} = useParams();
    console.log(productId);
    const product = products.find(item =>item.id === productId);
    console.log(product);
    
    const [currentIndex ,setCurrentIndex] = useState(0);
    const [color , setColor] = useState(null);
    const [size , setSize] = useState(null);
    const [quantity , setQuantity] = useState(1);

    const handleQuantity=(a)=>{
        if(a === -1 && quantity > 1){
            setQuantity(quantity-1);
        }else if( a === 1 && quantity < product.stock){
            setQuantity(quantity+1);
        }
    }
  return (
    <section className='margin '>
        <div className='mt-[3rem] grid grid-cols-[1.5fr_2fr] gap-10'>
        <div>
            <div className='w-[35rem] h-[38rem] mb-4'>
                <img className='rounded-3xl' src={product.image[currentIndex]} alt="" />
            </div>
           
            <div className='mt-[1rem] flex w-full justify-between gap-2'>
                {
                    product.image.map((pic,index)=>(
                        <div onClick={()=>setCurrentIndex(index)} key={index} className='max-w-[12rem] h-[12rem] '>
                            <img  className={`rounded-xl border-[2px] ${index === currentIndex?'border-black':''}`} src={pic} alt="product-imag/e" />
                        </div>
                    ))
                }
              
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <p className='text-3xl font-semibold'>{product.title}</p>
            <p>{product.description}</p>
            <p className='text-xl font-semibold'>{currency} {product.price}</p>
            <p className='text-xl  my-[1rem]'>Colors:</p>
            <div className='flex gap-3'>

                {
                    product.colors.map((color,index)=>(
                        <div>
                            <button onClick={()=>setColor(color)} key={index} style={{backgroundColor:`${color}`}} className='w-[2.5rem] h-[2.5rem] rounded-full border-gray-600 border-[2px]' >
                            </button>
                            <p className='text-sm text-lightColor'>{color}</p>
                        </div>
                        
                    ))
                }
            </div>

            <div className='flex gap-3'>
                {
                    product.sizes.map((size,index)=>(
                        <div>
                            <button onClick={()=>setSize(size)} key={index} style={{backgroundColor:`${size}`}} className='w-[2.5rem] h-[2.5rem] rounded-full border-gray-600 border-[2px]' >
                                <p className='text-sm text-lightColor'>{size}</p>
                            </button>
                            
                        </div>
                        
                    ))
                }
            </div>
            <p className='my-[1rem] text-sm'>{product.stock} in stock</p>
            <div className='flex gap-4 mb-2'>
                <div className='flex justify-between font-semibold items-center w-[8rem] h-[3rem] rounded-3xl bg-customGrey'>
                    <button onClick={()=>handleQuantity(1)} className='w-[2.5rem] h-full flex justify-center items-center'><IoIosArrowUp  /></button>
                        {quantity}
                    <button onClick={()=>handleQuantity(-1)} className='w-[2.5rem] h-full flex justify-center items-center'><IoIosArrowDown /></button>
                </div>
                <button className='buttons bg-customOrange text-black'>Add to Cart</button>
            </div>
           
            <button className='buttons py-3 text-lg'>Buy Now</button>
            <button className='flex items-center gap-2 py-4 border-b-[1px] border-slate-400'><FaRegHeart/ > Wishlist</button>
            <div>
               
                <p className='flex items-center my-3 '><PiShoppingBagFill className='text-3xl mr-2' /> Delivery: <p className='text-lightColor ml-2'>within 5 days</p></p>
                <p className='flex items-center '><TbTruckDelivery className='text-3xl mr-2' /> Shipping: <p className='text-lightColor ml-2'>{currency} {delivery_fee}</p></p>
            </div>  
        </div>
        </div>
        <div>
            <p>Information</p>
            <p>
                {
                    
                }
            </p>
        </div>
    </section>
  )
}

export default Product