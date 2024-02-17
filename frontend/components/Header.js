import WalletConnect from '@/components/WalletConnect'
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-center border-b border-b-border">
      <h1
        className={cn(
          'flex-1 font-mono text-xl font-black leading-5 mx-5',
          fontMono.variable
        )}>
        wittYbet
      </h1>
      <WalletConnect />
    </div>
  )
}

export default Header
