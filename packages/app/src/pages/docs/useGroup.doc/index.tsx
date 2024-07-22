import { useRef } from 'react';
import PageNavigate from '@/components/PageNavigate';
import Playground from '@/components/Playground';
import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import { useGroup, EASING_FUNCTIONS } from 'animate-motion';
import CodeBlock from '@/components/CodeBlock';
import Tag from '@/ui/Tag';
import { demoCode, demoCode2, selectorsCode, types } from './codes';
import ApiTable from '@/components/ApiTable';
import { propsRows } from './api';
import { Link } from 'react-router-dom';

export default function UseGroupDoc() {
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  const ballRef3 = useRef<HTMLDivElement>(null);

  const ballRef4 = useRef<HTMLDivElement>(null);
  const ballRef5 = useRef<HTMLDivElement>(null);
  const ballRef6 = useRef<HTMLDivElement>(null);
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

  const controller2 = useGroup(
    {
      refs: [ballRef4, ballRef5, ballRef6],
      keyframes: {
        transform: ['translateX(0) rotate(0)', 'translateX(300px) rotate(2turn)']
      },
      options: {
        duration: 3000,
        fill: 'forwards',
        easing: EASING_FUNCTIONS.easeOutInBack,
        delay: (el, index) => {
          return index * 200;
        }
      }
    },
    []
  );

  const controller3 = useGroup(
    {
      selectors: ['.square'],
      options: {
        duration: 3000,
        fill: 'forwards',
        easing: EASING_FUNCTIONS.easeInOutBack
      },
      keyframes: {
        transform: ['translateX(300px) rotate(2turn)']
      }
    },
    []
  );
  return (
    <div>
      <Heading as="h2" className="mb-4">
        UseGroup
      </Heading>
      <p className="text-zinc-400">useGroup is used to control multiple elements to animate with the same parameters</p>
      <Heading as="h4" className="my-4">
        basic
      </Heading>
      <Playground className="mb-4 flex flex-col justify-center gap-2 px-8">
        <div ref={ballRef1} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef2} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef3} className="size-[40px] bg-blue-500"></div>
        <div className="absolute bottom-2 right-2 space-x-2">
          <Button size="sm" onClick={() => controller.play()}>
            play
          </Button>
          <Button size="sm" onClick={() => controller.pause()}>
            pause
          </Button>
          <Button size="sm" onClick={() => controller.resume()}>
            resume
          </Button>
          <Button size="sm" onClick={() => controller.reverse()}>
            reverse
          </Button>
        </div>
      </Playground>
      <CodeBlock code={demoCode} highlightLines={[1]} highlightRange={[[8, 21]]} className="my-4" />
      <Heading as="h4" className="mb-2">
        delay
      </Heading>
      <p className="mb-2">
        <Tag size="sm" variant="code">
          delay
        </Tag>{' '}
        can accept a number type value or a function that returns number type
      </p>
      <Playground className="mb-4 flex flex-col justify-center gap-2 px-8">
        <div ref={ballRef4} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef5} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef6} className="size-[40px] bg-blue-500"></div>
        <div className="absolute bottom-2 right-2 space-x-2">
          <Button size="sm" onClick={() => controller2.play()}>
            play
          </Button>
        </div>
      </Playground>
      <CodeBlock code={demoCode2} diffAddLines={[18, 19, 20]} />
      <Heading as="h4" className="my-4">
        selectors
      </Heading>
      <p className="mb-2">
        <Tag size="sm" variant="code">
          useGroup
        </Tag>{' '}
        also supports selectors, it is easer to select same type elements to animate
      </p>
      <Playground className="mb-4 flex flex-col justify-center gap-2 px-8">
        <div className="square size-[40px] bg-blue-500"></div>
        <div className="square size-[40px] bg-blue-500"></div>
        <div className="square size-[40px] bg-blue-500"></div>
        <div className="absolute bottom-2 right-2 space-x-2">
          <Button size="sm" onClick={() => controller3.play()}>
            play
          </Button>
        </div>
      </Playground>
      <CodeBlock code={selectorsCode} highlightLines={[7]} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useGroup<T extends DOMElement>(props: useGroupProps<T>, deps: any[]): AnimateController" />
      <Heading as="h4" className="my-4">
        Types
      </Heading>
      <CodeBlock code={types} />
      <Heading as="h4" className="mb-2 mt-4">
        Props
      </Heading>
      <p>
        <Tag size="sm" variant="code">
          deps
        </Tag>{' '}
        is dependencies array, used like useEffect, and{' '}
        <Tag className="mb-2" size="sm" variant="code">{`UseGroupProps<T>`}</Tag> type below
      </p>
      <ApiTable rows={propsRows} />
      <Heading as="h4" className="mb-2 mt-4">
        ReturnType
      </Heading>
      <div>
        <Tag className="mb-2" size="sm" variant="code">
          AnimateController
        </Tag>{' '}
        see{' '}
        <Link className="text-blue-600 underline" to="/docs/overview">
          here
        </Link>
      </div>
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
