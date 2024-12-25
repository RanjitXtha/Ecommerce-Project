import React from 'react';
import accesories from '../assets/Images/accesories.png';
import men from '../assets/Images/men.png';
import women from '../assets/Images/women.png';


const Category = () => {
  return (
    <div className="padding my-[4rem]">
      <span className='flex justify-center'><h1 className='title'>Our Categories</h1></span>
      <div className='grid grid-flow-col gap-4 justify-between'>
          <div className='group category-cards'>
            <div className='w-full h-full'>
              <img src={men} alt="men" className='group-hover:translate-x-[50%] transition-all' />
            </div>
              
          
            <div className='group-hover:opacity-100 opacity-0 p-5 absolute top-[10%] bottom-0 w-[75%] '>
              <p className='text-2xl font-bold'>Dress For Women</p>
              <p className='text-sm'>Exclusively contains women's fashion clothing.</p>
              <button className='buttons my-2'>Shop Now</button>
            </div>

            <div className='inverted-border absolute w-[40%] h-[2rem] bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                
            </div>

            <div className='absolute w-[35%] h-[2rem] text-center bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                <p className='text-md text-white py-[1px] bg-black rounded-3xl'>MEN</p>
            </div>
            
          </div>

          <div className='group category-cards'>
            <div>
              <img src={women} alt="women" className='group-hover:translate-x-[10rem] transition-all' />
            </div>
            
            <div className='group-hover:opacity-100 opacity-0 p-5 absolute top-[10%] bottom-0 w-[75%] '>
              <p className='text-2xl font-bold'>Dress For Women</p>
              <p className='text-sm'>Exclusively contains women's fashion clothing.</p>
              <button className='buttons my-2'>Shop Now</button>
            </div>

            <div className='inverted-border absolute w-[40%] h-[2rem] bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>

            </div>

            <div className='absolute w-[35%] h-[2rem] text-center bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                <p className='text-md text-white bg-black  py-[1px] rounded-3xl'>WOMEN</p>
            </div>
          </div>

          <div className='group category-cards'>
            <div >
              <img src={accesories} alt="accessories" className='group-hover:translate-x-[10rem] transition-all' />
            </div>
            
            <div className='group-hover:opacity-100 opacity-0 p-5 absolute top-[10%] bottom-0 w-[75%] '>
              <p className='text-2xl font-bold'>Dress For Women</p>
              <p className='text-sm'>Exclusively contains women's fashion clothing.</p>
              <button className='buttons my-2'>Shop Now</button>
            </div>
            <div className='inverted-border absolute w-[40%] h-[2rem] bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>

            </div>
            <div className='absolute w-[35%] h-[2rem] text-center bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                <p className='text-md text-white bg-black  py-[1px] rounded-3xl'>ACCESORIES</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Category