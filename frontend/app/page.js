'use client'
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  ConnectButton,
} from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains'
import WalletConnect from '@/components/WalletConnect'

export default function Home() {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      base,
      zora,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    [publicProvider()]
  )

  const projectId = '47c51841dc9d90ea37b159c85ba4201d'

  const { wallets } = getDefaultWallets({
    appName: 'RainbowKit demo',
    projectId,
    chains,
  })

  const demoAppInfo = {
    appName: 'Rainbowkit Demo',
  }

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: 'Other',
      wallets: [
        argentWallet({ projectId, chains }),
        trustWallet({ projectId, chains }),
        ledgerWallet({ projectId, chains }),
      ],
    },
  ])

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="flex min-h-[100dvh] flex-row px-0">
          <main className="flex-1">
            <div className="flex h-16 items-center justify-center border-b border-b-border">
              <h1
                className={cn(
                  'flex-1 font-mono text-xl font-black leading-5',
                  fontMono.variable
                )}>
                Prediction Market
              </h1>
              <WalletConnect />
            </div>
          </main>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
