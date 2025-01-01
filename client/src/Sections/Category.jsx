import React from 'react';
import accesories from '../assets/Images/accesories.png';
import men from '../assets/Images/men.png';
import women from '../assets/Images/women.png';


const Category = () => {

  const categories = [
    {
      title: 'MEN',
      image : men,
      info1:'Dress For Men',
      info2:'Exclusively contains momen\'s fashion clothing.'
    },
    {
      title: 'WOMEN',
      image : women,
      info1:'Dress For Men',
      info2:'Exclusively contains momen\'s fashion clothing.'
    },
    {
      title: 'ACCESSORIES',
      image : accesories,
      info1:'Dress For Men',
      info2:'Exclusively contains momen\'s fashion clothing.'
    }
  ]
  return (
    <div className="margin">
      <span className='flex justify-center'><h1 className='title'>Our Categories</h1></span>
      <div className='flex flex-wrap  gap-x-4 gap-y-8 justify-evenly'>
        {
          categories.map((category,key)=>(
            <div key={key} className='group category-cards'>
              <div className='w-full h-full'>
                <img src={category.image} alt="men" className=' group-hover:translate-x-[30%] transition-all' />
              </div>
                
            
              <div className='group-hover:opacity-100 opacity-0 p-5 absolute top-[10%] bottom-0 w-[75%] '>
                <p className='text-2xl font-bold'>{category.info1}</p>
                <p className='text-sm'>{category.info2}</p>
                <button className='buttons my-2'>Shop Now</button>
              </div>

              <div className='inverted-border absolute w-[40%] h-[2.4rem] bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                  
              </div>

              <div className='absolute w-[35%] h-[2rem] text-center bg-white  top-0 left-0 rounded-b-2xl right-0 mx-auto'>
                  <p className='text-md text-white py-[5px] bg-black rounded-3xl'>{category.title}</p>
              </div>
              
          </div>
          ))
        }
          
      </div>
    </div>
  )
}

export default Category