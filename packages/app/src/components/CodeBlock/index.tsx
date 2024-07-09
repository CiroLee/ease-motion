import { useState } from 'react';
import Code from '../Code';
import CopyButton from '../CopyButton';
import Button from '@/ui/Button';
import { cn } from '@/utils/utils';
interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
  showExpandButton?: boolean;
  highlightLines?: number[];
  highlightRange?: number[][];
}
export default function CodeBlock(props: CodeBlockProps) {
  const { code, lang, highlightLines, highlightRange, showExpandButton = true, className } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={cn(
        'scrollbar relative max-h-[220px] w-full overflow-hidden rounded-md',
        { 'max-h-[unset]': expanded },
        className
      )}>
      <Code
        code={code}
        lang={lang}
        highlightLines={highlightLines}
        highlightRange={highlightRange}
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
