import { BattingOrder, BattingSide } from '@/types/batting-side'

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

const battingOrder: BattingOrder = batterNames.map((name, index) => ({
  id: index.toString(),
  name,
  score: 0,
  placeInOrder: index + 1
}))

const battingSideFixture: BattingSide = {
  batterOffStrike: battingOrder[1].id,
  batterOnStrike: battingOrder[0].id,
  battingOrder
}

export default battingSideFixture
