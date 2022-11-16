'use client'

import { useState } from 'react'


interface IInput {
  label: string,
  type: string,
  getError: (value: string) => string
}

const Input = ({ label, type, getError } : IInput) => {
  const [ value, setValue ] = useState('')
  const [ error, setError ] = useState('')

  return (
    <div>
      <div className="flex justify-between gap-x-4 items-center">
        {label && <label>{label}</label>}
        <input 
          type={type} 
          value={value} 
          onChange={e => {setValue(e.currentTarget.value); error !== '' && setError(getError(e.currentTarget.value)) }}
          onBlur={e => setError(getError(e.currentTarget.value))}
        />
      </div>
      {error !== '' && <p className='text-red-700 text-center'>{error}</p>}
    </div>
  )
}

export default Input