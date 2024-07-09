import { useRef, useState } from 'react';
import { cn, copyToClipboard } from '@/utils/utils';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export default function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const handleCopyCode = (code: string) => {
    if (copied) return;
    copyToClipboard(code).then(() => {
      setCopied(true);
      timer.current = setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };
  return (
    <div
      className={cn(
        'group flex size-[32px] cursor-pointer rounded-md transition flex-center hover:bg-white/10',
        className
      )}
      onClick={() => handleCopyCode(text)}>
      {copied ? (
        <IconCheck className="text-white" size={18} />
      ) : (
        <IconCopy size={18} className="text-white/20 transition group-hover:text-white/70" />
      )}
    </div>
  );
}
