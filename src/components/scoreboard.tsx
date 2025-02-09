export default function RunsPanel({
  runs,
  wickets,
}: {
  runs: number,
  wickets: number
}) {
  return (
    <div>{runs} - {wickets}</div>
  )
}
