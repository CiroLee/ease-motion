import { useRef } from 'react';
import { useMultiple } from 'ease-motion';
import PageNavigate from '@/components/PageNavigate';
import Playground from '@/components/Playground';
import Heading from '@/ui/Heading';
import Button from '@/ui/Button';
import CodeBlock from '@/components/CodeBlock';
import { code1, code2, types } from './codes';
import ApiTable from '@/components/ApiTable';
import { propsRows } from './api';
import Tag from '@/ui/Tag';
import { Link } from 'react-router-dom';

export default function UseMultipleDoc() {
  const ballRef1 = useRef<HTMLDivElement>(null);
  const ballRef2 = useRef<HTMLDivElement>(null);
  const ballRef3 = useRef<HTMLDivElement>(null);

  const ballRef4 = useRef<HTMLDivElement>(null);
  const ballRef5 = useRef<HTMLDivElement>(null);
  const ballRef6 = useRef<HTMLDivElement>(null);
  const controller1 = useMultiple(
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

  const controller2 = useMultiple(
    {
      baseMotion: 'breath',
      baseOptions: {
        duration: 1000,
        fill: 'forwards'
      },
      config: [{ ref: ballRef4, motion: 'flipX' }, { ref: ballRef5, motion: 'flipY' }, { ref: ballRef6 }]
    },
    []
  );
  return (
    <div>
      <Heading as="h2" className="mb-4">
        useMultiple
      </Heading>
      <p className="mb-4 text-zinc-400">
        useMultiple is used to control the animation of multiple elements using independent animation parameters
      </p>
      <Heading as="h4" className="mb-4">
        basic
      </Heading>
      <Playground className="mb-4 flex flex-col justify-center gap-2 px-8">
        <div ref={ballRef1} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef2} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef3} className="size-[40px] bg-blue-500"></div>
        <Button size="sm" className="absolute bottom-3 right-3" onClick={() => controller1.play()}>
          play
        </Button>
      </Playground>
      <CodeBlock code={code1} highlightRange={[[9, 52]]} />
      <Heading as="h4" className="mt-4">
        use preset motion
      </Heading>
      <p className="mb-4">
        you can also use{' '}
        <Link to="/motion-presets" className="text-blue-500 underline">
          presets
        </Link>{' '}
        in useMultiple
      </p>
      <Playground className="mb-4 flex flex-col items-center justify-center gap-2 px-8">
        <div ref={ballRef4} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef5} className="size-[40px] bg-blue-500"></div>
        <div ref={ballRef6} className="size-[40px] bg-blue-500"></div>
        <Button size="sm" className="absolute bottom-3 right-3" onClick={() => controller2.play()}>
          play
        </Button>
      </Playground>
      <CodeBlock code={code2} highlightLines={[11, 17, 18]} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useMultiple<T extends DOMElement>(props: useMultipleProps<T>, deps: any[]): AnimateController" />
      <Heading as="h4" className="my-4">
        Types
      </Heading>
      <CodeBlock code={types} />
      <Heading as="h4" className="my-4">
        Props
      </Heading>
      <p>
        <Tag size="sm" variant="code">
          deps
        </Tag>{' '}
        is dependencies array, used like useEffect, and{' '}
        <Tag className="mb-2" size="sm" variant="code">{`UseMultipleProps<T>`}</Tag> type below
      </p>
      <ApiTable rows={propsRows} styles={{ description: { width: 360 } }} />
      <Heading as="h4" className="my-4">
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
        <PageNavigate direction="prev" path="/docs/use-group">
          useGroup
        </PageNavigate>
        <PageNavigate direction="next" path="/docs/use-line-draw">
          useLineDraw
        </PageNavigate>
      </div>
    </div>
  );
}
