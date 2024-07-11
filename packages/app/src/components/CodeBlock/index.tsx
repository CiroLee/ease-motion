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
        'scrollbar relative max-h-[220px] w-full overflow-hidden rounded-md',
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
        className="scrollbar overflow-x-auto text-sm [&_pre]:min-w-fit [&_pre]:p-3"
      />
      <CopyButton text={code} className="absolute right-2 top-2" />
      {showExpandButton ? (
        <div className="absolute bottom-0 left-0 flex h-[88px] w-full flex-center">
          <Button size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'collapse' : 'expand'}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
