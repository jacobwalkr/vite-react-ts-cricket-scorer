export default function WicketButton({
  onWicket: handleWicket
}: {
  onWicket: () => void
}) {
  return (
    <button
      className='w-16 h-16 bg-red-400 hover:bg-red-500 font-bold text-white text-xl mx-0.5 rounded-[50%]'
      onClick={handleWicket}
    >
      W
    </button>
  )
}
