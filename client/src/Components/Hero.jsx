import React from 'react'

const Hero = () => {
  return (
    <div className='padding bg-green-100 min-h-[32rem]'>
        <div className='w-[50%]'>
            <p className="text-6xl mt-[4.5rem] font-bold">
                DIVE INTO THE WORLD OF FASHION AND LUXURY
            </p>

            <p className='mt-[2rem]'>
                Dive into the world of fashion and luxury.
                Explore our collection and redefine your style.
            </p>

            <button className='buttons'>Explore Now</button>
        </div>

        <div>
            <img src={""} alt="" />
        </div>
    </div>
  )
}

export default Hero