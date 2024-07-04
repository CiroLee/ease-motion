import { useEffect, useState, useRef, useMemo } from 'react';
import { IconCode } from '@tabler/icons-react';
import { useMotion, presetMotionNames, type EaseFunctionType } from 'animate-motion';
import Button from '@/components/Button';
import MotionList from '@/components/MotionList';
import PropertyList from '@/components/PropertyList';
import CodeDrawer from '@/components/CodeDrawer';

export default function Presets() {
  const { ref, motion } = useMotion<HTMLDivElement>();
  const [showCode, setShowCode] = useState(false);
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const [easing, setEasing] = useState<EaseFunctionType>('linear');
  const [duration, setDuration] = useState(500);
  const [delay, setDelay] = useState(0);
  const [fill, setFill] = useState<FillMode>('none');
  const [iterations, setIterations] = useState(1);
  const [direction, setDirection] = useState<PlaybackDirection>('normal');
  const btnBoxRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation>();

  const handlePlay = () => {
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
    const tpl = `motion('${motionName}', {
  fill: '${fill}',
  duration: ${duration},
  delay: ${delay},
  iterations: ${iterations},
  direction: '${direction}',
  easing: '${easing}'
})`;
    return tpl;
  }, [fill, duration, delay, iterations, direction, easing, motionName]);

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
          <Button className="h-[48px]" onClick={() => setShowCode(true)}>
            <IconCode />
          </Button>
        </div>
        <CodeDrawer show={showCode} code={code} onClose={() => setShowCode(false)} />
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
