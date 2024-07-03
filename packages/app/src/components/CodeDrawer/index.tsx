import { useState, useEffect } from 'react';
import { type AnimationOptions, useMotion } from 'animate-motion';
import { cn } from '@/utils/utils';
import Code from '../Code';

interface CodeDrawerProps {
  show?: boolean;
  code: string;
  lang?: string;
  className?: string;
  onClose?: () => void;
}
const options: AnimationOptions = {
  duration: 200,
  fill: 'forwards'
};
const CodeDrawer = (props: CodeDrawerProps) => {
  const { show, code, lang, className, onClose } = props;
  const [visible, setVisible] = useState(false);
  const { ref: maskRef, motion: maskMotion } = useMotion<HTMLDivElement>();
  const { ref: codeRef, motion: codeMotion } = useMotion<HTMLDivElement>();

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      if (maskRef.current) {
        codeMotion('slideOutDown', options);
        const anim = maskMotion('fadeOut', options);
        anim.onfinish = () => {
          setVisible(false);
        };
      }
    }
  }, [show]);

  useEffect(() => {
    if (maskRef.current && codeRef.current) {
      maskMotion('fadeIn', options);
      codeMotion('slideInUp', options);
    }
  }, [visible]);
  return (
    <>
      {visible ? (
        <div className="fixed inset-0 z-popup size-full">
          <div ref={maskRef} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
          <div ref={codeRef} className={cn('scrollbar relative min-h-[200px] w-full overflow-auto', className)}>
            <Code
              className="size-full text-sm [&_pre]:min-h-[200px] [&_pre]:min-w-fit [&_pre]:p-3"
              code={code}
              lang={lang}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CodeDrawer;
