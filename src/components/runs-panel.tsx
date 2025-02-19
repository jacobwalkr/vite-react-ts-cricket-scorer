import RunsButton from '@/components/runs-button';
import WicketButton from '@/components/wicket-button';

export default function ScorePanel({
  onRuns: handleRuns,
  onWicket: handleWicket,
}: {
  onRuns: (runs: number) => void,
  onWicket: () => void
}) {
  return (
    <div className="mb-5 text-center">
      <RunsButton value={1} onRuns={handleRuns} />
      <RunsButton value={2} onRuns={handleRuns} />
      <RunsButton value={3} onRuns={handleRuns} />
      <RunsButton value={4} onRuns={handleRuns} />
      <RunsButton value={5} onRuns={handleRuns} />
      <RunsButton value={6} onRuns={handleRuns} />
      <WicketButton onWicket={handleWicket} />
    </div>
  )
}
