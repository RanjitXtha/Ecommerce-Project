import React from 'react';
import ItemCards from '../Components/ItemCards';
import { useContext } from 'react';
import { ShopContext } from '../assets/Context/ShopContext';

const Shop = () => {
    const shopData = useContext(ShopContext);
    const productData = shopData.products;
    const products = productData.slice(0,4);
  return (
    <section className='margin'>
        <div className='h-[3rem]'>
            High to low
        </div>

        <div className='grid grid-cols-[1fr_4fr] gap-6'>
            <div className='bg-cyan-300 h-full w-full'>
                <div>
                    <p>Category</p>
                    <div>
                        <p>
                            <input id="men" type="checkbox" />
                            <label htmlFor="men">Men</label>
                        
                        </p>
                        <p>
                            <input id="women" type="checkbox" />
                            <label htmlFor="women">Women</label>
                        </p>
                    
                    <p>
                            <input id="accessories" type="checkbox" />
                            <label htmlFor="accessories">Accessories</label>
                    </p>
                    
                    </div>
                </div>

                <div>
                    <p>Category</p>
                    <div>
                        <p>
                            <input id="luxury" type="checkbox" />
                            <label htmlFor="luxury">Luxury</label>
                        
                        </p>
                        <p>
                            <input type="checkbox" id="casual" />
                            <label htmlFor="casual">Casual</label>
                        </p>
                    
                    <p>
                            <input type="checkbox" id="summer" />
                            <label htmlFor="summer">Summer</label>
                    </p>

                    <p>
                        <input type="checkbox" id="winter" />
                        <label htmlFor="winter">Winterr</label>
                    </p>
                    
                    </div>
                </div>
               
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