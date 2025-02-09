export default function WicketButton({
  onFallOfWicket
}: {
  onFallOfWicket: () => void
}) {
  return (
    <button onClick={onFallOfWicket}>W</button>
  )
}
