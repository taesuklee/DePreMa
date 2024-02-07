export default function Card({ game }) {
  return (
    <div className="m-4 mb-2 rounded-[8px] bg-card p-4">
      <div className="flex items-center justify-between">
        <p className="ml-2 truncate font-[450] md:flex-1">{game.team1}</p>
        <div className="flex items-center">
          <div className="mx-4 rounded bg-primary px-[10px] py-1">
            {game.score1}
          </div>
          <button>Bet</button>
        </div>
      </div>
      <div className="my-3 flex items-center">
        <div className="w-[calc(100%-189px)] border-b border-b-primary" />
      </div>
      <div className="flex items-center justify-between">
        <p className="ml-2 truncate font-[450] md:flex-1">{game.team2}</p>
        <div className="flex items-center">
          <div className="mx-4 rounded bg-primary px-[10px] py-1">
            {game.score2}
          </div>
          <button>Bet</button>
        </div>
      </div>
    </div>
  )
}
