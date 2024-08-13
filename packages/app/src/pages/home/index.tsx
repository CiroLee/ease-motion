import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimate } from 'ease-motion';
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
      <h1 className="text-[40px] font-bold sm:text-6xl">ease-motion</h1>
      <p className="mt-4 px-4 text-center sm:px-0">
        The high-performance extension of Web Animation API for React Hooks
      </p>
      <div className="relative mt-12 box-border h-[44px] overflow-hidden rounded-[8px] bg-[#636363] p-[2px] shadow-[0_2px_20px_2px] shadow-[rgba(53,23,1,0.3)]">
        <div className="relative z-10 flex size-full items-center rounded-[6px] bg-[#242323] pl-4 pr-[6px] text-white">
          <span>npm install ease-motion</span>
          <CopyButton text="npm install ease-motion" className="ml-2" />
        </div>
        <div
          ref={ref}
          className="absolute -top-1/2 z-[1] size-[50px] rounded-full bg-streamer blur-sm offset-rect"></div>
      </div>
      <div className="z-10 mt-12 w-full space-x-4 px-5 sm:w-fit sm:px-0">
        <Link to="docs">
          <Button size="lg" className="w-full sm:w-fit">
            VIEW DOCS
          </Button>
        </Link>
        <Link to="motion-presets" className="hidden sm:inline-flex">
          <Button size="lg">VIEW PRESETS</Button>
        </Link>
      </div>
    </div>
  );
}
