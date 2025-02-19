import { Batter, BattingSide } from '@/types/batting-side'

const batterNames: string[] = [
  'A. Aaronson',
  'B. Bradford',
  'C. Catterick',
  'D. Drury',
  'E. Emery',
  'F. Franklin',
  'G. Graham',
  'H. Hammersmith',
  'I. Indira',
  'J. Jenkins',
  'K. Kendrick'
]

function battingSideFixture(): BattingSide {
  const battingOrder: Batter[] = batterNames.map((name, index) => ({
    id: index.toString(),
    name,
    placeInOrder: index + 1,
    out: false,
    score: 0
  }))

  return {
    batterOffStrike: battingOrder[1].id,
    batterOnStrike: battingOrder[0].id,
    battingOrder
  }
}

export default battingSideFixture
