export default function RunsPanel({
  runs,
  wickets,
}: {
  runs: number,
  wickets: number
}) {
  return (
    <div
      className={`
        text-5xl text-white m-3 border-width-1.5 rounded inline-block px-5 py-3
        font-extrabold bg-sky-700
      `}
    >
      {runs}
      <span className="mx-3">&ndash;</span>
      {wickets}
    </div>
  )
}
