export interface BattingSide {
  batterOffStrike: string,
  batterOnStrike: string,
  battingOrder: BattingOrder
}

export type BattingOrder = {
  id: string,
  name: string,
  score: number,
  placeInOrder: number
}[]
