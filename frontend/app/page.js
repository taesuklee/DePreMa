import Card from '@/components/Card'
import Header from '@/components/Header'
import { fetchGames } from '@/lib/fetch-data'

export default async function Home() {
  const gameLists = await fetchGames()

  return (
    <div className="flex min-h-[100dvh] flex-row px-0">
      <main className="flex-1">
        <Header />
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            {gameLists
              ? gameLists.map((game) => <Card key={game.id} game={game} />)
              : 'Loading'}
          </div>
          <div className="col-span-1"></div>
        </div>
      </main>
    </div>
  )
}
