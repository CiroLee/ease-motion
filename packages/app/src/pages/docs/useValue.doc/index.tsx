import PageNavigate from '@/components/PageNavigate';
import Playground from '@/components/Playground';
import Heading from '@/ui/Heading';
import Button from '@/ui/Button';
import { useValue } from 'animate-motion';
import CodeBlock from '@/components/CodeBlock';
import { code, typesCode } from './codes';
import ApiTable from '@/components/ApiTable';
import { propsRows, controllerRows } from './api';
export default function UseValueDoc() {
  const [value, controller] = useValue(0, 100, {
    duration: 5000,
    autoPlay: false,
    easing: 'easeOutCubic'
  });
  return (
    <div>
      <Heading as="h2" className="mb-2">
        useValue
      </Heading>
      <p className="mb-4 text-zinc-400">useValue is used to animate numbers</p>
      <Playground className="mb-4 flex h-[260px] flex-col items-center">
        <div className="my-4 flex size-[120px] rounded-xl border bg-white text-3xl font-bold flex-center">{value}</div>
        <p>isPlaying: {controller.isPlaying.toString()}</p>
        <div className="mt-4 space-x-2">
          <Button size="sm" onClick={() => controller.play()}>
            play
          </Button>
          <Button size="sm" onClick={() => controller.pause()}>
            pause
          </Button>
          <Button size="sm" onClick={() => controller.resume()}>
            resume
          </Button>
          <Button size="sm" onClick={() => controller.cancel()}>
            cancel
          </Button>
        </div>
      </Playground>
      <CodeBlock code={code} highlightLines={[1]} highlightRange={[[4, 8]]} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useValue(from: number, to: number, options: UseValueOptions = {}): [number, AnimateValueController]" />
      <Heading as="h4" className="my-4">
        Types
      </Heading>
      <CodeBlock code={typesCode} />
      <Heading as="h4" className="my-4">
        Props
      </Heading>
      <ApiTable rows={propsRows} />
      <Heading as="h4" className="my-4">
        ReturnType
      </Heading>
      <ApiTable rows={controllerRows} omitHeads={['Required', 'Default']} />
      <div className="my-12 flex">
        <PageNavigate direction="prev" path="/docs/use-multiple">
          useMultiple
        </PageNavigate>
      </div>
    </div>
  );
}
