'use client'

import axios from 'axios'

import Input from '../../components/Input'


const Register = () => {
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const response = await axios.post(`${process.env.BACKEND_URL}/users/create`, {
      email: form.email.value,
      username: form.username.value
    })
    .then(response => response)
    .catch(error => error.response)
  }

  const getEmailError: (value: string) => string = (value: string) => {
    if(value.length < 3 || value.length > 320) {
      return 'Email must be between 3 and 320 characters long'
    }
    if(!value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
      return 'Invalid Email'
    }

    return ''
  }

  const getUsernameError: (value: string) => string = (value: string) => {
    if(value.length < 3 || value.length > 20) {
      return 'Username must be between 3 and 20 characters long'
    }
    
    return ''
  }
  
  return (
    <form onSubmit={register}>
      <Input label='Email' type='text' getError={getEmailError} />
      <Input label='Username' type='text' getError={getUsernameError} />
      <Input label='Password' type='text' />
      <Input label='Confirm Password' type='text' />
      <input type="submit" value="Register" />
    </form>
  )
}

export default Register