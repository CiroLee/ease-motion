<div align="center">
  <img src="images/ease-motion-logo.svg" width="256" height="256" alt="logo">
  <h1 style="margin-top:20px">ease-motion</h1>
</div>

The high-performance extension of Web Animation API for React Hooks

![npm bundle size](https://img.shields.io/bundlephobia/minzip/ease-motion) ![NPM Version](https://img.shields.io/npm/v/ease-motion) ![GitHub License](https://img.shields.io/github/license/cirolee/ease-motion)

# Install

```bash
npm install ease-motion
```

# Usage

## useMotion

the preset motions

```ts
// App.tsx
import { useMotion } from 'ease-motion';

export default function App() {
  const [ ref, motion ] = useMotion<HTMLDivElement>()

  return (
    <div>
      <div ref={ref} className="text-3xl">ease-motion</div>
      <button onClick={() => motion('swing')}>play</button>
    </div>
  )
}
```

## useAnimate

basic wrap of [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

```ts
import { useAnimate} from 'ease-motion;'
export default function App() {
  const [ ref, animate ] = useAnimate<HTMLDivElement>();
  return (
    <div className="relative mb-3 flex h-[240px] overflow-hidden rounded-md border items-center justify-center">
      <div ref={ref} className="size-[120px] rounded-lg bg-blue-500"></div>
      <button
        className="absolute bottom-2 right-2"
        onClick={() => {
          animate(
            {
              transform: ['translateX(0)', 'translateX(100px)'],
              borderRadius: ['8px', '50%'],
              backgroundColor: ['rgb(59 130 246)', 'rgb(246 154 59)']
            },
            {
              duration: 800,
              easing: 'ease-in-out',
              fill: 'forwards'
            }
          );
        }}>
        play
      </button>
    </div>
  )
}
```

## useGroup

useGroup is used to control multiple elements to animate with the same parameters

```ts
import { useGroup, EASING_FUNCTIONS } from 'ease-motion';

export default function App() {
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  const ballRef3 = useRef<HTMLDivElement>(null);

  const controller = useGroup(
    {
      refs: [ballRef1, ballRef2, ballRef3],
      keyframes: {
        transform: ['translateX(0) rotate(0)', 'translateX(500px) rotate(2turn)']
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
}
```

## useMultiple

useMultiple is used to control the animation of multiple elements using independent animation parameters

```ts
import { useRef } from 'react';
import { useMultiple } from 'ease-motion';

export default function App() {
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  const ballRef3 = useRef<HTMLDivElement>(null);

  const controller = useMultiple(
    {
      baseOptions: {
        duration: 1000,
        fill: 'forwards'
      },
      config: [
        {
          ref: ballRef1,
          keyframes: [
            { transform: 'translateX(0) scale(1)', borderRadius: '0' },
            { transform: 'translateX(100px) scale(1)', borderRadius: '50%', offset: 0.2 },
            { transform: 'translateX(100px) scale(1)', borderRadius: '50%', offset: 0.6 },
            {
              transform: 'translateX(160px) scale(1.6, 1)',
              borderRadius: '50%'
            },
            {
              transform: 'translateX(360px) scale(1, 1)',
              borderRadius: '50%'
            }
          ]
        },
        {
          ref: ballRef2,
          keyframes: {
            transform: ['translateX(200px) rotate(2turn)'],
            borderRadius: ['4px']
          },
          options: {
            duration: 500
          }
        },
        {
          ref: ballRef3,
          keyframes: {
            transform: ['translateX(0)', 'translateX(300px)'],
            easing: 'steps(4)'
          }
        }
      ]
    },
    []
  );

  return (
    <div className="mb-4 flex flex-col justify-center gap-2 px-8">
      <div ref={ballRef1} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef2} className="size-[40px] bg-blue-500"></div>
      <div ref={ballRef3} className="size-[40px] bg-blue-500"></div>
      <button className="absolute bottom-3 right-3" onClick={() => controller.play()}>
        play
      </button>
    </div>
  )
}
```

## useLineDraw

used to make svg elements(such as path, circle) to have a line animation effect

```ts
import { useRef } from 'react';
import { useLineDraw } from 'ease-motion';

export default function App() {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const controller = useLineDraw(
    {
      refs: [path1Ref, path2Ref],
      drawType: 'appear',
      options: {
        duration: 1500,
        fill: 'forwards',
        easing: 'ease-in-out'
      }
    },
    []
  );
  return (
    <div className="mb-4 flex flex-col px-8 flex-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path ref={path1Ref} d="M5 21c.5 -4.5 2.5 -8 7 -10" />
        <path ref={path2Ref} d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
      </svg>
      <button size="sm" className="absolute bottom-3 right-3" onClick={() => controller.play()}>
        play
      </button>
    </div>
  )
}
```

## useValue

useValue is used to animate numbers

```ts
import { useValue } from 'ease-motion';

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
}
```

## useSpring

used to simulate the real physical spring motion effect

```ts
import { useSpring } from 'ease-motion';

export default function App() {
  const [y, controller] = useSpring({ from: 0, to: 240, autoPlay: false });

  return (
    <div className="h-[440px] px-8">
      <div className="relative top-3 ml-[33%] size-16 rounded-full bg-blue-500"
      style={{ transform: `translateY(${y}px)`}}></div>
      <button disabled={controller.isPlaying} onClick={controller.play}>
        {controller.isPlaying ? 'playing...' : 'start'}
      </button>
    </div>
  )
}
```
