import { useEffect, useState, useMemo } from 'react';
import { useMotion, presetMotionNames, MotionName } from 'animate-motion';
import { cn } from '@/utils/utils';
import Button from '@/components/Button';

const prefixes = ['fade', 'slide', 'zoom'];
const durationMap = {
  1000: ['shakeX', 'shakeY'],
  1500: ['heartBeat']
};

function calcDuration(motionName: MotionName) {
  const duration = Object.entries(durationMap).find(([, values]) => values.includes(motionName))?.[0];
  return Number(duration) || 500;
}
export default function Presets() {
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const { ref, motion } = useMotion<HTMLDivElement>();
  const handlePlay = () => {
    const duration = calcDuration(motionName);
    motion(motionName, {
      fill: 'auto',
      duration
    });
  };
  const getOtherNames = () => {
    const names = presetMotionNames.filter((name) => !prefixes.some((prefix) => name.startsWith(prefix)));
    return names;
  };

  const groupedNames = useMemo(() => {
    const names: { [key: string]: MotionName[] } = {};
    prefixes.forEach((prefix) => {
      if (!names[prefix]) {
        names[prefix] = [];
      }
      const t = presetMotionNames.filter((name) => name.startsWith(prefix));
      names[prefix].push(...t);
    });
    names['other'] = getOtherNames();
    return names;
  }, []);

  useEffect(() => {
    handlePlay();
  }, [motionName]);

  return (
    <div className="h-full bg-polka relative flex">
      <div className="flex flex-1 justify-center items-center overflow-hidden">
        <div ref={ref} className="text-6xl font-bold">
          animate-motion
        </div>
      </div>
      <div className="flex flex-col justify-between w-[300px] ml-auto bg-white h-full shadow-[-2px_0_16px_4px] shadow-black/10 py-3 relative overflow-hidden box-border">
        <div className="space-y-4 flex-1 overflow-y-auto scrollbar pl-3 pr-2">
          {Object.entries(groupedNames).map(([key, value]) => (
            <ul className="flex flex-col gap-y-2" key={key}>
              <p className="text-gray-300">{key}</p>
              {value.map((name) => (
                <li
                  className={cn(
                    'px-2 py-3 border border-brand/20 cursor-pointer transition rounded-sm hover:bg-brand/10',
                    {
                      'text-brand-600 border-brand': motionName === name
                    }
                  )}
                  key={name}
                  onClick={() => setMotionName(name)}>
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-4 px-3">
          <Button className="h-[40px] mt-3" block onClick={handlePlay}>
            play
          </Button>
        </div>
      </div>
    </div>
  );
}
