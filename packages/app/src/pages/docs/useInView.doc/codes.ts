export const code1 = `import { useRef } from 'react';
import { useInView, animate } from 'ease-motion';

export default function App() {
const ref = useRef<HTMLDivElement>(null);

useInView({
  selectors: ['.fruit'],
  options: {
    root: ref.current,
    threshold: 0.5
  },
  enter: (target) => {
    const textEl = target.querySelector('p');
    textEl &&
      animate({
        target: textEl,
        motion: 'fadeInLeft',
        options: {
          duration: 1000,
          fill: 'forwards',
          easing: 'ease'
        }
      });
  },
  leave: (target) => {
    const textEl = target.querySelector('p');
    textEl &&
      animate({
        target: textEl,
        motion: 'fadeOutLeft',
        options: {
          duration: 1000,
          fill: 'forwards',
          easing: 'ease'
        }
      });
  }
  });

  return (
    <div ref={ref} className="mb-4 h-44 overflow-y-auto">
      <div className="fruit h-full bg-green-300 pl-3 flex items-center">
        <p className="text-4xl font-bold">🍎Apple</p>
      </div>
      <div className="fruit h-full bg-orange-300 flex items-center">
        <p className="pl-3 text-4xl font-bold">🍊orange</p>
      </div>
      <div className="fruit h-full bg-purple-300 flex items-center">
        <p className="pl-3 text-4xl font-bold">🍇Wine</p>
      </div>
    </div>
  )
}
`;

export const code2 = `import { useRef } from 'react';
import { useInView, useGroup, EASING_FUNCTIONS } from 'ease-motion';

export default function App() {
const ref = useRef<HTMLDivElement>(null);
const targetRef = useRef<HTMLDivElement>(null);
  const controller = useGroup(
    {
      selectors: ['.ball'],
      keyframes: {
        transform: ['translateY(-100%)']
      },
      options: {
        fill: 'both',
        duration: 500,
        easing: EASING_FUNCTIONS.easeInOutBack,
        delay: (_, index) => 50 + index * 100
      }
    },
    []
  );
  useInView({
    refs: [targetRef],
    options: {
      root: pg2Ref.current
    },
    enter: () => {
      controller.play();
    }
  });

  return (
    <div ref={ref} className="mb-4 h-44 overflow-y-auto">
      <div className="flex h-60 bg-pink-200 text-2xl flex-center">control other elements</div>
      <div ref={targetRef} className="flex h-60 w-full items-center justify-center gap-2">
        <div className="ball size-12 rounded-full bg-blue-500"></div>
        <div className="ball size-12 rounded-full bg-blue-500"></div>
        <div className="ball size-12 rounded-full bg-blue-500"></div>
      </div>
    </div>
  )
}
`;
