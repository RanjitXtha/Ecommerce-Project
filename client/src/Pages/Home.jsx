import React from 'react'
import Header from '../Sections/Header'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import Category from '../Sections/Category'
import NewArrivals from '../Sections/NewArrivals'
import Trending from '../Sections/Trending'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Services />
        <Category />
        <NewArrivals />
        {/* <Trending /> */}
    </div>
  )
}

export default Home