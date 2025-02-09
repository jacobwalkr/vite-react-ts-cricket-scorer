export default function RunsButton({
  value,
  onAddRuns
}: {
  value: number,
  onAddRuns: (value: number) => void
}) {
  return (
    <button onClick={() => onAddRuns(value)}>{value}</button>
  )
}
