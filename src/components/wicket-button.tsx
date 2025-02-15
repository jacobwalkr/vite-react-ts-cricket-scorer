export default function WicketButton({
  onFallOfWicket
}: {
  onFallOfWicket: () => void
}) {
  return (
    <button
      className='w-16 h-16 bg-red-400 hover:bg-red-500 font-bold text-white text-xl mx-0.5 rounded-[50%]'
      onClick={onFallOfWicket}
    >
      W
    </button>
  )
}
