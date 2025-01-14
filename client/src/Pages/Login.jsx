import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(AuthContext);
  const navigate = useNavigate();

 const handleSubmit = async(e)=>{

 
  e.preventDefault();
  try{
    
 
      const userData = {email,password};


      const response = await fetch('http://localhost:5000/api/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(userData),

      })
      const data = await response.json();
      
      if(!data.success){
        toast.error(data.message)
        return;
      }

      if(data.token){
        localStorage.setItem('token',data.token);
        console.log('Login Sucessful');
        toast.success("Successfully Logged In")
        navigate('/')
        navigate(0);
        //forces refresh of the page
      }

    }catch(error){
      console.log(error);
    }
 }

  return (
    <div className="">

    <form className="form padding margin flex flex-col gap-4 items-center" onSubmit={handleSubmit} >
      <h1 className="text-xl font-semibold mb-4">Log In</h1>
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
      <p className="text-center">OR</p>
      <a href="/signup" className="text-center hover:text-blue-500">
        No account? Sign up instead
      </a>
    </form>
  </div>
  )
}

export default Login