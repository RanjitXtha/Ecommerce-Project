import React from 'react'
import Header from '../Sections/Header'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import Category from '../Sections/Category'
import NewArrivals from '../Sections/NewArrivals'
import Trending from '../Sections/Trending';
import Collections from '../Sections/Collections';
import Footer from '../Sections/Footer'

const Home = () => {
  return (
    <div className='max-container'>
       
        <Hero />
         <Services />
        <Category />
       <NewArrivals />
       <Collections /> 
         <Trending />
      
    </div>
  )
}

export default Home