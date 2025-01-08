import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <section className='w-full '>
        <h1 className='my-[1.5rem]'>Admin Dashboard</h1>
        <div className='flex flex-col gap-2'>
            <p>Products</p>
            <p>Orders</p>
            <p>Sales</p>
        </div>
      </section>
    </div>
  )
}

export default Sidebar