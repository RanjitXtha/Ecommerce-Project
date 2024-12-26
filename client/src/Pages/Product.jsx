import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../data';

const Product = () => {
    const {productId} = useParams();
    console.log(productId);
    const product = products.find(item =>item.id === productId);
    console.log(product);
    
    const [currentIndex ,setCurrentIndex] = useState(0);
    const [color , setColor] = useState(null);
    const [size , setSize] = useState(null);
  return (
    <section className='margin grid grid-cols-[1.4fr_2fr] gap-10'>
        <div>
            <div className='w-[35rem] h-[38rem]'>
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
            <p className='text-xl font-semibold'>Rs. {product.price}</p>
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
        </div>
    </section>
  )
}

export default Product