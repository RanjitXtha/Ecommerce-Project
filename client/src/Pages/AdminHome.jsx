import React, { useContext } from 'react';
import {AdminAuthContext} from '../Context/AdminAuthContext'
import { ShopContext } from '../Context/ShopContext';
import Sidebar from '../Sections/Sidebar';
const AdminHome = () => {
  const {logout , admin} = useContext(AdminAuthContext);
  console.log(admin);
  const {products} = useContext(ShopContext);
  //<a href="/admin/add-product">Add Product</a>
  return (
    <main className='grid grid-cols-[10rem_1fr] margin gap-10'>
    
      <Sidebar />

      <section className='w-full'>
          <h1 className='mb-6 text-xl font-semibold'>Products List</h1>
          <div className='grid grid-cols-[3fr_repeat(4,1fr)] mb-[1rem] items-center font-semibold'>
            <p>Title</p>
            <p>Category</p>
            <p>Price</p>
            <p>Discount</p>
            <p>Stock</p>
          </div>
          {
            products && products.map((product,index)=>(
              <div className='grid grid-cols-[3fr_repeat(4,1fr)] mb-[1rem] items-center text-textColor'>
                <div className='flex gap-2 items-center'>
                  <img className='w-[4rem] h-[4rem]' src={`https://ecommerce-project-ierh.vercel.app/uploads/${product.image[0]}`} alt="product image" />
                  <p>{product.title}</p>
                </div>
                <div>{product.category}</div>
                <div>{product.price}</div>
                <div>{product.discount}</div>
                <div>{product.stock}</div>
              </div>
            ))
          }
         
      </section>
    </main>
  )
}

export default AdminHome