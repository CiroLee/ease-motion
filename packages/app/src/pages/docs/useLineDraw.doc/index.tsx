import { useRef } from 'react';
import Playground from '@/components/Playground';
import { useLineDraw } from 'animate-motion';
import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import CodeBlock from '@/components/CodeBlock';
import { code1, code2, code3 } from './codes';
import Tag from '@/ui/Tag';
import ApiTable from '@/components/ApiTable';
import { rows } from './api';
import { Link } from 'react-router-dom';

export default function UseLineDrawDoc() {
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

  const controller2 = useLineDraw(
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

  const controller3 = useLineDraw(
    {
      selectors: ['#smile path', '#smile circle'],
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
    <>
      <Heading as="h2" className="mb-4">
        useLineDraw
      </Heading>
      <p className="mb-4 text-zinc-400">
        useLineDraw is used to make svg elements(such as path, circle) to have a line animation effect
      </p>
      <Playground className="mb-4 flex flex-col px-8 flex-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path ref={path1Ref} d="M5 21c.5 -4.5 2.5 -8 7 -10" />
          <path ref={path2Ref} d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
        </svg>
        <Button size="sm" className="absolute bottom-3 right-3" onClick={() => controller1.play()}>
          play
        </Button>
      </Playground>
      <CodeBlock code={code1} />
      <p className="my-4">
        sometimes you need to animate lots of svg elements, then you can use{' '}
        <Tag variant="code" size="sm">
          selectors
        </Tag>{' '}
        property to select elements
      </p>
      <Playground className="mb-4 flex flex-col px-8 flex-center">
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
        <Button size="sm" className="absolute bottom-3 right-3" onClick={() => controller2.play()}>
          play
        </Button>
      </Playground>
      <CodeBlock code={code2} highlightLines={[9]} />
      <p className="my-4">you can also add keyframes</p>
      <Playground className="mb-4 flex flex-col px-8 flex-center">
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
        <Button size="sm" className="absolute bottom-3 right-3" onClick={() => controller3.play()}>
          play
        </Button>
      </Playground>
      <CodeBlock code={code3} highlightLines={[10, 11, 12]} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useLineDraw<T extends SVGGeometryElement>(props: UseLineDrawProps<T>, deps: any[]):AnimateController" />
      <Heading as="h4" className="my-4">
        Props
      </Heading>
      <ApiTable rows={rows} />
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
    </>
  );
}
