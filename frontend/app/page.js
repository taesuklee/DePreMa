import { WalletConnect } from '@/components/walletConnect'
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container flex min-h-[100dvh] flex-row px-0">
      <main className="max-w-[100vw] flex-1">
        <div className="flex h-16 items-center justify-between border-b border-b-border pl-4">
          <h1
            className={cn(
              'flex-1 font-mono text-xl font-black leading-5',
              fontMono.variable
            )}>
            Matches
          </h1>
        </div>
        {/* <WalletConnect /> */}
      </main>
    </div>
  )
}
