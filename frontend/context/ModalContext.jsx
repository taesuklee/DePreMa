'use client'
import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext({
  open: false,
  setOpen: () => null,
  predictionOptions: {
    gameId: 1,
    betOn: 1,
  },
})

export function ModalContextProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [predictionOptions, setPredictionOptions] = useState({
    gameId: 1,
    betOn: 1,
  })

  return (
    <ModalContext.Provider
      value={{ open, setOpen, predictionOptions, setPredictionOptions }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
