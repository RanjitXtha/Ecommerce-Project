import React from 'react'

const ItemCards = ({title}) => {
  return (
    <div className='max-w-[20rem] h-full bg-cyan-200'>
        <div className=' h-[18rem] bg-customGrey rounded-3xl'>

        </div>
        <div className='py-3 text-sm font-semibold flex flex-col justify-between h-[6rem]'>
            <p>{title}</p>
            <span className='flex justify-between'>
                <span className='flex gap-4'>
                    <p>$140.42</p>
                    <p>$150.44</p>
                </span>
                <button>+ Add to Cart</button>
            </span>
        </div>
    </div>
  )
}

export default ItemCards