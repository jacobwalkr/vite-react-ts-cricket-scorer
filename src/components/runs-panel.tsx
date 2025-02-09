import RunsButton from "@/components/runs-button";
import WicketButton from "@/components/wicket-button";

export default function RunsPanel({
  addRuns,
  addWicket,
}: {
  addRuns: (runs: number) => void,
  addWicket: () => void
}) {
  return (
    <>
      <RunsButton value={1} onAddRuns={addRuns} />
      <RunsButton value={2} onAddRuns={addRuns} />
      <RunsButton value={3} onAddRuns={addRuns} />
      <RunsButton value={4} onAddRuns={addRuns} />
      <RunsButton value={5} onAddRuns={addRuns} />
      <RunsButton value={6} onAddRuns={addRuns} />
      <WicketButton onFallOfWicket={addWicket} />
    </>
  )
}
