'use client'

import Input from "../../components/Input"

import useAuth from "../../hooks/useAuth"


const Login = () => {
  const { login } = useAuth()
  return (
    <form onSubmit={login}>
      <Input label='Email' type='text' />
      <Input label='Password' type='password' />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login