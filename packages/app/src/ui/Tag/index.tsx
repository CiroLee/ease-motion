import { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const tag = cva('inline-flex items-center bg-brand/10 rounded border border-brand/30', {
  variants: {
    size: {
      default: 'h-7 px-2',
      sm: 'h-6 px-1 text-sm',
      lg: 'h-8 px-3'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

type TagVariants = VariantProps<typeof tag>;
interface TagProps extends TagVariants, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const { size, className, ...rest } = props;
  return <div ref={ref} className={cn(tag({ size, className }))} {...rest}></div>;
});

Tag.displayName = 'Tag';
export default Tag;
