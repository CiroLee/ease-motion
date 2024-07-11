import { PropsWithChildren, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
interface HeadingBase extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}
const heading = cva('', {
  variants: {
    as: {
      h1: 'text-[2.25rem] leading-[1.22]',
      h2: 'text-[2rem] leading-[1.24]',
      h3: 'text-[1.75rem] leading-[1.28]',
      h4: 'text-[1.5rem] leading-[1.34]',
      h5: 'text-[1.25rem] leading-[1.4]',
      h6: 'text-[1rem] leading-[1.5]'
    }
  }
});

export interface HeadingProps extends HeadingBase {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as: Tag, children, className, ...props }, ref) => {
  return (
    <Tag ref={ref} className={heading({ as: Tag, class: className })} {...props}>
      {children}
    </Tag>
  );
});

Heading.displayName = 'Heading';

export default Heading;
