import React from 'react';
import {Link} from 'react-router-dom';
import {AdminAuthContext} from '../Context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
const Sidebar = () => {
  const navigate = useNavigate();
   const {logout} = useContext(AdminAuthContext);
   const handleLogOut = ()=>{
    logout();
    navigate('/admin/login');
  }
  return (
    <div>
        <section className='w-full '>
        <h1 className='mb-[1.5rem] font-semibold text-xl'>Dashboard</h1>
        <div className='flex flex-col gap-2'>
          <Link to='/admin/home'>Products</Link>
          <Link to='/admin/orders'>Orders</Link>
          <Link to='/admin/add-product'>Add Product</Link>
          <button className='bg-red-500 text-white px-3 py-1 rounded' onClick={handleLogOut}>Logout</button>
        </div>
      </section>
    </div>
  )
}

export default Sidebar