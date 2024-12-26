import React from 'react';
import products from '../data';
import ItemCards from '../Components/ItemCards';

const Shop = () => {
  return (
    <section className='margin'>
        <div className='h-[3rem]'>
            High to low
        </div>

        <div className='grid grid-cols-[1fr_4fr] gap-6'>
            <div className='bg-cyan-300 h-full w-full'>
                aa
            </div>
                
            <div className='grid grid-cols-3 gap-4 gap-y-8'>
                {
                    products.map((product,key)=>(
                        <div key={key}>
                            <ItemCards product={product} />
                        </div>
                    ))
                }
            </div>
        </div>

        
    </section>
  )
}

export default Shop