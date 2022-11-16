'use client'

import React, { useState } from 'react'


interface IInput {
  label: string,
  type: string
}

const Input = ({ label, type } : IInput) => {
  const [ value, setValue ] = useState('')

  return (
    <div>
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={e => setValue(e.currentTarget.value)} 
      />
    </div>
  )
}

export default Input