'use client'

import { createContext, useState, useContext } from 'react'


interface IAlert {
  visible: boolean,
  type: 'success' | 'error' | 'info' | 'warning' | null,
  text: string | null
}

const alertDefault = { visible: false, type: null, text: null }

export const AlertContext = createContext<{
  alert: IAlert,
  setAlert: React.Dispatch<React.SetStateAction<IAlert>>
}>({
  alert: alertDefault,
  setAlert: () => {}
})

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [ alert, setAlert ] = useState<IAlert>(alertDefault)

  const values = { alert, setAlert }

  return (
    <AlertContext.Provider value={values}>
      {children}
    </AlertContext.Provider>
  )
}

export default () => useContext(AlertContext)