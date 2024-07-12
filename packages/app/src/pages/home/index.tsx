import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimate } from 'animate-motion';
import Button from '@/ui/Button';
import CopyButton from '@/components/CopyButton';
export default function Home() {
  const [ref, animate] = useAnimate<HTMLDivElement>();
  useEffect(() => {
    animate(
      {
        offsetDistance: ['0%', '100%']
      },
      {
        duration: 10000,
        iterations: Infinity
      }
    );
  }, []);
  return (
    <div className="flex h-full flex-col overflow-hidden flex-center">
      <h1 className="z-10 text-6xl font-bold">animate-motion</h1>
      <p className="mt-4">The high-performance extension of Web Animation API for React Hooks</p>
      <div className="relative mt-12 box-border h-[44px] overflow-hidden rounded-[8px] bg-[#636363] p-[2px] shadow-[0_2px_20px_2px] shadow-[rgba(53,23,1,0.3)]">
        <div className="relative z-10 flex size-full items-center rounded-[6px] bg-[#242323] pl-4 pr-[6px] text-white">
          <span>npm install animate-notion</span>
          <CopyButton text="npm install animate-notion" className="ml-2" />
        </div>
        <div
          ref={ref}
          className="absolute -top-1/2 z-[1] size-[50px] rounded-full bg-streamer blur-sm offset-rect"></div>
      </div>
      <div className="z-10 mt-12 space-x-4">
        <Link to="docs">
          <Button size="lg">VIEW DOCS</Button>
        </Link>
        <Link to="motion-presets">
          <Button size="lg">VIEW PRESETS</Button>
        </Link>
      </div>
    </div>
  );
}
