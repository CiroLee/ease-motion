export const code1 = `import { useRef } from 'react';
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
}`;
