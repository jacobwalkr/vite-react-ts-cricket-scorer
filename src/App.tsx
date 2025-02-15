import RunsPanel from '@/components/runs-panel'
import Scoreboard from '@/components/scoreboard'
import { useState } from 'react'
import '@/App.css'
import BattersPanel from '@/components/batters-panel'
import battingSideFixture from '@/constants/fixtures/batting-side-fixture'

function App() {
  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)

  function addRuns(runsToAdd: number): void {
    setRuns(runs + runsToAdd)
  }

  function addWicket(): void {
    setWickets(wickets + 1)
  }

  return (
    <>
      <section className="flex justify-center mb-5">
        <Scoreboard runs={runs} wickets={wickets} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 px-2">
        <RunsPanel addRuns={addRuns} addWicket={addWicket} />
        <BattersPanel side={battingSideFixture} />
      </section>
    </>
  )
}

export default App
