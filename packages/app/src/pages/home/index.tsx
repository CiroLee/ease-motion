import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimate } from 'animate-motion';
import Button from '@/components/Button';
export default function Home() {
  const { ref, animate } = useAnimate<HTMLDivElement>();
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
    <div className="flex h-full flex-col flex-center">
      <h1 className="text-5xl font-bold">animate-motion</h1>
      <div className="relative mt-12 box-border h-[44px] overflow-hidden rounded-[8px] bg-[#636363] p-[2px] shadow-[0_2px_20px_2px] shadow-[rgba(53,23,1,0.3)]">
        <div className="relative z-10 flex size-full items-center rounded-[6px] bg-[#242323] px-4 text-white">
          npm install animate-notion
        </div>
        <div
          ref={ref}
          className="absolute -top-1/2 z-[1] size-[50px] rounded-full bg-streamer blur-sm offset-rect"></div>
      </div>
      <Link to="motion-presets">
        <Button className="mt-20 h-[52px] px-5 text-[18px]">START</Button>
      </Link>
    </div>
  );
}
