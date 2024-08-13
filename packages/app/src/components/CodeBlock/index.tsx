import { useState, useRef } from 'react';
import Code from '../Code';
import CopyButton from '../CopyButton';
import Button from '@/ui/Button';
import { cn } from '@/utils/utils';
interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
  highlightLines?: number[];
  highlightRange?: number[][];
  diffAddLines?: number[];
  diffRemoveLines?: number[];
}
export default function CodeBlock(props: CodeBlockProps) {
  const { code, lang, highlightLines, highlightRange, diffAddLines, diffRemoveLines, className } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);

  const handleOnCodeRendered = () => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setShowExpandButton(height > 220);
    }
  };
  return (
    <div
      className={cn(
        'relative max-h-[220px] w-full overflow-hidden rounded-md',
        { 'max-h-[unset]': expanded },
        className
      )}>
      <Code
        ref={ref}
        code={code}
        lang={lang}
        rendered={handleOnCodeRendered}
        highlightLines={highlightLines}
        highlightRange={highlightRange}
        diffAddLines={diffAddLines}
        diffRemoveLines={diffRemoveLines}
        className="scrollbar overflow-hidden text-sm [&_pre]:scrollbar [&_pre]:w-full [&_pre]:overflow-auto [&_pre]:p-3 [&_pre_code]:block [&_pre_code]:min-w-fit"
      />
      <CopyButton text={code} className="absolute right-2 top-2" />
      {showExpandButton ? (
        <Button size="sm" className="absolute bottom-5 absolute-center-x" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'collapse' : 'expand'}
        </Button>
      ) : null}
    </div>
  );
}
