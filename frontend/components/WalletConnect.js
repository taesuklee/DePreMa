'use client'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useWeb3ModalState } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

function WalletConnect() {
  const { open, close } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  const { selectedNetworkId } = useWeb3ModalState()
  const { address, isConnected, isConnecting, isDisconnected } = useAccount()
  console.log(
    '🚀 ~ WalletConnect ~ address:',
    address,
    isConnected,
    isConnecting,
    isDisconnected
  )

  return (
    <div className="mr-5 truncate">
      <button onClick={() => open()}>
        <p className="w-32 truncate">
          {address
            ? `${address.substring(0, 6)}...${address.substring(38)}`
            : 'Connect'}
        </p>
      </button>
    </div>
  )
}

export default WalletConnect
