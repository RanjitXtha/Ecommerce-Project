import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const userData = {email,username,password};
        const response = await fetch('http://localhost:5000/api/user/signup',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(userData)
        })

        const data = await response.json();

        if(!data.success){
          console.log(data.message);
          return;
        }

        //console.log(data.token);

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