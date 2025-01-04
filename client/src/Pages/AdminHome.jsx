import React, { useContext } from 'react';
import {AdminAuthContext} from '../Context/AdminAuthContext'

const AdminHome = () => {
  const {logout , user} = useContext(AdminAuthContext);

  if(!user)
  return(
    <div>
        Loading....
    </div>
  )
  
  return (
    <div>
        This is admin page
        <a href="/admin/add-product">Add Product</a>
        <p>{user.email}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminHome