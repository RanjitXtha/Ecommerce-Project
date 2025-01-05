import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiShoppingBagFill } from "react-icons/pi";
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
    const {currency , delivery_fee , addToCart , products}  = useContext(ShopContext);
    const {productId} = useParams();
    const [product , setProduct] = useState(null);
    const [currentIndex ,setCurrentIndex] = useState(0);
    const [color , setColor] = useState('');
    const [size , setSize] = useState('');
    const [quantity , setQuantity] = useState(1);

    useEffect(()=>{
        console.log(products);
        const product = products.find(item =>item._id === productId);
        setProduct(product);
    },[productId])
    
    

    const handleQuantity=(a)=>{
        if(a === -1 && quantity > 1){
            setQuantity(quantity-1);
        }else if( a === 1 && quantity < product.stock){
            setQuantity(quantity+1);
        }
    }

    const handleCart=()=>{
        if(size === ''){
            alert('Select sizes');
            return;
        }else if
        (color === ''){
            alert('select color');
            return;
        }
        const productData = {
            size , color , id:product.id , price:(product.price - product.discount*product.price/100).toFixed(2), title:product.title , image: product.image[0] , quantity , stock:product.stock
        }
        addToCart(productData);

    }

    if(!product)
    return(
        <div className='margin'>
            Loading...
        </div>
    )
  return (
    <section className='margin  '>
        <div className='mt-[3rem] flex flex-col md:grid md:grid-cols-[1.5fr_2fr] gap-10 max-container'>
        <div className='flex flex-col gap-4'>
            <div className='w-full h-[40rem] md:h-auto'>
                <img className='rounded-3xl' src={`http://localhost:5000/uploads/${product.image[currentIndex]}`} alt="" />
            </div>
           
            <div className='grid grid-cols-3 w-full justify-between gap-2'>
                {
                    product.image.map((pic,index)=>(
                        <div onClick={()=>setCurrentIndex(index)} key={index} className='max-w-[12rem] max-h-[12rem] '>
                            <img  className={`w-full rounded-xl border-[2px] ${index === currentIndex?'border-black':''}`} src={`http://localhost:5000/uploads/${pic}`} alt="product-imag/e" />
                        </div>
                    ))
                }
              
            </div>
        </div>

        <div className='flex flex-col gap-2 '>
            <p className='text-3xl font-semibold'>{product.title}</p>
            <p>{product.description}</p>
            <p className='text-xl font-semibold'>{currency} {(product.price - product.price*product.discount/100).toFixed(2)}</p>
            <p className='text-xl  my-[1rem]'>Colors:</p>
            <div className='flex gap-3'>

                {
                    product.colors.map((colors,index)=>(
                        <div>
                            <button onClick={()=>setColor(colors)} key={index} style={{backgroundColor:`${colors}`}} className={` w-[2.5rem] h-[2.5rem] rounded-full border-[1px] border-black ring-gray-700 ${color === colors?' ring-4 border-gray-700':''} `} >
                            </button>
                            <p className='text-sm text-lightColor'>{colors}</p>
                        </div>
                        
                    ))
                }
            </div>

            <div className='flex gap-3'>
                {
                    product.sizes.map((sizes,index)=>(
                        <div>
                            <button onClick={()=>setSize(sizes)} key={index} style={{backgroundColor:`${sizes}`}} className={`w-[2.5rem] h-[2.5rem] rounded-full border-gray-700 border-[1px] ring-gray-700 ${sizes === size?' ring-4 border-gray-700':''}`} >
                                <p className='text-sm text-lightColor'>{sizes}</p>
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
                <button onClick={handleCart} className='buttons bg-customOrange text-black'>Add to Cart</button>
            </div>
           
            <button className='buttons py-3 text-lg'>Buy Now</button>
            <button className='flex items-center gap-2 py-4 border-b-[1px] border-slate-400'><FaRegHeart/ > Wishlist</button>
            <div>
               
                <p className='flex items-center my-3 '><PiShoppingBagFill className='text-3xl mr-2' /> Delivery: <p className='text-lightColor ml-2'>within 5 days</p></p>
                <p className='flex items-center '><TbTruckDelivery className='text-3xl mr-2' /> Shipping: <p className='text-lightColor ml-2'>{currency} {delivery_fee}</p></p>
            </div>  
        </div>
        </div>
        <div className='max-container'>
            <p className='text-lg mt-8 mb-4 font-semibold text-lightColor' >Information</p>
            <div className='flex flex-col gap-4'>
                {
                  Object.entries(product.information).map(([key,value])=>(
                    <p key={key}>
                        <p className='font-semibold mb-4 inline mr-3'>{key.slice(0,1).toUpperCase() + key.slice(1,key.length)}:</p>{value}
                    </p>
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Product