import clsx from "clsx"

export default function BatterRow({
  number,
  batter,
  batterIn,
  score,
}: {
  number: number,
  batter: string,
  batterIn: boolean,
  score: number
}) {
  return (
    <li
      className={clsx(
        'display-block h-[3rem] flex items-center transition-colors border-b-1 last:border-b-0 border-sky-500',
        {'hover:bg-sky-300 bg-sky-200 font-bold': batterIn},
        {'hover:bg-sky-100': !batterIn}
      )}
    >
      <div className="h-full place-content-center flex-none w-[3rem] text-center bg-sky-300/75">{number}</div>
      <div className="h-full content-center px-4 py-2 grow">{batter}</div>
      <div className="h-[80%] place-content-center px-5 basis-content">{score}</div>
    </li>
  )
}
