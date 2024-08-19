import Tag from '@/ui/Tag';
import type { ExampleCard as IExampleCard, ExampleCard } from '@/types';
interface ExampleCardProps extends IExampleCard {}
export default function ExampleCard(props: ExampleCardProps) {
  const { url, id, cover, name, desc, tags } = props;
  return (
    <a href={url} key={id} target="_blank" rel="noreferrer" className="group relative">
      <div
        key={id}
        className="border-brand-500/40 flex h-[280px] flex-col items-center overflow-hidden rounded border bg-zinc-100 transition hover:border-brand">
        <img
          src={cover}
          className="relative top-6 aspect-[4/3] h-[60%] transition duration-200 ease-linear group-hover:scale-105"
        />
        <div className="z-10 flex w-full flex-1 flex-col border-t bg-white p-2">
          <p className="font-semibold">{name}</p>
          <p className="line-clamp-2 text-sm leading-4 text-zinc-400">{desc}</p>
          <div className="absolute bottom-2 space-x-2 space-y-2">
            {tags?.map((item, index) => (
              <Tag key={index} size="sm">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
