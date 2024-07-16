import Heading from '@/ui/Heading';
import { exampleList } from '@/config';
import ExampleCard from '@/components/ExampleCard';
export default function Examples() {
  return (
    <div className="scrollbar h-full overflow-auto px-[16px] sm:px-[12%]">
      <Heading as="h2" className="my-4">
        Examples
      </Heading>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5">
        {exampleList.map((item) => (
          <ExampleCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
