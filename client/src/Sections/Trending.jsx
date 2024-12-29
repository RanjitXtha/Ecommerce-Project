import React, { useEffect, useState } from 'react'
import ItemCards from '../Components/ItemCards'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Trending = () => {
        const shopData = useContext(ShopContext);
        const productData = shopData.products;
        const [products , setProducts] = useState([])
        useEffect(()=>{
            setProducts(productData.filter(item=>item.trending ).slice(0,6));
        },[])

  return (
    <section className='margin'>
        <span className='flex justify-center'><h1 className='title '>Trending</h1></span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'> 
            {
                products.map((product,key)=>(
                    <div  key={key} className='flex justify-center'>
                        <ItemCards  product={product} />
                    </div>
                ))
            }
        </div>
       
    </section>
  )
}

export default Trending