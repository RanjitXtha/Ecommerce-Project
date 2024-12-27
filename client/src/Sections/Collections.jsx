import React from 'react';
import Collection from '../assets/Images/Collection.png'

const Collections = () => {
  return (
    <div className='flex flex-col md:grid overflow-hidden padding margin grid-cols-2 gap-10 rounded-3xl bg-customBlue min-h-[24rem]'>
        
        <div className='my-auto'>
            <p className='text-4xl font-bold'>Check out our Winter Collection Sale</p>
            <button className='buttons mt-8 '>Explore</button>
        </div>

        <div className='relative'>
            <img className='h-[20rem] md:h-full md:absolute w-full object-contain scale-[1.4]' src={Collection} alt="collections" />
        </div>
        
    </div>
  )
}

export default Collections