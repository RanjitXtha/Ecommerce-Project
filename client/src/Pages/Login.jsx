import React, { useState } from 'react'

const Login = () => {
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="">

    <form className="form padding margin flex flex-col gap-4 items-center" >
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