import React, { useState } from 'react'

const Login = () => {
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('')

 const handleSubmit = async(e)=>{

 
  e.preventDefault();
  try{
    
 
      const userData = {email,password};

      if(password.length <8){
        setError("Password must be 8 characters long");
        console.log("password must be 8 character long");
      }
      const response = await fetch('http://localhost:5000/api/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(userData),

      })
      const data = await response.json();
      
      if(!data.success){
        console.log(data.messsage);
        return;
      }

      console.log(data.token);

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