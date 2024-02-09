import { useModalContext } from '@/context/ModalContext'
import { UNKNOWN } from '@/lib/constants'
import { Button } from '@mui/material'
import Image from 'next/image'

export default function Card({ game }) {
  const { open, setOpen } = useModalContext()

  return (
    <div className="m-4 mb-2 rounded-[8px] bg-card p-4">
      <div className="flex items-center justify-between">
        <Image
          src={game.home_team.logo ?? '/na.webp'}
          width={24}
          height={24}
          className="max-h-[24px] max-w-[24px] object-contain"
          alt={game.home_team.name}
        />
        <p className="ml-2 truncate font-[450] md:flex-1">
          {game.home_team && game.home_team.name
            ? game.home_team.name
            : UNKNOWN}
        </p>
        <div className="flex items-center">
          <div className="mx-4 rounded bg-primary px-[10px] py-1">
            {game.home_score && game.home_score.current
              ? game.home_score.current
              : UNKNOWN}
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="outlined"
            disabled={game.status === 'finished' ?? true}>
            Bet
          </Button>
        </div>
      </div>
      <div className="my-3 flex items-center">
        <span className="mx-3 text-[12px] text-secondary-foreground w-1/4 truncate hover:w-full">
          {game.league.name ?? UNKNOWN}
        </span>
        <div className="w-[calc(100%-200px)] border-b border-b-primary" />
        <span className="mx-3 text-[12px] text-secondary-foreground">
          {game.status === 'notstarted'
            ? `Starting at ${game.start_at}`
            : game.status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={game.away_team.logo ?? '/na.webp'}
          width={24}
          height={24}
          className="max-h-[24px] max-w-[24px] object-contain"
          alt={game.away_team.name}
        />
        <p className="ml-2 truncate font-[450] md:flex-1">
          {game.away_team && game.away_team.name
            ? game.away_team.name
            : UNKNOWN}
        </p>
        <div className="flex items-center">
          <div className="mx-4 rounded bg-primary px-[10px] py-1">
            {game.away_score && game.away_score.current
              ? game.away_score.current
              : UNKNOWN}
          </div>
          <Button
            variant="outlined"
            disabled={game.status === 'finished' ?? true}
            onClick={() => setOpen(!open)}>
            Bet
          </Button>
        </div>
      </div>
    </div>
  )
}
