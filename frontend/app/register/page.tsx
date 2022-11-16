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
    if(value.length > 320) {
      return 'Email too long'
    }
    else if(!value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
      return 'Invalid Email'
    }

    return ''
  }

  const getUsernameError: (value: string) => string = (value: string) => {
    if(value.length < 3) {
      return 'Username shorter than 3 charactes'
    }
    else if(value.length > 20) {
      return 'Username longer than 20 characters'
    }
    
    return ''
  }
  
  return (
    <form onSubmit={register}>
      <Input label='Email' type='text' getError={getEmailError} />
      <Input label='Username' type='text' getError={getUsernameError} />
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" />
      </div>
      <input type="submit" value="Register" />
    </form>
  )
}

export default Register