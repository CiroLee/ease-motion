import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
const divider = cva('bg-[#e7e6e6]', {
  variants: {
    direction: {
      horizontal: 'h-px w-full',
      vertical: 'inline-block w-px h-full'
    }
  },
  defaultVariants: {
    direction: 'horizontal'
  }
});
type DividerVariants = VariantProps<typeof divider>;
interface DividerProps extends DividerVariants {
  className?: string;
  style?: React.CSSProperties;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { direction, className, style } = props;

  return <div ref={ref} className={divider({ direction, class: className })} style={style}></div>;
});

Divider.displayName = 'Divider';
export default Divider;
