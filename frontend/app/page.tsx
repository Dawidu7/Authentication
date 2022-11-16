'use client'

import Link from "next/link"

import useAuth from "../hooks/useAuth"


const Home = () => {
  const { user, logout } = useAuth()

  return !user 
  ? <>
      <p>You are not logged in.</p>
      <Link href='/login'>Sign In</Link> or <Link href='/register'>Sign up</Link> now!
    </>
  : <>
      <p>You are logged in as {user.username}.</p>
      <p className='text-sky-400 hover:text-sky-600 hover:cursor-pointer' onClick={logout}>Logout</p>
    </>
}

export default Home