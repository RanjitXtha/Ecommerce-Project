import React, { useEffect, useState, useContext } from 'react';
import ItemCards from '../Components/ItemCards';
import { ShopContext } from '../Context/ShopContext';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

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
        console.log(category);
        setCategories((prev) =>
            prev.includes(category)? prev.filter((item) => item !== category): [...prev, category] 
        );
    };

    const filter = () => {
        if (categories.length > 0) {
            const filtered = productData.filter((product) =>
                product.tags.some((tag) => categories.includes(tag)) || categories.includes(product.category.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(productData);
        }
    };

    useEffect(() => {
       filter();
    }, [categories, productData]);

    const handleSort = ()=>{
     
        switch(sort){
            case 'high-low':{
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


    if(productData.length===0){
        return(
            <div></div>
        )
    }
    
    return (
        <section className='margin '>
            <div className=' max-container h-[3rem] flex justify-between items-center mb-4'>
                <div className='w-[40%] h-[2rem] relative'>
                    <input type="search" placeholder='Search...' onChange={handleSearch} className='outline-none px-4 pl-10 rounded-3xl w-full h-full border-black bg-[#f6f6f6]' />
                    <div className='absolute top-2 h-full left-4 my-auto'><IoSearch /></div>
                </div>
                <div className='flex gap-6 items-center'>
                    <select className='text-xs' onChange={(e)=>setSort(e.target.value)}>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low-High</option>
                        <option value="high-low">Sort by: High-Low</option>
                    </select>
                    <HiMenuAlt3 className='text-xl' />
                </div>
            </div>

            <div className='max-container flex flex-col xl:grid xl:grid-cols-[1fr_4.2fr] gap-4 xl:gap-8'>
          
                <div className='h-full w-full flex xl:block gap-14'>
                    <div className='mb-6 xl:mb-0'>
                        <p className='flex gap-2 items-center mb-4'><LuMenu className='text-xl' /> Filter</p>
                        <div className='flex xl:block gap-10'>
                            <div className='mb-4 xl:border-b-[1px] pb-4 border-customGrey'>
                                <p className='flex gap-2'>
                                    <input id="men" value="men" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="men">Men</label>
                                </p>
                                <p className='flex gap-2'>
                                    <input id="women" value="women" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="women">Women</label>
                                </p>
                                <p className='flex gap-2'>
                                    <input id="accessories" value="accessories" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="accessories">Accessories</label>
                                </p>
                            </div>

                            <div>
                                <p className='flex gap-2'>
                                    <input id="luxury" value="luxury" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="luxury">Luxury</label>
                                </p>
                                <p className='flex gap-2'>
                                    <input id="casual" value="casual" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="casual">Casual</label>
                                </p>
                                <p className='flex gap-2'>
                                    <input id="summer" value="summer" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="summer">Summer</label>
                                </p>
                                <p className='flex gap-2'>
                                    <input id="winter" value="winter" type="checkbox" onChange={handleCategories} />
                                    <label htmlFor="winter">Winter</label>
                                </p>
                            </div>
                        </div>

                       
                        
                    </div>
                </div>

                {/* Products display */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
                    {filteredProducts.map((product, key) => (
                         <div  key={key} className='flex justify-center'>
                         <ItemCards  product={product} />
                     </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
