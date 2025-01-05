import React, { useContext, useState, useEffect } from 'react';
import ItemCards from '../Components/ItemCards';
import { ShopContext } from '../Context/ShopContext';


const NewArrivals = () => {
    const shopData = useContext(ShopContext);
    const productData = shopData.products;
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        setProducts(productData.slice(0,6));
    },[productData])

    if(products.length===0){
        return(
            <div></div>
        )
    }
    
  return (
    <section className='margin'>
        <span className='flex justify-center'><h1 className='title '>New Arrivals</h1></span>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
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

export default NewArrivals