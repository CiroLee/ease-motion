import { useEffect, useState, useRef, useMemo } from 'react';
import { IconCode } from '@tabler/icons-react';
import { useMotion, presetMotionNames, type EaseFunctionType } from 'animate-motion';
import Button from '@/components/Button';
import MotionList from '@/components/MotionList';
import PropertyList from '@/components/PropertyList';
import CodeDrawer from '@/components/CodeDrawer';

export default function Presets() {
  const { ref, motion } = useMotion<HTMLDivElement>();
  const { ref: codeDrawerRef, motion: codeDrawerMotion } = useMotion<HTMLDivElement>();
  const btnBoxRef = useRef<HTMLDivElement>(null);
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const [easing, setEasing] = useState<EaseFunctionType>('linear');
  const [duration, setDuration] = useState(500);
  const [delay, setDelay] = useState(0);
  const [fill, setFill] = useState<FillMode>('none');
  const [iterations, setIterations] = useState(1);
  const [direction, setDirection] = useState<PlaybackDirection>('normal');
  const animation = useRef<Animation>();

  const handlePlay = () => {
    console.log(fill);
    animation.current = motion(motionName, {
      fill,
      duration,
      delay,
      iterations,
      direction,
      easing: easing
    });
  };

  const code = useMemo(() => {
    return `useEffect(() => {
    animation.current?.cancel();
    handlePlay();
  }, [motionName, easing, iterations, direction, fill, duration, delay]);`;
  }, []);

  useEffect(() => {
    animation.current?.cancel();
    handlePlay();
  }, [motionName, easing, iterations, direction, fill, duration, delay]);

  return (
    <div className="relative flex h-full overflow-hidden bg-polka">
      <MotionList onClick={setMotionName} />
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <div ref={ref} className="text-6xl font-bold">
          animate-motion
        </div>
        <div ref={btnBoxRef} className="absolute bottom-8 flex w-[240px] gap-2 px-3">
          <Button className="h-[48px] text-xl" block onClick={handlePlay}>
            play
          </Button>
          <Button
            className="h-[48px]"
            onClick={() => codeDrawerMotion('slideInUp', { fill: 'forwards', duration: 200 })}>
            <IconCode />
          </Button>
        </div>
        <CodeDrawer
          onHide={() => codeDrawerMotion('slideOutDown', { fill: 'forwards', duration: 200 })}
          ref={codeDrawerRef}
          className="absolute bottom-0 translate-y-full"
          code={code}
        />
      </div>
      <PropertyList
        onSetDelay={setDelay}
        onSetDirection={setDirection}
        onSetDuration={setDuration}
        onSetEasing={setEasing}
        onSetFill={setFill}
        onSetIterations={setIterations}
      />
    </div>
  );
}
