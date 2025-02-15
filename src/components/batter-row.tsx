import clsx from "clsx"

function StrikeBox({ onStrike }: { onStrike: boolean }) {
  return (
    <div className="h-full place-content-center flex-none w-[3rem] text-center bg-sky-300/40">
      {onStrike && <>&#x27A4;</>}
    </div>
  )
}

export default function BatterRow({
  number,
  batter,
  batterIn,
  onStrike,
  score,
}: {
  number: number,
  batter: string,
  batterIn: boolean,
  onStrike: boolean,
  score: number
}) {
  return (
    <li
      className={clsx(
        'display-block h-[2.5rem] pe-1 flex items-center transition-colors border-b-1 last:border-b-0 border-sky-500',
        {'bg-sky-100 font-bold': batterIn}
      )}
      key={number}
    >
      <div className="h-full place-content-center flex-none w-[3rem] text-center bg-sky-300/75">{number}</div>
      {batterIn && (
        <StrikeBox onStrike={onStrike} />
      )}
      <div className="h-full content-center px-4 py-2 grow">{batter}</div>
      <div
        className={clsx(
          'h-[80%] rounded-[999px] place-content-center px-5 basis-content',
          {'bg-sky-300/40': batterIn}
        )}
      >
        {score}
      </div>
    </li>
  )
}
