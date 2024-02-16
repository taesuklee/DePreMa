'use client'
import { Modal } from '@/components/Modal'
import Card from '@/components/Card'
import { fetchActiveWagers, fetchGames } from '@/lib/fetch-data'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export const MiddlePanel = () => {
  const [gameLists, setGameLists] = useState()
  const [activeGames, setActiveGames] = useState()

  const date = dayjs().format('YYYY-MM-DD')
  fetchGames(date).then((data) => setGameLists(data))

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1"></div>
      <Modal />
      <div className="col-span-2">
        {gameLists ? (
          gameLists.map((game) => <Card key={game.id} game={game} />)
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </div>
      <div className="col-span-1"></div>
    </div>
  )
}
