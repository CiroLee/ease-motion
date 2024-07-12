export const code = `import { useValue } from 'animate-motion';

export default function App() {
  const [value, controller] = useValue(0, 100 {
    duration: 5000,
    autoPlay: false,
    easing: 'easeOutCubic'
  });

  return (
    <div className="flex h-[260px] flex-col items-center">
      <div className="my-4 flex size-[120px] rounded-xl border bg-white text-3xl font-bold flex-center">{value}</div>
      <p>isPlaying: {controller.isPlaying.toString()}</p>
      <div className="mt-4 space-x-2">
        <button onClick={() => controller.play()}>
          play
        </button>
        <button onClick={() => controller.pause()}>
          pause
        </button>
        <button onClick={() => controller.resume()}>
          resume
        </button>
        <button onClick={() => controller.cancel()}>
          cancel
        </button>
      </div>
    </div>
  )
}`;

export const typesCode = `interface UseValueOptions {
  duration?: number;
  precision?: number;
  autoPlay?: boolean;
  easing?: EaseAlgorithmTypes;
}
// support easing algorithm types
type EasingAlgorithmTypes = 
  | easeOutCubic
  | easeInCubic
  | easeInOutCubic
  | easeInCirc
  | easeOutCirc
  | easeInOutCirc
  | easeInQuint
  | easeOutQuint
  | easeInOutQuint
  | easeInSine
  | easeOutSine
  | easeInOutSine
  | easeInQuad
  | easeOutQuad
  | easeInOutQuad
  | easeInQuart
  | easeOutQuart
  | easeInOutQuart
  | easeInExpo
  | easeOutExpo
  | easeInOutExpo
  | easeInBack
  | easeOutBack
  | easeInOutBack
  | easeInElastic
  | easeOutElastic
  | easeInOutElastic
  | easeInBounce
  | easeOutBounce
  | easeInOutBounce
`;
