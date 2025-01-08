import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <section className='w-full '>
        <h1 className='mb-[1.5rem] font-semibold text-xl'>Dashboard</h1>
        <div className='flex flex-col gap-2'>
          <Link to='/admin/home'>Products</Link>
          <Link to='/admin/orders'>Orders</Link>
          <Link to='/admin/sales'>Sales</Link>
        </div>
      </section>
    </div>
  )
}

export default Sidebar