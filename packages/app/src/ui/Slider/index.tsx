import { forwardRef, useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import * as PrimitiveSlider from '@radix-ui/react-slider';

const root = cva('relative flex items-center select-none w-full rounded-full');
const track = cva('relative grow bg-zinc-200 h-[6px] rounded-full overflow-hidden');
const range = cva('absolute bg-brand h-full');
const thumb = cva(
  'size-[18px] bg-white border-2 border-brand rounded-full block outline-none transition duration-150 hover:scale-125 cursor-pointer'
);
interface SliderProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueCommit?: (value: number[]) => void;
  onValueChange?: (value: number[]) => void;
}
const Slider = forwardRef<React.ElementRef<typeof PrimitiveSlider.Root>, SliderProps>((props, ref) => {
  const { label, defaultValue = [0], value, className, style, onValueChange, onValueCommit, ...rest } = props;
  const [sliderValue, setSliderValue] = useState<number[]>(defaultValue);
  const handleOnValueChange = (value: number[]) => {
    setSliderValue(value);
    onValueChange?.(value);
  };

  useEffect(() => {
    if (value !== undefined) {
      setSliderValue(value);
    }
  }, [value]);
  return (
    <div className="relative">
      {label ? (
        <div className="mb-[6px]">
          {label}
          {sliderValue.join(',')}
        </div>
      ) : null}
      <PrimitiveSlider.Root
        ref={ref}
        value={sliderValue}
        defaultValue={defaultValue}
        onValueCommit={onValueCommit}
        onValueChange={handleOnValueChange}
        className={cn(root({ className }))}
        style={style}
        {...rest}>
        <PrimitiveSlider.Track className={track()}>
          <PrimitiveSlider.Range className={range()} />
        </PrimitiveSlider.Track>
        <PrimitiveSlider.Thumb className={thumb()} />
      </PrimitiveSlider.Root>
    </div>
  );
});

Slider.displayName = 'Slider';
export default Slider;
