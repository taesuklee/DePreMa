'use client'
import { Modal } from '@/components/Modal'
import Card from '@/components/Card'
import { fetchGames } from '@/lib/fetch-data'
import dayjs from 'dayjs'

export const MiddlePanel = async () => {
  const date = dayjs().format('YYYY-MM-DD')
  const gameLists = await fetchGames(date)

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1"></div>
      <Modal />
      <div className="col-span-2">
        {gameLists
          ? gameLists.map((game) => <Card key={game.id} game={game} />)
          : 'Loading'}
      </div>
      <div className="col-span-1"></div>
    </div>
  )
}
