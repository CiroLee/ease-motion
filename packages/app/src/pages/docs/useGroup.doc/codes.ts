export const demoCode = `import { useGroup, EASING_FUNCTIONS } from 'ease-motion';

export default function App() {
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  const ballRef3 = useRef<HTMLDivElement>(null);

  const controller = useGroup(
    {
      refs: [ballRef1, ballRef2, ballRef3],
      keyframes: {
        transform: ['translateX(300px) rotate(2turn)']
      },
      options: {
        duration: 3000,
        fill: 'forwards',
        easing: EASING_FUNCTIONS.easeOutInBack
      },
      onStart: () => {
        console.log('start animate');
      },
      onPause: () => {
        console.log('pause animate');
      },
      onResume: () => {
        console.log('resume animate');
      },
      onComplete: () => {
        console.log('complete animate');
      }
    },
    []
  );

  return (
    <div className="flex flex-col justify-center gap-2 px-8">
      <div ref={ballRef1} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef2} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef3} className="size-[40px] bg-blue-500"></div>
      <div className="absolute bottom-2 right-2 space-x-2">
        <button onClick={() => controller.play()}>
          play
        </button>
        <button onClick={() => controller.reverse()}>
          reverse
        </button>
        <button onClick={() => controller.pause()}>
          pause
        </button>
        <button onClick={() => controller.resume()}>
          resume
        </button>
      </div>
    </div>
  )
}`;

export const demoCode2 = `import { useGroup, EASING_FUNCTIONS } from 'ease-motion';

export default function App() {
  const ballRef4 = useRef<HTMLDivElement>(null);
  const ballRef5 = useRef<HTMLDivElement>(null);
  const ballRef6 = useRef<HTMLDivElement>(null);

  const controller = useGroup(
    {
      refs: [ballRef4, ballRef5, ballRef6],
      keyframes: {
        transform: ['translateX(300px) rotate(2turn)']
      },
      options: {
        duration: 3000,
        fill: 'forwards',
        easing: EASING_FUNCTIONS.easeOutInBack,
        delay: (el, index) => {
          return index * 200;
        }
      },
      onStart: () => {
        console.log('start animate');
      },
      onPause: () => {
        console.log('pause animate');
      },
      onResume: () => {
        console.log('resume animate');
      },
      onComplete: () => {
        console.log('complete animate');
      }
    },
    []
  );

  return (
    <div className="flex flex-col justify-center gap-2 px-8">
      <div ref={ballRef4} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef5} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef6} className="size-[40px] bg-blue-500"></div>
      <div className="absolute bottom-2 right-2 space-x-2">
        <button onClick={() => controller.play()}>
          play
        </button>
      </div>
    </div>
  )
}`;

export const types = `// SpecialAnimationOptions
export type SpecialAnimationOptions = number | SpecialKeyframeAnimationOptions;
type SpecialKeyframeAnimationOptions = Omit<KeyframeAnimationOptions, 'delay' | 'endDelay'> & {
  delay?: number | DelayFunction;
  endDelay?: number | DelayFunction;
};
type DelayFunction = <T extends DOMElement>(el: T, index: number, length: number) => number;`;

export const selectorsCode = `import { useGroup, EASING_FUNCTIONS } from 'ease-motion';

export default function App() {

  const controller = useGroup(
    {
      selectors: ['.square'],
      keyframes: {
        transform: ['translateX(300px) rotate(2turn)']
      },
      options: {
        duration: 3000,
        fill: 'forwards',
        easing: EASING_FUNCTIONS.easeInOutBack
      },
    },
    []
  );

  return (
    <div className="flex flex-col justify-center gap-2 px-8">
      <div className="square size-[40px] bg-blue-500"></div>
      <div className="square size-[40px] bg-blue-500"></div>
      <div className="square size-[40px] bg-blue-500"></div>
      <div className="absolute bottom-2 right-2 space-x-2">
        <button onClick={() => controller.play()}>
          play
        </button>
      </div>
    </div>
  )
}`;
