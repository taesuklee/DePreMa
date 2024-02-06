import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { cn } from '../lib/utils'
import { fontMono } from '../lib/font'

const Home: NextPage = () => {
  return (
    <div className="container flex min-h-[100dvh] flex-row px-0">
      <main className="max-w-[100vw] flex-1">
        <div className="flex h-16 items-center justify-between border-b border-b-border pl-4">
          <h1
            className={cn(
              'flex-1 font-mono text-xl font-black leading-5',
              fontMono.variable
            )}>
            Prediction Marktet
          </h1>
          <ConnectButton />
        </div>
      </main>
    </div>
  )
}

export default Home
