'use client'
import { createContext, useContext, useState } from 'react'

export const WalletContext = createContext({
  address: null,
  setAddress: () => null,
  isConnected: false,
  setIsConnected: () => null,
})

export function WalletContextProvider({ children }) {
  const [address, setAddress] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  console.log('address', address)
  return (
    <WalletContext.Provider
      value={{ address, setAddress, isConnected, setIsConnected }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWalletContext = () => useContext(WalletContext)
