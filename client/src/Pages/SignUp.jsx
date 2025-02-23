import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    const navigate=  useNavigate();
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const userData = new FormData();
        userData.append('email',email);
        userData.append('username',username);
        userData.append('password',password);
        userData.append('profilePic',profile);

        const response = await fetch(`https://ecommerce-project-ierh.vercel.app/api/user/signup`,{
          method:'POST',
        
          body:userData
        })

        const data = await response.json();

        if(!data.success){
          toast.error(data.message)
          return;
        }

        if(data.token){
          localStorage.setItem('token',data.token);
          console.log('successfully signed IN');
          toast.success("Account created successfully.")
          navigate('/');
          navigate(0);
        }

      }catch(error){
        console.log(error)
      }
    }
  return (
    <div className="">

    <form className="form padding margin flex flex-col gap-4 items-center" onSubmit={handleSubmit} >
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
       <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />

      <input
        type="file"
        id="profile"
        accept="image/*" 
        onChange={(e) => setProfile(e.target.files[0])}
      
      />
      
      <button className="buttons">Submit</button>
      {/* {error} */}
      <p className="text-center">OR</p>
      <a href="/login" className="text-center hover:text-blue-500">
        Already have an account? Log In instead. 
      </a>
    </form>
  </div>
  )
}

export default SignUp