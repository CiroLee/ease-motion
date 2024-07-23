import { useState } from 'react';
import Playground from '@/components/Playground';
import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import Slider from '@/ui/Slider';
import CodeBlock from '@/components/CodeBlock';
import { code1, typeCode } from './codes';
import { useSpring } from 'animate-motion';
import Tag from '@/ui/Tag';
import { Link } from 'react-router-dom';
import ApiTable from '@/components/ApiTable';
import { propsRow } from './api';

export default function UseSpringDoc() {
  const [springConf, setSpringConf] = useState({ mass: 1, stiffness: 100, damping: 10, velocity: 0 });
  const [y, controller] = useSpring(0, 240, { ...springConf, autoPlay: false });
  const reset = () => {
    controller.cancel();
    setSpringConf({
      mass: 1,
      stiffness: 100,
      damping: 10,
      velocity: 0
    });
  };
  return (
    <div>
      <Heading as="h2" className="mb-4">
        useSpring
      </Heading>
      <p className="mb-2">
        useSpring is used to simulate the real physical spring motion effect. Note: the function doesn't include time
        parameter, it's calculated by the function itself
      </p>
      <Playground className="relative mb-4 h-[440px] px-8">
        <div
          className="relative top-3 ml-[33%] size-16 rounded-full bg-blue-500"
          style={{ transform: `translateY(${y}px)` }}></div>
        <div className="border-box right-1 flex h-[98%] w-[240px] flex-col justify-between space-y-3 rounded bg-white p-2 shadow-[-1px_0_10px_2px] shadow-[#f2f0f0] absolute-center-y">
          <div className="space-y-4">
            <Slider
              defaultValue={[springConf.mass]}
              min={1}
              max={5}
              value={[springConf.mass]}
              label="mass:"
              onValueCommit={(value) => setSpringConf({ ...springConf, mass: value[0] })}
            />
            <Slider
              label="stiffness:"
              defaultValue={[springConf.stiffness]}
              min={1}
              max={1000}
              value={[springConf.stiffness]}
              onValueCommit={(value) => setSpringConf({ ...springConf, stiffness: value[0] })}
            />
            <Slider
              label="damping:"
              defaultValue={[springConf.damping]}
              min={1}
              max={100}
              value={[springConf.damping]}
              onValueCommit={(value) => setSpringConf({ ...springConf, damping: value[0] })}
            />
            <Slider
              label="velocity:"
              defaultValue={[springConf.velocity]}
              min={0}
              max={30}
              value={[springConf.velocity]}
              onValueCommit={(value) => setSpringConf({ ...springConf, velocity: value[0] })}
            />
          </div>
          <p className="absolute right-3 top-[210px] cursor-pointer text-blue-500 underline" onClick={reset}>
            reset
          </p>
          <Button block disabled={controller.isPlaying} onClick={controller.play}>
            {controller.isPlaying ? 'playing...' : 'start'}
          </Button>
        </div>
      </Playground>
      <CodeBlock code={code1} />
      <Heading as="h4" className="my-4">
        Signature
      </Heading>
      <CodeBlock code="function useSpring(from: number, to: number, options?: SpringOptions): [number, ValueController]" />
      <Heading as="h4" className="my-4">
        Type
      </Heading>
      <CodeBlock code={typeCode} />
      <Heading as="h4" className="my-4">
        Props
      </Heading>
      <ApiTable rows={propsRow} styles={{ default: { width: '260px' } }} />
      <Heading as="h4" className="my-4">
        ReturnType
      </Heading>
      <div>
        <Tag className="mb-2" size="sm" variant="code">
          ValueController
        </Tag>{' '}
        see{' '}
        <Link className="text-blue-600 underline" to="/docs/overview">
          here
        </Link>
      </div>
    </div>
  );
}
