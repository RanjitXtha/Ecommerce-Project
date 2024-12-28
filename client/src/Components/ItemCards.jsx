import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ItemCards = ({product}) => {
  return (
    <Link className='flex-1 min-w-[16rem] max-w-[20rem] h-full' to={`/product/${product.id}`}>
          <img src={product.image[0]} className='h-[22rem] bg-customGrey rounded-3xl' alt={product.id} />
       
        <div className='py-3 text-sm font-semibold flex flex-col justify-between min-h-[5rem]'>
            <p>{product.title}</p>
            <span className='flex justify-between items-end'>
                <span className='flex gap-4 text-base'>
                    <p>$140.42</p>
                    <p>$150.44</p>
                </span>
                <button onClick={(e)=>{e.preventDefault() ; e.stopPropagation()}} className='buttons py-[0.35rem] px-3 flex items-center gap-2'>+<FaCartShopping /></button>
            </span>
        </div>
    </Link>
  )
}

export default ItemCards