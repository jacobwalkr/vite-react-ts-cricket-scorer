import clsx from "clsx"

export default function BatterRow({
  batterIn,
  name,
  number,
  onStrike,
  score,
}: {
  batterIn: boolean,
  name: string,
  number: number,
  onStrike: boolean,
  score: number
}) {
  return (
    <>
      <div
        className={
          clsx('text-center py-2 bg-sky-200 text-sky-700 self-center',
          {'border-t-1 border-sky-300': number !== 1}
        )}
      >
        {number}
      </div>
      {batterIn && (
        <div
          className={clsx(
            'text-center py-2 bg-sky-100 self-center',
            {'border-t-1 border-sky-300': number !== 1}
          )}
        >
          {onStrike ? <>&#x27A4;</> : <>&nbsp;</>}
        </div>
      )}
      <div
        className={clsx(
          'px-2 self-center py-2',
          {'font-bold': batterIn},
          {'col-span-2': !batterIn},
          {'border-t-1 border-sky-300': number !== 1}
        )}
      >
        {name}
      </div>
      <div
        className={clsx(
          'text-right py-2 self-center col-span-3 sm:col-span-1 md:col-span-3 lg:col-span-1',
          {'border-t-1 border-sky-300': number !== 1}
        )}
      >
        <span className="text-sm text-gray-700">
          b. Harmison, c. Donoghue
        </span>
        <span
          className={clsx(
            'rounded-[999px] px-4 py-1 m-3',
            {'bg-sky-100': batterIn}
          )}
        >
          {score}
        </span>
      </div>
    </>
  )
}
