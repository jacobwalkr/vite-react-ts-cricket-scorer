import BatterRow from "@/components/batter-row"

const batters: [string, boolean][] = [
  ['A. Aaronson', true],
  ['B. Bradford', true],
  ['C. Catterick', false],
  ['D. Drury', false],
  ['E. Emery', false],
  ['F. Franklin', false],
  ['G. Graham', false],
  ['H. Hammersmith', false],
  ['I. Indira', false],
  ['J. Jenkins', false],
  ['K. Kendrick', false]
]

export default function BattersPanel() {
  return (
    <ol className="display-block mx-3 rounded border-1 border-sky-500">
      {batters.map(([batter, batterIn], index) => (
        <BatterRow number={index + 1} batter={batter} batterIn={batterIn} onStrike={index === 0} score={0} />
      ))}
    </ol>
  )
}
