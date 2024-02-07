'use client'

import Card from '@/components/Card'
import Header from '@/components/Header'

export default function Home() {
  const lists = [
    { id: 1, team1: 'TEAM1', score1: 1, team2: 'TEAM2', score2: 7 },
    { id: 1, team1: 'TEAM3', score1: 3, team2: 'TEAM7', score2: 3 },
    { id: 1, team1: 'TEAM5', score1: 5, team2: 'TEAM4', score2: 4 },
    { id: 1, team1: 'TEAM6', score1: 7, team2: 'TEAM3', score2: 3 },
    { id: 1, team1: 'TEAM7', score1: 1, team2: 'TEAM1', score2: 1 },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-row px-0">
      <main className="flex-1">
        <Header />
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            {lists.map((game) => (
              <Card key={game.id} game={game} />
            ))}
          </div>
          <div className="col-span-1"></div>
        </div>
      </main>
    </div>
  )
}
