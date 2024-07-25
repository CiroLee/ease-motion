export const code1 = `import { useRef } from 'react';
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
}`;
export const code2 = `import { useRef } from 'react';
import { useLineDraw } from 'ease-motion';

export default function App() {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const controller = useLineDraw(
     {
      selectors: ['#json path'],
      drawType: 'appear',
      options: {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-in-out',
        delay: (e, index) => {
          return index * 1000;
        }
      }
    },
    []
  );
  return (
    <div className="mb-4 flex flex-col px-8 flex-center">
      <svg
        id="json"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5" />
        <path d="M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1" />
        <path d="M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
        <path d="M20 16v-8l3 8v-8" />
      </svg>
      <button size="sm" className="absolute bottom-3 right-3" onClick={() => controller.play()}>
        play
      </button>
    </div>
  )
}`;

export const code3 = `import { useRef } from 'react';
import { useLineDraw } from 'ease-motion';

export default function App() {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const controller = useLineDraw(
    {
      selectors: ['#smile path', "#smile circle"],
      keyframes: {
        stroke: ['transparent', '#ffae03']
      },
      options: {
        duration: 2000,
        fill: 'forwards',
        easing: 'ease-in-out'
      }
    },
    []
  );
  return (
    <div className="mb-4 flex flex-col px-8 flex-center">
      <svg
        id="smile"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" />
        <path d="M17 8V8" />
        <path d="M7 8V8" />
        <path d="M7 13.4571C8.61278 16.5791 15 17 17 13" />
      </svg>
      <button size="sm" className="absolute bottom-3 right-3" onClick={() => controller.play()}>
        play
      </button>
    </div>
  )
}`;
