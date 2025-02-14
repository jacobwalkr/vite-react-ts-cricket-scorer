import RunsPanel from '@/components/runs-panel'
import Scoreboard from '@/components/scoreboard'
import { useState } from 'react'
import '@/App.css'
import BattersPanel from '@/components/batters-panel'

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
      <Scoreboard runs={runs} wickets={wickets} />
      <RunsPanel addRuns={addRuns} addWicket={addWicket} />
      <BattersPanel />
    </>
  )
}

export default App
