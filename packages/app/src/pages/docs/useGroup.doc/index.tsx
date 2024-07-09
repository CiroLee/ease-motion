import { useRef } from 'react';
import PageNavigate from '@/components/PageNavigate';
import Playground from '@/components/Playground';
import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import { useGroup, EASING_FUNCTIONS } from 'animate-motion';
import CodeBlock from '@/components/CodeBlock';

const demoCode = `import { useGroup, EASING_FUNCTIONS } from 'animate-motion';

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
        <button size="sm" onClick={() => controller.play()}>
          play
        </button>
        <button size="sm" onClick={() => controller.reverse()}>
          reverse
        </button>
        <button size="sm" onClick={() => controller.pause()}>
          pause
        </button>
        <button size="sm" onClick={() => controller.resume()}>
          resume
        </button>
      </div>
    </div>
  )
}`;

export default function UseGroupDoc() {
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
        console.log('start group animate');
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
    <div>
      <Heading as="h2" className="mb-4">
        UseGroup
      </Heading>
      <p>useGroup can control multiple elements to animate with the same parameters</p>
      <Heading as="h4" className="my-4">
        Usage
      </Heading>
      <Playground className="flex flex-col justify-center gap-2 px-8">
        <div ref={ballRef1} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef2} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef3} className="size-[40px] bg-blue-500"></div>
        <div className="absolute bottom-2 right-2 space-x-2">
          <Button size="sm" onClick={() => controller.play()}>
            play
          </Button>
          <Button size="sm" onClick={() => controller.reverse()}>
            reverse
          </Button>
          <Button size="sm" onClick={() => controller.pause()}>
            pause
          </Button>
          <Button size="sm" onClick={() => controller.resume()}>
            resume
          </Button>
        </div>
      </Playground>
      <CodeBlock code={demoCode} highlightLines={[1]} highlightRange={[[8, 21]]} className="mt-4" />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock
        showExpandButton={false}
        code="function useGroup<T extends HTMLElement>(props: useGroupProps<T>, deps: any[]): AnimateController"
      />
      <div className="my-12 flex justify-between">
        <PageNavigate direction="prev" path="/docs/use-animate">
          useAnimate
        </PageNavigate>
        <PageNavigate direction="next" path="/docs/use-multiple">
          useMultiple
        </PageNavigate>
      </div>
    </div>
  );
}
