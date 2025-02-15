import BatterRow from "@/components/batter-row"
import { BattingSide } from "@/types/batting-side"

export default function BattersPanel({
  side
}: {
  side: BattingSide
}) {
  return (
    <ol className="display-block mx-3 rounded border-1 border-sky-500">
      {side.battingOrder.map(({id, name, score, placeInOrder}) => (
        <BatterRow
          batterIn={[side.batterOffStrike, side.batterOnStrike].includes(id)}
          name={name}
          number={placeInOrder}
          onStrike={id === side.batterOnStrike}
          score={score}
        />
      ))}
    </ol>
  )
}
