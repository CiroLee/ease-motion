import { useEffect, useState, useMemo, useRef } from 'react';
import { cva } from 'class-variance-authority';
import { useMotion, presetMotionNames, EASING_FUNCTIONS, type MotionName, type EaseFunctionType } from 'animate-motion';
import EaseIcon from '@/components/EaseIcon';
import { cn } from '@/utils/utils';
import Button from '@/components/Button';

const item = cva('cursor-pointer rounded-sm border border-brand/20 px-2 py-3 transition hover:bg-brand/10', {
  variants: {
    active: {
      true: 'border-brand text-brand-600'
    }
  }
});

const prefixes = ['fade', 'slide', 'zoom'];

export default function Presets() {
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const [easing, setEasing] = useState<EaseFunctionType>('linear');
  const { ref, motion } = useMotion<HTMLDivElement>();
  const [duration, setDuration] = useState(500);
  const [delay, setDelay] = useState(0);
  const [fill, setFill] = useState<FillMode>('none');
  const [iterations, setIterations] = useState(1);
  const [direction, setDirection] = useState<PlaybackDirection>('normal');
  const durationInputRef = useRef<HTMLInputElement>(null);
  const delayInputRef = useRef<HTMLInputElement>(null);
  const iterationsInputRef = useRef<HTMLInputElement>(null);

  const animation = useRef<Animation>();

  const handlePlay = () => {
    console.log(iterations);
    animation.current = motion(motionName, {
      fill,
      duration,
      delay,
      iterations,
      direction,
      easing: easing
    });
  };

  const handleResetAll = () => {
    setEasing('linear');
    setDuration(500);
    setDelay(0);
    setFill('none');
    setIterations(1);
    if (durationInputRef.current && delayInputRef.current && iterationsInputRef.current) {
      durationInputRef.current.value = '';
      delayInputRef.current.value = '';
      iterationsInputRef.current.value = '';
    }
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
    animation.current?.cancel();
    handlePlay();
  }, [motionName, easing, iterations, direction, fill, duration, delay]);

  return (
    <div className="relative flex h-full bg-polka">
      <div className="relative ml-auto box-border flex h-full w-[300px] flex-col overflow-hidden bg-white py-3 shadow-[2px_0_16px_4px] shadow-black/5">
        <div className="scrollbar flex-1 space-y-4 overflow-y-auto pl-3 pr-2">
          {Object.entries(groupedNames).map(([key, value]) => (
            <ul className="flex flex-col gap-y-2" key={key}>
              <p className="text-gray-300">{key}</p>
              {value.map((name) => (
                <li
                  className={cn(item({ active: motionName === name }))}
                  key={name}
                  onClick={() => setMotionName(name)}>
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <div ref={ref} className="text-6xl font-bold">
          animate-motion
        </div>
        <div className="absolute bottom-8 w-[240px] px-3">
          <Button className="mt-3 h-[54px] text-xl" block onClick={handlePlay}>
            play
          </Button>
        </div>
      </div>
      <div className="relative ml-auto box-border flex h-full w-[300px] flex-col overflow-hidden bg-white py-3 shadow-[-2px_0_16px_4px] shadow-black/5">
        <div className="mb-2 flex justify-between px-3">
          <span className="text-gray-300">easing</span>
          <span className="cursor-pointer text-brand" onClick={handleResetAll}>
            reset all
          </span>
        </div>
        <div className="scrollbar max-h-[52%] overflow-y-auto border-b border-gray-100 pb-3">
          <div className="grid grid-cols-2 gap-3 pl-3 pr-2">
            {Object.entries(EASING_FUNCTIONS).map(([key, value]) => (
              <div
                key={key}
                className={cn(item({ active: easing === value, className: 'flex flex-col flex-center' }))}
                onClick={() => {
                  setEasing(value as EaseFunctionType);
                }}>
                <EaseIcon className="size-[36px] text-gray-400" name={key as EaseFunctionType} key={key} />
                <span className="mt-2 text-[12px]">{key}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex gap-2 border-b border-gray-100 px-3 pb-3">
          <div className="relative flex-1">
            <p className="text-gray-300">duration</p>
            <div className="mt-1 flex items-center">
              <input
                ref={durationInputRef}
                type="number"
                placeholder="500"
                onBlur={(e) => setDuration(Number(e.target.value))}
                className="box-border h-[40px] w-full rounded-sm border border-brand/10 px-2 outline-none"
              />
              <span className="ml-1">ms</span>
            </div>
          </div>
          <div className="relative flex-1">
            <p className="text-gray-300">delay</p>
            <div className="mt-1 flex items-center">
              <input
                ref={delayInputRef}
                type="number"
                placeholder="0"
                onBlur={(e) => setDelay(Number(e.target.value))}
                className="box-border h-[40px] w-full rounded-sm border border-brand/10 px-2 outline-none"
              />
              <span className="ml-1">ms</span>
            </div>
          </div>
        </div>
        <div className="mt-3 border-b border-gray-100 px-3 pb-3">
          <p className="text-gray-300">fil mode</p>
          <div className="mt-1 grid grid-cols-3">
            {['none', 'forwards', 'backwards', 'both', 'auto'].map((item) => (
              <li
                key={item}
                className={cn(
                  'flex h-[40px] cursor-pointer border border-brand/10 text-sm flex-center last:border-t-0 [&:nth-child(1)]:border-r-0 [&:nth-child(3)]:border-l-0 [&:nth-child(4)]:border-r-0 [&:nth-child(4)]:border-t-0',
                  { '!border border-brand': fill === item }
                )}
                onClick={() => setFill(item as FillMode)}>
                {item}
              </li>
            ))}
          </div>
        </div>
        <div className="mt-3 border-b border-gray-100 px-3 pb-3">
          <p className="text-gray-300">repeat times</p>
          <div className="flex items-center">
            <input
              ref={iterationsInputRef}
              type="number"
              placeholder="1"
              onBlur={(e) => setIterations(Number(e.target.value))}
              className="box-border h-[40px] w-full flex-1 rounded-sm border border-brand/10 px-2 outline-none"
            />
            <span className="px-2 text-sm text-gray-400">Or</span>
            <div
              className={cn('flex h-[40px] flex-1 cursor-pointer border border-brand/10 flex-center', {
                'border-brand': iterations === Infinity
              })}
              onClick={() => setIterations(Infinity)}>
              infinite
            </div>
          </div>
        </div>
        <div className="mt-3 px-3">
          <p className="text-gray-300">directions</p>
          <div className="mt-1 grid grid-cols-3">
            {['normal', 'alternate', 'alternate-reverse', 'reverse'].map((item) => (
              <li
                key={item}
                className={cn(
                  'flex h-[40px] cursor-pointer whitespace-pre-wrap border border-brand/10 text-center text-sm leading-[1em] flex-center last:border-t-0 [&:nth-child(2)]:border-l-0 [&:nth-child(3)]:border-l-0 [&:nth-child(4)]:border-t-0',
                  { '!border border-brand': direction === item }
                )}
                onClick={() => setDirection(item as PlaybackDirection)}>
                {item.replace('-', '\n')}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
