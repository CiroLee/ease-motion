export const code1 = `import { useRef } from 'react';
import { useLineDraw } from 'animate-motion';

export default function App() {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const controller1 = useLineDraw(
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
      <button size="sm" className="absolute bottom-3 right-3" onClick={() => controller1.play()}>
        play
      </button>
    </div>
  )
}
`;
