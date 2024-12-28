import React, { useEffect, useState, useContext } from 'react';
import ItemCards from '../Components/ItemCards';
import { ShopContext } from '../assets/Context/ShopContext';

const Shop = () => {
    const shopData = useContext(ShopContext);
    const productData = shopData.products; 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [sort , setSort] = useState('relevant');
    const [search , setSearch]= useState('');

    useEffect(() => {
        setFilteredProducts(productData);
    }, [productData]);

    const handleCategories = (e) => {
        const category = e.target.value;
        setCategories((prev) =>
            prev.includes(category)? prev.filter((item) => item !== category): [...prev, category] 
        );
    };

    const filter = () =>{
        if (categories.length > 0) {
            const filtered = productData.filter((product) =>
                product.tags.some((tag) => categories.includes(tag)) 
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(productData); 
        }
    }

    useEffect(() => {
       filter();
    }, [categories, productData]);

    const handleSort = ()=>{
     
        switch(sort){
            case 'high-low':{
                console.log("rnning")
                setFilteredProducts(filteredProducts.slice().sort((a,b)=>(b.price - a.price)));
                break;
            }
            case 'low-high':{
                setFilteredProducts(filteredProducts.slice().sort((a,b)=>(a.price - b.price)));
                break;
            }
            default:{
                filter();
                break;
            }

        }
    }
    useEffect(()=>{
        handleSort();
    },[sort]);

    const handleSearch = (e)=>{
        const searchTerm = e.target.value.toLowerCase();
        if(searchTerm!==''){
            const filteredproducts = [...productData].filter(item=>
                item.title.toLowerCase().includes(searchTerm))
                
            setFilteredProducts(filteredproducts);
        }else{
            filter();
        }
       
    }
    
    return (
        <section className='margin'>
            <div className='h-[3rem] flex justify-between'>
                <div>
                    <input type="search" placeholder='Search...' onChange={handleSearch} className='w-full h-full border-black border-[1px]' />
                </div>
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="relevant">Sort by: Relevant</option>
                    <option value="low-high">Sort by: Low-High</option>
                    <option value="high-low">Sort by: High-Low</option>
                </select>
            </div>

            <div className='grid grid-cols-[1fr_4fr] gap-6'>
                {/* Sidebar for categories */}
                <div className='bg-cyan-300 h-full w-full'>
                    <div>
                        <p>Category</p>
                        <div>
                            <p>
                                <input id="men" value="men" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="men">Men</label>
                            </p>
                            <p>
                                <input id="women" value="women" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="women">Women</label>
                            </p>
                            <p>
                                <input id="accessories" value="accessories" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="accessories">Accessories</label>
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>Season</p>
                        <div>
                            <p>
                                <input id="luxury" value="luxury" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="luxury">Luxury</label>
                            </p>
                            <p>
                                <input id="casual" value="casual" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="casual">Casual</label>
                            </p>
                            <p>
                                <input id="summer" value="summer" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="summer">Summer</label>
                            </p>
                            <p>
                                <input id="winter" value="winter" type="checkbox" onChange={handleCategories} />
                                <label htmlFor="winter">Winter</label>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Products display */}
                <div className='grid grid-cols-3 gap-4 gap-y-8'>
                    {filteredProducts.map((product, key) => (
                        <div key={key}>
                            <ItemCards product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
