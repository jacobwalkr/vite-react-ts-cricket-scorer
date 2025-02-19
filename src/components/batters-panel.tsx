import BatterRow from '@/components/batter-row'
import { BattingSide } from '@/types/batting-side'

export default function BattersPanel({
  side
}: {
  side: BattingSide
}) {
  return (
    <div
      className={`
        grid grid-cols-[4ch_4ch_1fr] md:grid-cols-[4ch_4ch_1fr]
        sm:grid-cols-[4ch_4ch_1fr_max-content] lg:grid-cols-[4ch_4ch_1fr_max-content]
        rounded border-1 border-sky-500
      `}
    >
      {side.battingOrder.map(({id, name, score, placeInOrder}) => (
        <BatterRow
          batterIn={[side.batterOffStrike, side.batterOnStrike].includes(id)}
          key={`${placeInOrder.toString()}-${name}`}
          name={name}
          number={placeInOrder}
          onStrike={id === side.batterOnStrike}
          score={score}
        />
      ))}
    </div>
  )
}
