import { IconArrowUpRight } from '@tabler/icons-react';
import { cn } from '@/utils/utils';
interface OutLinkProps {
  url: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function OutLink(props: OutLinkProps) {
  const { url, title = url, children, className } = props;
  return (
    <a
      className={cn(
        'inline-flex items-center rounded-sm p-px text-sm text-blue-500 transition hover:bg-blue-500/15',
        className
      )}
      href={url}
      title={title}
      rel="noopener noreferrer"
      target="_blank">
      <span>{children}</span>
      <IconArrowUpRight className="inline-block text-[length:inherit]" size="1em" />
    </a>
  );
}
