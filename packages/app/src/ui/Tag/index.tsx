import { forwardRef } from 'react';
import { cn } from '@/utils/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const tag = cva('inline-flex items-center rounded border', {
  variants: {
    size: {
      default: 'min-h-7 px-2',
      sm: 'min-h-6 px-1 text-sm rounded-[3px]',
      lg: 'min-h-8 px-3'
    },
    variant: {
      code: 'bg-gray-100 border-[#cdcdcd] text-[##3e3e3e]',
      default: 'bg-brand/10 border-brand/30 text-brand-800'
    }
  },
  defaultVariants: {
    size: 'default',
    variant: 'default'
  }
});

type TagVariants = VariantProps<typeof tag>;
interface TagProps extends TagVariants, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const { size, className, variant, ...rest } = props;
  return <span ref={ref} className={cn(tag({ size, variant, className }))} {...rest}></span>;
});

Tag.displayName = 'Tag';
export default Tag;
