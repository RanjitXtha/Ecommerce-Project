import React, { useContext } from 'react';
import {AdminAuthContext} from '../Context/AdminAuthContext'
import { ShopContext } from '../Context/ShopContext';
import Sidebar from '../Sections/Sidebar';
import { useEffect , useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminHome = () => {
  const {logout , admin} = useContext(AdminAuthContext);
  console.log(admin);
  const {products} = useContext(ShopContext);
 
  const [editedProducts, setEditedProducts] = useState(products || []);

  useEffect(() => {
    setEditedProducts(products);
  }, [products]);

  const handleChange = (index, field, value) => {
    const updatedProducts = [...editedProducts];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setEditedProducts(updatedProducts);
  };

  const handleUpdate = async (product) => {
    try {
      const response = await fetch(`https://ecommerce-project-ierh.vercel.app/api/admin/update-product`, {
        method: 'PUT',
        headers: { 
            Authorization: localStorage.getItem("adminToken"),
            'Content-Type':'application/json'
         },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        toast.success("Product Updated");
      }
    } catch (error) {
      console.error("Error updating product", error);
      toast.warning("Error",error);
    }
  };

  // Send delete request
  const handleDelete = async (id) => {
    console.log(localStorage.getItem("adminToken"));
    try {
      const response = await fetch(`https://ecommerce-project-ierh.vercel.app/api/admin/remove-product/${id}`, {
        headers: {
          Authorization: localStorage.getItem("adminToken"),
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success("Product Deleted successfully")
      }
    } catch (error) {
      toast.warning("Error",error);
    }
  };

  return (
    <main className='grid grid-cols-[10rem_1fr] margin gap-10'>
      <div>
        <Sidebar />
      </div>
  
    <section className='w-full'>
      <h1 className='mb-6 text-xl font-semibold'>Products List</h1>
      <div className='grid grid-cols-[3fr_repeat(4,1fr)_2fr] mb-[1rem] items-center font-semibold'>
        <p>Title</p>
        <p>Category</p>
        <p>Price</p>
        <p>Discount</p>
        <p>Stock</p>
        <p>Actions</p>
      </div>
      {editedProducts.map((product, index) => (
        <div key={product._id} className='grid grid-cols-[3fr_repeat(4,1fr)_2fr] mb-[1rem] items-center text-textColor'>
          <div className='flex gap-2 items-center'>
            <img className='w-[4rem] h-[4rem]' src={`https://ecommerce-project-ierh.vercel.app/uploads/${product.image[0]}`} alt="product image" />
            <input 
              type="text"
              value={product.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              className='border px-2 py-1 w-full'
            />
          </div>
          <input 
            type="text"
            value={product.category}
            onChange={(e) => handleChange(index, 'category', e.target.value)}
            className='border px-2 py-1 w-full'
          />
          <input 
            type="number"
            value={product.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
            className='border px-2 py-1 w-full'
          />
          <input 
            type="number"
            value={product.discount}
            onChange={(e) => handleChange(index, 'discount', e.target.value)}
            className='border px-2 py-1 w-full'
          />
          <input 
            type="number"
            value={product.stock}
            onChange={(e) => handleChange(index, 'stock', e.target.value)}
            className='border px-2 py-1 w-full'
          />
          <div className='flex gap-2'>
            <button onClick={() => handleUpdate(product)} className='bg-blue-500 text-white px-3 py-1 rounded'>
              Update
            </button>
            <button onClick={() => handleDelete(product._id)} className='bg-red-500 text-white px-3 py-1 rounded'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  </main>
  )
}

export default AdminHome