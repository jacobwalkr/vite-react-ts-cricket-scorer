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
      {side.battingOrder.map(batter => (
        <BatterRow
          batterIn={[side.batterOffStrike, side.batterOnStrike].includes(batter.id)}
          key={`${batter.placeInOrder.toString()}-${batter.name}`}
          name={batter.name}
          number={batter.placeInOrder}
          onStrike={batter.id === side.batterOnStrike}
          out={batter.out}
          score={batter.score}
        />
      ))}
    </div>
  )
}
