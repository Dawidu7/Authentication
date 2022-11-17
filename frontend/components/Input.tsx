'use client'

import { useState } from 'react'

import { toCamelCase } from '../utils/functions'


interface IInput {
  label: string,
  type: string,
  name?: string,
  getError?: (value: string) => string
}

const Input = ({ label, type, name = toCamelCase(label), getError = () => '' } : IInput) => {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState('')

  return (
    <div className='flex flex-col gap-y-0.5'>
      <label className={`${error !== '' ? 'text-red-700' : ''}`}>{label}</label>
      <input 
        type={type} 
        value={value} 
        name={name}
        onChange={e => {setValue(e.currentTarget.value); error !== '' && setError(getError(e.currentTarget.value)) }}
        onBlur={e => setError(getError(e.currentTarget.value))}
        className={`${error !== '' ? 'border-red-700 focus:border-red-800' : ''}`}
      />
      {error !== '' && <p className='text-red-700'>{error}</p>}
    </div>
  )
}

export default Input