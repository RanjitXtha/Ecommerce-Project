import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
     const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
        const userData = {email,password};
        const response = await fetch(`https://ecommerce-project-ierh.vercel.app/api/admin/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        })
        const data = await response.json();
    
        if(!data.success){
            console.log("No token available.");
            return;
        }
        console.log(data.token)
        if(data.token){
            localStorage.setItem('adminToken',data.token);
            console.log("admin logged in successfully");
            navigate('/admin/home');
            navigate(0)
        }

        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className="">

    <form className="form padding margin flex flex-col gap-4 items-center" onSubmit={handleSubmit} >
      <h1 className="text-xl font-semibold mb-4">Admin LogIn</h1>
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button className="buttons">Submit</button>
      {/* {error} */}
    </form>
  </div>
  )
}

export default AdminLogin  