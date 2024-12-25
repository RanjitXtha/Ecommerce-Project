import React from 'react'
import ItemCards from '../Components/ItemCards'

const Trending = () => {
    const title1 = "Stripped Flutter ";
    const title = "Stripped Flutter Sleeve Overlap Collar Pepium Hem Blouse"
  return (
    <section className='margin'>
        <span className='flex justify-center'><h1 className='title '>Trending</h1></span>
        <div className='grid grid-cols-4 gap-4'> 
            <ItemCards title={title} />
            <ItemCards title={title1} />
            <ItemCards title={title}/>
            <ItemCards title={title1}/>
        </div>
       
    </section>
  )
}

export default Trending