import { useState, useEffect } from 'react';
import { cn } from '@/utils/utils';
import { cva } from 'class-variance-authority';
import { useMotion } from 'animate-motion';
const loading = cva('z-loading size-full inset-0 bg-white/60 backdrop-blur-sm flex flex-center', {
  variants: {
    fullscreen: {
      true: 'fixed',
      false: 'absolute'
    }
  }
});
interface LoadingProps {
  show?: boolean;
  fullscreen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
const options = {
  duration: 300
};
export default function Loading(props: LoadingProps) {
  const { show = false, fullscreen, className, ...rest } = props;
  const [visible, setVisible] = useState(show);
  const [ref, motion] = useMotion<HTMLDivElement>();

  useEffect(() => {
    if (show) {
      setVisible(true);
      motion('fadeIn', options);
    } else {
      if (ref.current) {
        motion('fadeOut', options).onfinish = () => {
          setVisible(false);
        };
      }
    }
  }, [show]);

  return (
    <>
      {visible || show ? (
        <div ref={ref} className={cn(loading({ fullscreen, className }))} {...rest}>
          <div className="size-[44px] animate-spin rounded-full border-[6px] border-brand/25 border-t-brand"></div>
        </div>
      ) : null}
    </>
  );
}
