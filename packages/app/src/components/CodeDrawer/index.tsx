import { cn } from '@/utils/utils';
import Code from '../Code';
import { forwardRef } from 'react';
interface CodeDrawerProps {
  className?: string;
  code: string;
  lang?: string;
  onHide?: () => void;
}

const CodeDrawer = forwardRef<HTMLDivElement, CodeDrawerProps>((props, ref) => {
  const { code, lang, onHide, className } = props;
  return (
    <div ref={ref} className={cn('scrollbar w-content overflow-auto', className)}>
      <div className="size-[34px] bg-red-500" onClick={onHide}></div>
      <Code className="h-full w-full text-sm [&_pre]:min-w-fit [&_pre]:p-2" code={code} lang={lang} />
    </div>
  );
});

CodeDrawer.displayName = 'CodeDrawer';
export default CodeDrawer;
