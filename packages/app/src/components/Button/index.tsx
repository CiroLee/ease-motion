import { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { cva } from 'class-variance-authority';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  children?: React.ReactNode;
}

const button = cva('inline-flex flex-center px-3 h-9 bg-brand text-white transition rounded active:opacity-90', {
  variants: {
    block: {
      true: 'w-full px-0 flex'
    }
  },
  defaultVariants: {
    block: false
  }
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, block, ...rest } = props;
  return (
    <button ref={ref} className={cn(button({ block, className }))} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
