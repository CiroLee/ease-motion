export const code1 = `import { useSpring } from 'ease-motion';
export default function App() {
  const [y, controller] = useSpring(0, 240, { autoPlay: false });

  return (
    <div className="h-[440px] px-8">
      <div className="relative top-3 ml-[33%] size-16 rounded-full bg-blue-500"
      style={{ transform: \`translateY(\${y}px)\`}}></div>
      <button disabled={controller.isPlaying} onClick={controller.play}>
        {controller.isPlaying ? 'playing...' : 'start'}
      </button>
    </div>
  )
}`;

export const typeCode = `interface SpringOptions {
  // affect the inertia of the spring
  mass?: number;
  // higher value makes the spring faster and stronger
  stiffness?: number;
  // higher value cause the spring to stop faster
  damping?: number;
  // initial speed
  velocity?: number;
  autoPlay?: boolean;
}`;
