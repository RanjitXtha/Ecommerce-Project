import React from 'react'
import hero from '../assets/Images/hero.png'
import hero1 from '../assets/Images/hero1.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className='relative padding  flex flex-col md:flex-row  gap-6 bg-customGrey margin rounded-3xl'>
        <div className='w-full md:w-[50%]'>
            <p className="text-4xl lg:text-6xl mt-[3rem]  md:mt-[4.5rem] font-bold">
                DIVE INTO THE WORLD OF FASHION AND LUXURY
            </p>

            <p className='mt-[2rem]'>
                Dive into the world of fashion and luxury.
                Explore our collection and redefine your style.
            </p>

            <button onClick={()=>navigate('/shop')} className='buttons mt-[2rem] mb-[1rem]'>Explore Now</button>
        </div>

        <div className='w-full md:w-[50%]  h-full my-auto'>
            <img src={hero1} alt="hero" />
        </div>
    </div>
  )
}

export default Hero