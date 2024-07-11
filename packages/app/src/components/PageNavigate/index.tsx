import { IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/utils/utils';
import { Link } from 'react-router-dom';
interface PageNavigateProps {
  direction: 'prev' | 'next';
  path: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export default function PageNavigate(props: PageNavigateProps) {
  const { path, className, style, children, direction } = props;
  return (
    <Link
      to={path}
      className={cn(
        'inline-flex items-center gap-2 overflow-hidden transition hover:text-brand',
        { 'flex-row-reverse': direction === 'next' },
        className
      )}
      style={style}>
      {direction === 'next' ? (
        <IconChevronRight size={16} className="mt-[2px]" />
      ) : (
        <IconChevronRight size={18} className="mt-[2px] rotate-180" />
      )}
      <span>{children}</span>
    </Link>
  );
}
