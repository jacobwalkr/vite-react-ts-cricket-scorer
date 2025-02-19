export interface Batter {
  id: string,
  name: string,
  placeInOrder: number,
  out: boolean,
  score: number
}

export interface BattingSide {
  batterOffStrike: string,
  batterOnStrike: string,
  battingOrder: Batter[]
}
