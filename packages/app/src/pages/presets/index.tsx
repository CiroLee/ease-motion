import { useEffect, useState, useRef, useMemo } from 'react';
import { IconCode, IconSquareFilled, IconH1, IconPhotoFilled } from '@tabler/icons-react';
import { useMotion, presetMotionNames, type EaseFunctionType } from 'animate-motion';
import Button from '@/ui/Button';
import MotionList from '@/components/MotionList';
import PropertyList from '@/components/PropertyList';
import CodeModal from '@/components/CodeModal';
import img from '@/assets/images/dog-photo.jpg';

export default function Presets() {
  const [ref, motion] = useMotion<HTMLDivElement>();

  const [target, setTarget] = useState<'text' | 'cube' | 'image'>('text');
  const [showCode, setShowCode] = useState(false);
  const [motionName, setMotionName] = useState(presetMotionNames[0]);
  const [easingObj, setEasing] = useState<{ name: string; value: EaseFunctionType }>({
    name: 'linear',
    value: 'linear'
  });
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
      easing: easingObj.value
    });
  };

  const code = useMemo(() => {
    const tpl = `motion('${motionName}', {
  fill: '${fill}',
  duration: ${duration},
  delay: ${delay},
  iterations: ${iterations},
  direction: '${direction}',
  easing: EASING_FUNCTIONS.${easingObj.name}
})`;
    return tpl;
  }, [fill, duration, delay, iterations, direction, easingObj, motionName]);

  useEffect(() => {
    animation.current?.cancel();
    handlePlay();
  }, [motionName, easingObj, iterations, direction, fill, duration, delay]);

  return (
    <div className="relative flex h-full overflow-hidden bg-polka">
      <MotionList onClick={setMotionName} />
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <div ref={ref}>
          {target === 'text' && <span className="text-6xl font-bold">animate-motion</span>}
          {target === 'cube' && <div className="size-[200px] rounded-xl bg-brand"></div>}
          {target === 'image' && <img src={img} className="aspect-[3/2] w-[340px] rounded-md" />}
        </div>
        <div ref={btnBoxRef} className="absolute bottom-8 flex gap-2 px-3">
          <div className="mr-4 flex gap-1">
            <Button size="lg" onClick={() => setTarget('text')}>
              <IconH1 />
            </Button>
            <Button size="lg" onClick={() => setTarget('cube')}>
              <IconSquareFilled />
            </Button>
            <Button size="lg" onClick={() => setTarget('image')}>
              <IconPhotoFilled />
            </Button>
          </div>
          <div className="flex gap-1">
            <Button size="lg" className="w-[120px]" onClick={handlePlay}>
              play
            </Button>
            <Button size="lg" onClick={() => setShowCode(true)}>
              <IconCode />
            </Button>
          </div>
        </div>
        <CodeModal show={showCode} code={code} onClose={() => setShowCode(false)} />
      </div>
      <PropertyList
        onSetDelay={setDelay}
        onSetDirection={setDirection}
        onSetDuration={(duration) => {
          if (duration) {
            setDuration(duration);
          } else {
            setDuration(500);
          }
        }}
        onSetEasing={(key, value) => {
          setEasing({ name: key, value });
        }}
        onSetFill={setFill}
        onSetIterations={setIterations}
      />
    </div>
  );
}
