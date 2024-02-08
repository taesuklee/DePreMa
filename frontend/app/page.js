import Header from '@/components/Header'
import { MiddlePanel } from '@/components/middlePanel'

export default async function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-row px-0">
      <main className="flex-1">
        <Header />
        <MiddlePanel />
      </main>
    </div>
  )
}
