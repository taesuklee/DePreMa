'use client'

import Card from '@/components/Card'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-row px-0">
      <main className="flex-1">
        <Header />
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 border border-white"></div>
          <div className="col-span-2 border border-white">
            <Card />
          </div>
          <div className="col-span-1 border border-white"></div>
        </div>
      </main>
    </div>
  )
}
