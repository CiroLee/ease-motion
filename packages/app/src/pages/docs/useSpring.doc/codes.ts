export const code1 = `import { useSpring } from 'animate-motion';
export default function App() {
  const [y, controller] = useSpring({ from: 0, to: 240, autoPlay: false });

  return (
    <div className="h-[440px] px-8">
      <div className="relative top-3 ml-[33%] size-16 rounded-full bg-blue-500"
      style={{ transform: \`translateY(\${y}px)\` }}></div>
      <button className="self-end" block disabled={controller.isPlaying} onClick={controller.play}>
        {controller.isPlaying ? 'playing...' : 'start'}
      </button>
    </div>
  )
}`;
