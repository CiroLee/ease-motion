import Heading from '@/ui/Heading';
import CodeBlock from '@/components/CodeBlock';
import PageNavigate from '@/components/PageNavigate';
export default function Overview() {
  return (
    <div>
      <Heading as="h2" className="mb-4">
        Overview
      </Heading>
      <p>
        animate-motion is a high-performance extension of Web Animation API(WAAPI) for react hooks. It's easy to get
        started. More controls over animations.
      </p>
      <Heading as="h4" className="my-4">
        Install
      </Heading>
      <CodeBlock className="sm:w-[60%]" lang="bash" code="npm install animate-motion" />
      <div className="my-12 flex justify-end">
        <PageNavigate direction="next" path="/docs/use-animate">
          useAnimate
        </PageNavigate>
      </div>
    </div>
  );
}
