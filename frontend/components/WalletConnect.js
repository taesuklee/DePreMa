import { useWeb3Modal } from '@web3modal/wagmi/react'

function WalletConnect() {
  const { open, close } = useWeb3Modal()

  return (
    <div className="mr-5">
      <button onClick={() => open({ view: 'Networks' })}>Switch Network</button>
      <button onClick={() => open()}>Connect</button>
    </div>
  )
}

export default WalletConnect
