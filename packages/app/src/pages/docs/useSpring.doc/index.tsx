import { useState } from 'react';
import { cva } from 'class-variance-authority';
import Playground from '@/components/Playground';
import Button from '@/ui/Button';
import Heading from '@/ui/Heading';
import CodeBlock from '@/components/CodeBlock';
import { code1 } from './codes';
import { useSpring } from 'animate-motion';
const labelRange = cva('flex flex-col');

export default function UseSpringDoc() {
  const [springConf, setSpringConf] = useState({ mass: 1, stiffness: 100, damping: 10, velocity: 0 });
  const [y, controller] = useSpring({ from: 0, to: 240, ...springConf, autoPlay: false });
  const reset = () => {
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
      <p className="mb-2">useSpring is used to simulate the real physical spring motion effect</p>
      <Playground className="relative mb-4 h-[440px] px-8">
        <div
          className="relative top-3 ml-[33%] size-16 rounded-full bg-blue-500"
          style={{ transform: `translateY(${y}px)` }}></div>
        <div className="border-box right-1 flex h-[98%] w-[240px] flex-col justify-between space-y-3 rounded bg-white p-2 shadow-[-1px_0_10px_2px] shadow-[#f2f0f0] absolute-center-y">
          <div>
            <label className={labelRange()}>
              <span className="mb-2 whitespace-nowrap">mass: {springConf.mass}</span>
              <input
                className="flex-1"
                type="range"
                value={springConf.mass}
                max={5}
                min={1}
                onChange={(e) => setSpringConf({ ...springConf, mass: Number(e.target.value) })}
              />
            </label>
            <label className={labelRange()}>
              <span className="mb-2 whitespace-nowrap">stiffness: {springConf.stiffness}</span>
              <input
                className="flex-1"
                type="range"
                value={springConf.stiffness}
                max={2000}
                min={10}
                onChange={(e) => setSpringConf({ ...springConf, stiffness: Number(e.target.value) })}
              />
            </label>
            <label className={labelRange()}>
              <span className="mb-2 whitespace-nowrap">damping: {springConf.damping}</span>
              <input
                className="flex-1"
                type="range"
                value={springConf.damping}
                max={2000}
                min={10}
                onChange={(e) => setSpringConf({ ...springConf, damping: Number(e.target.value) })}
              />
            </label>
            <label className={labelRange()}>
              <span className="mb-2 whitespace-nowrap">velocity: {springConf.velocity}</span>
              <input
                className="flex-1"
                type="range"
                value={springConf.velocity}
                max={30}
                min={0}
                onChange={(e) => setSpringConf({ ...springConf, velocity: Number(e.target.value) })}
              />
            </label>
          </div>
          <p className="absolute right-3 top-[210px] cursor-pointer text-blue-500 underline" onClick={reset}>
            reset
          </p>
          <Button className="self-end" block disabled={controller.isPlaying} onClick={controller.play}>
            {controller.isPlaying ? 'playing...' : 'start'}
          </Button>
        </div>
      </Playground>
      <CodeBlock code={code1} />
    </div>
  );
}
