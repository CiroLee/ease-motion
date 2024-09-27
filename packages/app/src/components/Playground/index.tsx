import { forwardRef } from 'react';
import { cn } from '@/utils/utils';
interface PlaygroundProps {
  className?: string;
  children?: React.ReactNode;
}
const Playground = forwardRef<HTMLDivElement, PlaygroundProps>((props, ref) => {
  return (
    <div ref={ref} className={cn('relative min-h-[240px] overflow-hidden rounded-md border bg-polka', props.className)}>
      {props.children}
    </div>
  );
});

Playground.displayName = 'Playground';
export default Playground;
