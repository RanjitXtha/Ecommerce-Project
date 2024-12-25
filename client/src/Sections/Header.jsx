import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between padding'>
        <div className='text-2xl font-bold'>
            Luxury
        </div>

        <div className='flex gap-6'>
            <nav>HOME</nav>
            <nav>SHOP</nav>
            <nav>ABOUT US</nav>
            <nav>CONTACT</nav>
        </div>

        <div className=' bg-black text-white rounded-3xl py-[0.1rem] px-[1rem]'>
            <button>Log In</button>
        </div>
    </header>
  )
}

export default Header