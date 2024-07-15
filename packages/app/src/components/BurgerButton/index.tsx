import { useRef, useState, useEffect } from 'react';
import { cn } from '@/utils/utils';
import { useMultiple } from 'animate-motion';
interface BurgerButtonProps {
  open?: boolean;
  size?: number;
  className?: string;
  onClick?: (open: boolean) => void;
}
export default function BurgerButton(props: BurgerButtonProps) {
  const { size = 24, open = false, className, onClick } = props;
  const [isOpen, setIsOpen] = useState(false);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);

  const handleOnClick = () => {
    if (isOpen) {
      controller.reverse();
    } else {
      controller.play();
    }
    setIsOpen(!isOpen);
    onClick?.(!isOpen);
  };

  const controller = useMultiple(
    {
      baseOptions: {
        duration: 200,
        fill: 'forwards'
      },
      config: [
        {
          ref: path1Ref,
          keyframes: {
            opacity: [1, 0]
          }
        },
        {
          ref: path4Ref,
          keyframes: {
            opacity: [1, 0]
          }
        },
        {
          ref: path2Ref,
          keyframes: {
            transformOrigin: ['center', 'center'],
            transform: ['rotate(45deg)']
          }
        },
        {
          ref: path3Ref,
          keyframes: {
            transformOrigin: ['center', 'center'],
            transform: ['rotate(-45deg)']
          }
        }
      ],
      onComplete: (trigger) => {
        if (trigger === 'reverse') {
          setIsOpen(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    if (!open && isOpen) {
      controller.reverse();
    }
  }, [open]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('block sm:hidden', className)}
      onClick={handleOnClick}>
      <path ref={path1Ref} d="M4 6l16 0" />
      <path ref={path2Ref} d="M4 12l16 0" />
      <path ref={path3Ref} d="M4 12l16 0" />
      <path ref={path4Ref} d="M4 18l16 0" />
    </svg>
  );
}
