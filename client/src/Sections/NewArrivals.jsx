import React, { useContext, useState, useEffect } from 'react';
import ItemCards from '../Components/ItemCards';
import { ShopContext } from '../assets/Context/ShopContext';


const NewArrivals = () => {
    const shopData = useContext(ShopContext);
    const productData = shopData.products;
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        setProducts(productData.slice(0,4));
    },[])
    
  return (
    <section className='margin'>
        <span className='flex justify-center'><h1 className='title '>New Arrivals</h1></span>
        <div className='grid grid-cols-4 gap-6'> 
            {
                products.map((product,key)=>(
                    <div key={key}>
                        <ItemCards product={product} />
                    </div>
                    
                ))
            }
        </div>
       
    </section>
  )
}

export default NewArrivals