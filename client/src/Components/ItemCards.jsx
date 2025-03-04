import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


const ItemCards = ({product}) => {
  const {currency , addToCart} = useContext(ShopContext);
  console.log(product)

  const handleCart=(e)=>{
    console.log("This is running")
    e.preventDefault();
    e.stopPropagation();
          const productData = {
              size:product.sizes[0] , 
              color:product.colors[0],
              id:product._id , price:(product.price - product.discount*product.price/100).toFixed(2), title:product.title , image: product.image[0] , quantity:1 , stock:product.stock
          }
          console.log(productData)
          addToCart(productData);
  
      }
  
  return (
    <Link className='item-card rounded-3xl overflow-hidden relative group transition-all flex-1 min-w-[16rem] max-w-[20rem] h-full' to={`/product/${product._id}`}>
      <div className='h-[22rem] overflow-hidden rounded-3xl'>
      <img src={product.image[0].startsWith("http") 
    ? product.image[0] 
    : `https://ecommerce-project-ierh.vercel.app/uploads/${product.image[0]}`} loading="lazy" className='transition-all  group-hover:scale-110   bg-customGrey ' alt={product.id} />
      </div>
         
       
        <div className='py-3 text-sm font-semibold flex flex-col justify-between min-h-[5rem]'>
            <p>{product.title}</p>
            <span className='flex justify-between items-end'>
                <span className='flex gap-4 text-base'>
                  {
                    (product.discount !== 0 && product.discount !==null) ? <p>{currency} {
                     (product.price - (product.price * product.discount)/100).toFixed(2)
                      }</p>:''
                  }
                 
                  <p className={`relative ${product.discount === 0 ?'':'text-lightColor' }`}>
                  {currency} 
                    {
                        product.discount !== 0  ? <div className='absolute w-full bg-black h-[2px] top-[40%] left-0 right-0'></div> :null
                    }
                  
                    {product.price}
                  </p>
                </span>
                <button onClick={handleCart} className='buttons py-[0.35rem] px-3 flex items-center gap-2'>+<FaCartShopping /></button>
            </span>
        </div>
        {
          product.discount !==0 && product.discount!==null? <div className='absolute top-[1rem] left-[1rem] px-2 py-1 bg-white rounded-3xl shadow-lg'>{product.discount}% off</div>:null
        }
       
    </Link>
  )
}

export default ItemCards