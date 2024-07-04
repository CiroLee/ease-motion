import { useState, useEffect, useRef } from 'react';
import { type AnimationOptions, useMultiple } from 'animate-motion';
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
  fill: 'both'
};
const CodeDrawer = (props: CodeDrawerProps) => {
  const { show, code, lang, className, onClose } = props;
  const [visible, setVisible] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  const controller = useMultiple(
    {
      baseOptions: options,
      options: [
        {
          ref: maskRef,
          keyframes: {
            opacity: [0, 1]
          }
        },
        {
          ref: codeRef,
          keyframes: {
            opacity: [0, 1],
            transform: ['scale(0.92)', 'scale(1)']
          }
        }
      ],
      onComplete: (trigger) => {
        console.log(trigger);
        if (trigger === 'reverse') {
          setVisible(false);
          onClose?.();
        }
      }
    },
    [visible]
  );

  const handleOnClose = () => {
    controller.reverse();
  };

  useEffect(() => {
    setVisible(!!show);
    if (visible) {
      controller.play();
    }
  }, [show, visible]);
  return (
    <>
      {visible ? (
        <div className={cn('fixed inset-0 z-popup flex size-full flex-center', className)}>
          <div ref={maskRef} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleOnClose}></div>
          <div
            ref={codeRef}
            className="relative flex min-h-[220px] items-center overflow-hidden rounded-xl bg-white p-5">
            <div className={cn('scrollbar relative min-w-[440px] overflow-auto rounded-lg')}>
              <Code className="size-full text-sm [&_pre]:min-w-fit [&_pre]:p-3" code={code} lang={lang} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CodeDrawer;
