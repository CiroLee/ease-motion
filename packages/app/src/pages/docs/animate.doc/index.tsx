import { useRef } from 'react';
import { animate } from 'ease-motion';
import Heading from '@/ui/Heading';
import Playground from '@/components/Playground';
import Button from '@/ui/Button';
import CodeBlock from '@/components/CodeBlock';
import PageNavigate from '@/components/PageNavigate';
import ApiTable from '@/components/ApiTable';
import { rows } from './api';

const code = `import { animate } from 'ease-motion;

export default function App() {
 const ref = useRef<HTMLDivElement>(null);

 return <div className="relative mb-3 flex h-[240px] overflow-hidden rounded-md border flex-center bg-polka">
        <div ref={ref} className="size-[120px] rounded-lg bg-blue-500"></div>
        <button
          className="absolute bottom-3 right-3"
          onClick={() => {
            ref.current &&
              animate({
                target: ref.current,
                motion: 'flipX',
                options: {
                  duration: 500,
                  fill: 'forwards'
                }
              });
          }}>
          play
        </button>
      </div>
}`;
export default function AnimateDoc() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <Heading as="h2" className="mb-4">
        animate
      </Heading>
      <p className="mb-4 text-zinc-400">
        animate is universal method for animating elements. It can also use preset motions
      </p>
      <Playground className="relative mb-3 flex h-[240px] overflow-hidden rounded-md border flex-center bg-polka">
        <div ref={ref} className="size-[120px] rounded-lg bg-blue-500"></div>
        <Button
          size="sm"
          className="absolute bottom-3 right-3"
          onClick={() => {
            ref.current &&
              animate({
                target: ref.current,
                motion: 'flipX',
                options: {
                  duration: 500,
                  fill: 'forwards'
                }
              });
          }}>
          play
        </Button>
      </Playground>
      <CodeBlock className="mb-4" code={code} highlightRange={[[11, 18]]} />
      <Heading className="mb-2" as="h4">
        Signature
      </Heading>
      <CodeBlock className="mb-4" code="function animate(props: AnimationProps): Animation" />
      <Heading as="h4" className="mb-2">
        Props
      </Heading>
      <ApiTable rows={rows} />
      <div className="my-12 flex justify-between">
        <PageNavigate direction="prev" path="/docs/use-spring">
          overview
        </PageNavigate>
      </div>
    </>
  );
}
