import { cn } from '@/utils/utils';
interface PlaygroundProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Playground({ className, children }: PlaygroundProps) {
  return <div className={cn('relative min-h-[240px] overflow-hidden border bg-polka', className)}>{children}</div>;
}
