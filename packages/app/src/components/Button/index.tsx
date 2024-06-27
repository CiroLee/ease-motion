import { cn } from '@/utils/utils';
import { cva } from 'class-variance-authority';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  children?: React.ReactNode;
}

const button = cva('px-3 h-9 bg-brand text-white transition active:opacity-90', {
  variants: {
    block: {
      true: 'w-full px-0'
    }
  },
  defaultVariants: {
    block: false
  }
});
export default function Button(props: ButtonProps) {
  const { className, children, block, ...rest } = props;
  return (
    <button className={cn(button({ block, className }))} {...rest}>
      {children}
    </button>
  );
}
