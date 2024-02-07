'use client'
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import WalletConnect from '@/components/WalletConnect'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-row px-0">
      <main className="flex-1">
        <div className="flex h-16 items-center justify-center border-b border-b-border">
          <h1
            className={cn(
              'flex-1 font-mono text-xl font-black leading-5 mx-5',
              fontMono.variable
            )}>
            Prediction Market
          </h1>
          <WalletConnect />
        </div>
      </main>
    </div>
  )
}
