'use client'

import useAuth from "../../hooks/useAuth"


const Login = () => {
  const { login } = useAuth()
  return (
    <form onSubmit={login}>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login