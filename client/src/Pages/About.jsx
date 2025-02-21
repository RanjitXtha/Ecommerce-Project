import React from 'react'
import img1 from '../assets/Images/men.jpg';
import img2 from '../assets/Images/women.jpg';

const About = () => {
  return (
    <section className="py-12 margin rounded-3xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold  mb-4">Our Story</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded with the vision to provide luxury and high-quality casual clothing and accessories, we blend modern
            trends with timeless style. Our collections are curated for those who appreciate the finer things in life
            and seek to express their individuality through fashion.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Each piece in our store is thoughtfully designed and meticulously crafted to ensure it meets our
            uncompromising standards of quality and style.
          </p>
        </div>
        <div>
          <img
            src= {img1}
            alt="Luxury Clothing"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <img
            src={img2}
            alt="High-Quality Accessories"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold  mb-4">Our Commitment</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to sustainability and ethical practices in every step of our process. From sourcing the
            finest materials to partnering with artisans who share our values, we ensure that each item is not only
            luxurious but also responsibly made.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Our goal is to provide our customers with products that they can feel good about wearing, knowing they are
            crafted with care and integrity.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About