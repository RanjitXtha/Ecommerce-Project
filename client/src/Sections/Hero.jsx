import React from 'react'
import hero from '../assets/Images/hero.png'
import hero1 from '../assets/Images/hero1.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className='2xl:mt-[1rem] relative padding  flex flex-col md:flex-row bg-customGrey  gap-6 margin rounded-3xl'>
        <div className='flex flex-col h-1/2 items-start justify-evenly gap-[2rem] w-full md:w-[50%]'>
            <p className="text-4xl lg:text-6xl mt-[3rem]  font-bold">
                DIVE INTO THE WORLD OF FASHION AND LUXURY
            </p>

            <p>
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