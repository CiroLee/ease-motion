import { cn } from '@/utils/utils';
import { IconAlertCircleFilled } from '@tabler/icons-react';
import { EASING_FUNCTIONS, type EaseFunctionType } from 'ease-motion';
import { useRef, useState } from 'react';
import EaseIcon from '@/components/EaseIcon';
import { cva } from 'class-variance-authority';
import Tooltip from '@/ui/Tooltip';
import Tag from '@/ui/Tag';

const item = cva('relative cursor-pointer rounded-sm border border-brand/20 px-2 py-3 transition hover:bg-brand/10', {
  variants: {
    active: {
      true: 'border-brand text-brand-600'
    }
  }
});
interface PropertyListProps {
  onSetEasing: (key: string, easing: EaseFunctionType) => void;
  onSetDuration: (duration: number) => void;
  onSetDelay: (delay: number) => void;
  onSetFill: (fill: FillMode) => void;
  onSetIterations: (iterations: number) => void;
  onSetDirection: (direction: PlaybackDirection) => void;
}
export default function PropertyList({
  onSetEasing,
  onSetDuration,
  onSetDelay,
  onSetFill,
  onSetIterations,
  onSetDirection
}: PropertyListProps) {
  const [easing, setEasing] = useState<EaseFunctionType>('linear');
  const [fill, setFill] = useState<FillMode>('none');
  const [iterations, setIterations] = useState(1);
  const [direction, setDirection] = useState<PlaybackDirection>('normal');
  const durationInputRef = useRef<HTMLInputElement>(null);
  const delayInputRef = useRef<HTMLInputElement>(null);
  const iterationsInputRef = useRef<HTMLInputElement>(null);

  const handleResetAll = () => {
    handleOnSetEasing('linear', 'linear');
    handleOnSetDuration(500);
    handleOnSetDelay(0);
    handleOnSetFill('none');
    handleOnSetIterations(1);
    handleOnSetDirections('normal');

    if (durationInputRef.current && delayInputRef.current && iterationsInputRef.current) {
      durationInputRef.current.value = '';
      delayInputRef.current.value = '';
      iterationsInputRef.current.value = '';
    }
  };

  const handleOnSetEasing = (key: string, easing: EaseFunctionType) => {
    setEasing(easing);
    onSetEasing(key, easing);
  };

  const handleOnSetFill = (fill: FillMode) => {
    setFill(fill);
    onSetFill(fill);
  };

  const handleOnSetDuration = (duration: number) => {
    onSetDuration(duration);
  };

  const handleOnSetDelay = (delay: number) => {
    onSetDelay(delay);
  };

  const handleOnSetIterations = (iterations: number) => {
    setIterations(iterations);
    onSetIterations(iterations);
  };

  const handleOnSetDirections = (direction: PlaybackDirection) => {
    setDirection(direction);
    onSetDirection(direction);
  };
  return (
    <div className="relative ml-auto box-border flex h-full w-sidebar flex-col overflow-hidden bg-white py-3 shadow-[-2px_0_16px_4px] shadow-black/5">
      <div className="mb-2 flex justify-between px-3">
        <div className="flex items-center">
          <span className="text-gray-300">Easing</span>
          <Tooltip
            className="max-w-[240px]"
            text={
              <>
                easing width <div className="inline-block size-[8px] rounded-full bg-orange-300"></div> symbol means
                that the effect is achieved by{' '}
                <Tag className="bg-brand-400" size="sm">
                  linear()
                </Tag>{' '}
                function, it is available on Chrome 113+, Safari 17.2+, Firefox 112+
              </>
            }>
            <IconAlertCircleFilled size="1em" className="ml-2 cursor-pointer text-orange-300" />
          </Tooltip>
        </div>
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
                handleOnSetEasing(key, value as EaseFunctionType);
              }}>
              {value.includes('linear(') ? (
                <div className="absolute right-2 top-2 size-[8px] rounded-full bg-orange-300"></div>
              ) : null}
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
              onBlur={(e) => {
                handleOnSetDuration(Number(e.target.value));
              }}
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
              onBlur={(e) => {
                handleOnSetDelay(Number(e.target.value));
              }}
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
              onClick={() => {
                handleOnSetFill(item as FillMode);
              }}>
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
            onBlur={(e) => {
              handleOnSetIterations(Number(e.target.value));
            }}
            className="box-border h-[40px] w-full flex-1 rounded-sm border border-brand/10 px-2 outline-none"
          />
          <span className="px-2 text-sm text-gray-400">Or</span>
          <div
            className={cn('flex h-[40px] flex-1 cursor-pointer border border-brand/10 flex-center', {
              'border-brand': iterations === Infinity
            })}
            onClick={() => handleOnSetIterations(Infinity)}>
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
              onClick={() => {
                handleOnSetDirections(item as PlaybackDirection);
              }}>
              {item.replace('-', '\n')}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
