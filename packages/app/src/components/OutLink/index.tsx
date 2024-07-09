import { IconArrowUpRight } from '@tabler/icons-react';
interface OutLinkProps {
  url: string;
  title?: string;
  children?: React.ReactNode;
}
export default function OutLink(props: OutLinkProps) {
  const { url, title = url, children } = props;
  return (
    <a
      className="rounded-sm p-px text-sm text-blue-500 transition hover:bg-blue-500/15"
      href={url}
      title={title}
      rel="noopener noreferrer"
      target="_blank">
      <span> {children}</span>
      <IconArrowUpRight className="inline-block text-[length:inherit]" size={16} />
    </a>
  );
}
