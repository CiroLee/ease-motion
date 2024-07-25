import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/utils';
import { useMotion } from 'ease-motion';
interface TooltipProps {
  text?: React.ReactNode;
  gap?: number;
  children: React.ReactNode;
  className?: string;
}
const option = {
  duration: 200
};
export default function Tooltip(props: TooltipProps) {
  const { text, gap = 6, children, className } = props;
  const [style, setStyle] = useState({});
  const [visible, setVisible] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [textRef, motion] = useMotion<HTMLDivElement>();
  useEffect(() => {
    if (!childrenRef.current || !textRef.current) return;
    const { top, height, left, width } = childrenRef.current.getBoundingClientRect();
    const { width: tWidth } = textRef.current.getBoundingClientRect();
    setStyle({ top: top + height + gap, left: left + width / 2 - tWidth / 2 });

    motion('fadeIn', option);
  }, [visible]);
  const hide = () => {
    motion('fadeOut', option).onfinish = () => {
      setVisible(false);
    };
  };
  return (
    <div>
      <div onMouseEnter={() => setVisible(true)} onMouseLeave={hide} ref={childrenRef}>
        {children}
      </div>
      {visible ? (
        <div
          ref={textRef}
          style={style}
          className={cn(
            'fixed z-10 overflow-hidden break-words rounded bg-black/80 px-2 py-1 text-sm text-white',
            className
          )}>
          {text}
        </div>
      ) : null}
    </div>
  );
}
