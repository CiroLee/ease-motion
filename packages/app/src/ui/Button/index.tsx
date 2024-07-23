import { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { cva } from 'class-variance-authority';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  disabled?: boolean;
  size?: 'default' | 'sm' | 'lg';
  children?: React.ReactNode;
}

const button = cva(
  'inline-flex flex-center  bg-brand text-white transition rounded [&:not(:disabled)]:hover:opacity-90 active:bg-brand-600',
  {
    variants: {
      block: {
        true: 'w-full px-0 flex'
      },
      size: {
        default: 'px-3 h-9',
        sm: 'px-2 h-7 text-sm rounded-[3px]',
        lg: 'px-4 h-12 text-lg rounded'
      },
      disabled: {
        true: 'opacity-80 cursor-not-allowed'
      }
    },

    defaultVariants: {
      block: false,
      size: 'default'
    }
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, size, children, block, disabled, ...rest } = props;
  return (
    <button ref={ref} disabled={disabled} className={cn(button({ size, disabled, block, className }))} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
