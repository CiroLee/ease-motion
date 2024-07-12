import Heading from '@/ui/Heading';
import { Link } from 'react-router-dom';
import CodeBlock from '@/components/CodeBlock';

const code = `import { useMotion } from 'animate-motion';

export default function App() {
  /** 
   * default value of options for the motion is:
   * {
   *   fill: 'forwards',
   *   duration: 500
   * }
  */

  const [ ref, motion ] = useMotion<HTMLDivElement>()

  return (
    <div>
      <div ref={ref} className="text-3xl">animate-motion</div>
      <button onClick={() => motion('swing')}>play</button>
    </div>
  )
}`;
export default function UseMotionDoc() {
  return (
    <div>
      <Heading as="h2" className="mb-4">
        useMotion
      </Heading>
      <p>useMotion is used to perform animation using preset common animation parameters</p>

      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useMotion<T extends DOMElement>(): [React.RefObject<T>,(name: MotionName, options?: AnimationOptions) => Animation]" />
      <Heading as="h4" className="my-4">
        Usage
      </Heading>
      <CodeBlock code={code} />
      <div className="mt-12">
        you can view the whole usage{' '}
        <Link className="text-blue-600 underline" to="/motion-presets">
          here
        </Link>
      </div>
    </div>
  );
}
