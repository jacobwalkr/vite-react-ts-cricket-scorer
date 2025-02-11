import clsx from "clsx"

function isBoundary(value: number): boolean {
  return value == 4 || value == 6
}

export default function RunsButton({
  value,
  onAddRuns
}: {
  value: number,
  onAddRuns: (value: number) => void
}) {
  return (
    <button
      className={clsx(
        'w-16 h-16 bg-emerald-400 font-bold text-xl mx-0.5 rounded-[50%]',
        {'bg-emerald-700 text-white': isBoundary(value)},
        {'bg-emerald-400': !isBoundary(value)}
      )}
      onClick={() => onAddRuns(value)}
    >
      {value}
    </button>
  )
}
