import Button from '@/components/Button';
import { useAnimation, presetMotionNames } from 'animate-motion';
export default function Presets() {
  const { ref, motion } = useAnimation<HTMLDivElement>();
  const handlePlay = () => {
    motion('fadeOut', {
      duration: 500
    });
  };

  console.log(presetMotionNames);
  return (
    <div className="h-full bg-polka relative flex">
      <div className="flex flex-1 justify-center items-center">
        <div ref={ref} className="size-[240px] rounded-2xl bg-red-400 text-white flex flex-center text-2xl">
          CUBE
        </div>
      </div>
      <div className="w-[300px] ml-auto bg-white h-full shadow-[-2px_0_16px_4px] shadow-black/10 px-3 relative overflow-hidden box-border">
        <ul>
          <li>23</li>
        </ul>
        <div>
          <Button className="h-[40px] mt-3" block onClick={handlePlay}>
            play
          </Button>
        </div>
      </div>
    </div>
  );
}
