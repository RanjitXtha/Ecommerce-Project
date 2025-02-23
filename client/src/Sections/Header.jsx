import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { ShopContext } from '../Context/ShopContext';
import { TiShoppingBag } from "react-icons/ti";
import { AuthContext } from '../Context/AuthContext';
import { FiPackage } from "react-icons/fi";


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
    <header className='margin my-0 max-container w-full grid grid-flow-col justify-between px-[1rem] sm:px-[3rem] 2xl:px-[5rem]'>
        <div className='text-2xl font-bold py-[1rem] flex items-center gap-4'>
            <button onClick={()=>setMenu(true)} className='block sm:hidden'><TiThMenu className='text-3xl' /></button> <a href="/">Luxury</a>
        </div>

        <div className='hidden sm:flex gap-6 py-[1rem]'> 
            <NavLink to="/">HOME<div className='transition-all ease-in-out underline h-[3px] rounded-3xl w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
            <NavLink to="/shop">SHOP<div className='transition-all ease-in-out underline h-[3px] rounded-3xl w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
            <NavLink to="/about">ABOUT<div className='transition-all ease-in-out underline rounded-3xl h-[3px] w-[70%] mx-auto bg-black opacity-0'></div></NavLink>
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
              <div className='group hover:rounded-b-none relative bg-black text-white rounded-3xl py-[0.3rem] px-[0.3rem] sm:px-[1rem]'>
                <div className='flex gap-3 justify-center items-center '>
                  <img src={`https://ecommerce-project-ierh.vercel.app/uploads/${user.profilePic}`} loading="lazy" className='w-8 ring-2 ring-white h-8 rounded-full' alt="profilePic" />
                  <p className='hidden sm:block'>{user.username}</p>

                  <div className='group-hover:flex hidden z-50 absolute rounded-b-2xl top-[2.6rem] left-0 w-full  flex-col items-center gap-1 bg-black p-2'>
                      <Link to="/orders">Orders</Link>
                      <button onClick={handleLogOut}>Logout</button>
                  </div>
                  
                </div>
              </div>
          }
         
        </div>
        
        
        <nav className={`padding absolute flex-col items-start gap-6 text-white font-semibold left-0 w-full ${menu? ' flex':'hidden'} top-0 bottom-0 z-50 bg-black transition-all ease-in-out `}>
          <button onClick={()=>setMenu(false)} className='text-black bg-white rounded-3xl px-4 py-1'>Back</button>
          <NavLink onClick={()=>setMenu(false)} to="/">HOME</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/shop">SHOP</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/about">ABOUT</NavLink>
          <NavLink onClick={()=>setMenu(false)} to="/contact">CONTACT</NavLink>
        </nav>
    </header>
  )
}

export default Header