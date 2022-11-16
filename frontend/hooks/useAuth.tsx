'use client'

import { createContext, useState, useContext } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'

import useAlert from './useAlert'


interface IUser {
  exp: number,
  iat: number,
  jti: string,
  token_type: string,
  user_id: number,
  email: string,
  username: string
}

interface IAuth {
  tokens: { refresh: string, access: string } | null,
  user: IUser | null,
  login: (e: React.FormEvent<HTMLFormElement>) => void,
  logout: () => void
}

export const AuthContext = createContext<IAuth>({
  tokens: null,
  user: null,
  login: (e: React.FormEvent<HTMLFormElement>) => {},
  logout: () => {}
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [ tokens, setTokens ] = useState(null)
  const [ user, setUser ] = useState(null)
  const { setAlert } = useAlert()
  const { push } = useRouter()

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const response = await axios.post(`${process.env.BACKEND_URL}/users/get-tokens`, {
      email: form.email.value,
      password: form.password.value
    })
    .then(response => response)
    .catch(error => error.response)

    if(response.status === 400) {
      setAlert({ visible: true, type: 'error', text: 'Bad Request' })
    }
    else if(response.status === 401) {
      setAlert({ visible: true, type: 'error', text: 'Invalid Email or Password' })
    }
    else if(response.status === 200) {
      setTokens(response.data)
      setUser(jwt_decode(response.data.access))
      setAlert({ visible: true, type: 'success', text: 'Succesfully Logged In' })
      push('/')
    }
  }

  const logout = () => {
    setTokens(null)
    setUser(null)
  }

  const values: IAuth = { tokens, user, login, logout }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  )
}

export default () => useContext(AuthContext)