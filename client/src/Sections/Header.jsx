import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { ShopContext } from '../Context/ShopContext';
import { TiShoppingBag } from "react-icons/ti";
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const [menu , setMenu] = useState(false);
  const {totalQuantity} = useContext(ShopContext);
  const {logout , user , setUser} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logout();
    navigate('/');
  }
  
  return (
    <header className='flex justify-between px-[3rem]  max-container w-full'>
        <div className='text-2xl font-bold py-[1rem] flex items-center gap-4'>
            <button onClick={()=>setMenu(true)} className='block sm:hidden'><TiThMenu className='text-3xl' /></button> <a href="/">Luxury</a>
        </div>

        <div className='hidden sm:flex gap-6 py-[1rem]'> 
            <NavLink to="/home">HOME<div className='transition-all ease-in-out underline h-[3px] rounded-3xl w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
            <NavLink to="/shop">SHOP<div className='transition-all ease-in-out underline h-[3px] rounded-3xl w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
            <NavLink to="/about-us">ABOUT<div className='transition-all ease-in-out underline rounded-3xl h-[3px] w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
            <NavLink to="/contact">CONTACT<div className='transition-all ease-in-out underline rounded-3xl h-[3px] w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
        </div>

        <div className='flex items-center gap-2 '>   
          <Link to="/cart" className='relative text-3xl  rounded-3xl '>
            <TiShoppingBag  />
            {
              totalQuantity !==0?
              <div className='absolute text-sm bg-black text-white font-semibold flex items-center justify-center  w-6 h-6 rounded-full top-[-6px] right-[-6px]'>{totalQuantity}</div>
              :null

            }
           
          </Link>
          {
              !user?
              <div className=' bg-black text-white rounded-3xl py-[0.3rem] px-[1rem]'>
                <button onClick={()=>navigate('/login')}>Log In</button>
              </div>
              :
              <div className=' bg-black text-white rounded-3xl py-[0.3rem] px-[1rem]'>
                <button onClick={handleLogOut} className='flex gap-3 justify-center items-center'>
                <img src={`http://localhost:5000/uploads/${user.profilePic}`} className='w-8 ring-2 ring-white h-8 rounded-full' alt="profilePic" />
                  {user.username}
                  
                </button>
              </div>
          }
         
        </div>
        
        
        <nav className={`padding absolute flex-col items-start gap-6 text-white font-semibold left-0 w-full ${menu? ' flex':'hidden'} top-0 bottom-0 z-50 bg-black transition-all ease-in-out `}>
          <button onClick={()=>setMenu(false)} className='text-black bg-white rounded-3xl px-4 py-1'>Back</button>
          <NavLink onClick={()=>setMenu(false)} to="/home">HOME</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/shop">SHOP</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/about-us">ABOUT</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/contact">CONTACT</NavLink>
        </nav>
    </header>
  )
}

export default Header