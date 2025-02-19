import ScorePanel from '@/components/runs-panel'
import Scoreboard from '@/components/scoreboard'
import { useState } from 'react'
import '@/App.css'
import BattersPanel from '@/components/batters-panel'
import battingSideFixture from '@/constants/fixtures/batting-side-fixture'
import { Batter } from '@/types/batting-side'

function App() {
  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [battingSide, setBattingSide] = useState(battingSideFixture())

  function creditStriker(runsToAdd: number): void {
    const newOrder = battingSide.battingOrder.map(batter => {
      if (batter.id === battingSide.batterOnStrike) {
        return {
          ...batter,
          score: batter.score + runsToAdd
        }
      }
      else {
        return { ...batter }
      }
    })

    if (runsToAdd % 2) {
      setBattingSide({
        batterOffStrike: battingSide.batterOnStrike,
        batterOnStrike: battingSide.batterOffStrike,
        battingOrder: newOrder
      })
    }
    else {
      setBattingSide({
        ...battingSide,
        battingOrder: newOrder
      })
    }
  }

  function resetGame(): void {
    setRuns(0)
    setWickets(0)
    setBattingSide(battingSideFixture())
  }

  // Assuming for this function that there must be at least one available batter remaining
  function putBatterOut(): void {
    const placeOfOutBatter = battingSide.battingOrder.find(
      batter => batter.id === battingSide.batterOnStrike
    )?.placeInOrder ?? (() => { throw new Error('batter unavailable!') })()

    let newBatterOnStrike: string | undefined
    const newOrder: Batter[] = []

    for (const batter of battingSide.battingOrder) {
      const newBatter = { ...batter }

      if (batter.id === battingSide.batterOnStrike) {
        newBatter.out = true
      }

      if (
        batter.placeInOrder > placeOfOutBatter
        && !batter.out
        && newBatterOnStrike === undefined
        && batter.id !== battingSide.batterOffStrike
        && batter.id !== battingSide.batterOnStrike
      ) {
        newBatterOnStrike = batter.id
      }

      newOrder.push(newBatter)
    }

    setBattingSide({
      batterOffStrike: battingSide.batterOffStrike,
      batterOnStrike: newBatterOnStrike ?? (() => { throw new Error('batter unavailable!') })(),
      battingOrder: newOrder
    })
  }

  function handleRuns(runsToAdd: number): void {
    setRuns(runs + runsToAdd)
    creditStriker(runsToAdd)
  }

  function handleWicket(): void {
    if (wickets >= 9) {
      resetGame()
    }
    else {
      putBatterOut()
      setWickets(wickets + 1)
    }
  }

  return (
    <>
      <section className="flex justify-center mb-5">
        <Scoreboard runs={runs} wickets={wickets} />
      </section>
      <section className="grid gap-6 md:grid-cols-2 px-2">
        <ScorePanel onRuns={handleRuns} onWicket={handleWicket} />
        <BattersPanel side={battingSide} />
      </section>
    </>
  )
}

export default App
