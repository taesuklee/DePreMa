'use client'
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext({
  open: false,
  setOpen: () => null,
})

export function ModalContextProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
