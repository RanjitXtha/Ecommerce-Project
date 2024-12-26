import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between padding'>
        <div className='text-2xl font-bold'>
            Luxury
        </div>

        <div className='flex gap-6'>
            <nav><Link to="/home">HOME</Link></nav>
            <nav><Link to="/shop">SHOP</Link></nav>
            <nav><Link to="/about-us">ABOUT US</Link></nav>
            <nav><Link to="/contact">CONTACT</Link></nav>
        </div>

        <div className=' bg-black text-white rounded-3xl py-[0.1rem] px-[1rem]'>
            <button>Log In</button>
        </div>
    </header>
  )
}

export default Header