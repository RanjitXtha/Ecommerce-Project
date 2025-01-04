import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ItemCards = ({product}) => {
  return (
    <Link className='item-card rounded-3xl overflow-hidden relative group transition-all flex-1 min-w-[16rem] max-w-[20rem] h-full' to={`/product/${product._id}`}>
          <img src={`http://localhost:5000/uploads/${product.image[0]}`} className='transition-all  group-hover:scale-110  h-[22rem] bg-customGrey rounded-3xl' alt={product.id} />
       
        <div className='py-3 text-sm font-semibold flex flex-col justify-between min-h-[5rem]'>
            <p>{product.title}</p>
            <span className='flex justify-between items-end'>
                <span className='flex gap-4 text-base'>
                  {
                    (product.discount !== 0 && product.discount !==null) ? <p>{
                     (product.price - (product.price * product.discount)/100).toFixed(2)
                      }</p>:''
                  }
                 
                  <p className={`relative ${product.discount === 0 ?'':'text-lightColor' }`}>
                    {
                        product.discount !== 0  ? <div className='absolute w-full bg-black h-[2px] top-[40%] left-0 right-0'></div> :null
                    }
                  
                    {product.price}
                  </p>
                </span>
                <button onClick={(e)=>{e.preventDefault() ; e.stopPropagation()}} className='buttons py-[0.35rem] px-3 flex items-center gap-2'>+<FaCartShopping /></button>
            </span>
        </div>
        {
          product.discount !==0 && product.discount!==null? <div className='absolute top-[1rem] left-[1rem] px-2 py-1 bg-white rounded-3xl shadow-lg'>{product.discount}% off</div>:null
        }
       
    </Link>
  )
}

export default ItemCards