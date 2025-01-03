import React, { useContext } from 'react';
import {AdminAuthContext} from '../Context/AdminAuthContext'

const AdminHome = () => {
  const {logout , user} = useContext(AdminAuthContext);
  return (
    <div>
        This is admin page
        <a href="/admin/add-product">Add Product</a>
        <p>{user}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminHome