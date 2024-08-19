import Heading from '@/ui/Heading';
import OutLink from '@/components/OutLink';
import CodeBlock from '@/components/CodeBlock';
import Button from '@/ui/Button';
import ApiTable from '@/components/ApiTable';
import { returnRows } from './api';
import { useAnimate } from 'ease-motion';
import PageNavigate from '@/components/PageNavigate';

const useAnimateUsageCode = `import { useAnimate} from 'ease-motion;'
export default function App() {
  const [ ref, animate ] = useAnimate<HTMLDivElement>();
  return (
    <div className="relative mb-3 flex h-[240px] overflow-hidden rounded-md border items-center justify-center">
      <div ref={ref} className="size-[120px] rounded-lg bg-blue-500"></div>
      <button
        className="absolute bottom-2 right-2"
        onClick={() => {
          animate(
            {
              transform: ['translateX(0)', 'translateX(100px)'],
              borderRadius: ['8px', '50%'],
              backgroundColor: ['rgb(59 130 246)', 'rgb(246 154 59)']
            },
            {
              duration: 800,
              easing: 'ease-in-out',
              fill: 'forwards'
            }
          );
        }}>
        play
      </button>
    </div>
  )
}`;
export default function UseAnimateDoc() {
  const [ref, animate] = useAnimate<HTMLDivElement>();
  return (
    <div>
      <Heading as="h2" className="mb-4">
        useAnimate
      </Heading>
      <p className="mb-2 text-zinc-400">
        basic wrap of
        <OutLink url="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">
          Web Animation API(WAAPI)
        </OutLink>
      </p>
      <Heading as="h5" className="mb-3">
        Usage
      </Heading>
      <div className="relative mb-3 flex h-[240px] overflow-hidden rounded-md border flex-center bg-polka">
        <div ref={ref} className="size-[120px] rounded-lg bg-blue-500"></div>
        <Button
          size="sm"
          className="absolute bottom-3 right-3"
          onClick={() => {
            animate(
              {
                transform: ['translateX(0)', 'translateX(100px)'],
                borderRadius: ['8px', '50%'],
                backgroundColor: ['rgb(59 130 246)', 'rgb(246 154 59)']
              },
              {
                duration: 800,
                easing: 'ease-in-out',
                fill: 'forwards'
              }
            );
          }}>
          play
        </Button>
      </div>
      <CodeBlock code={useAnimateUsageCode} highlightLines={[3]} highlightRange={[[10, 20]]} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useAnimate<T extends DOMElement>(): [React.RefObject<T>, AnimationController]" />
      <Heading as="h4" className="my-4">
        ReturnType
      </Heading>
      <ApiTable rows={returnRows} styles={{ description: { width: 440 } }} omitHeads={['Required', 'Default']} />
      <div className="my-12 flex justify-between">
        <PageNavigate direction="prev" path="/docs/overview">
          overview
        </PageNavigate>
        <PageNavigate direction="next" path="/docs/use-motion">
          useMotion
        </PageNavigate>
      </div>
    </div>
  );
}
