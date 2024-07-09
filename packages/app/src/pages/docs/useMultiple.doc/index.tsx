import PageNavigate from '@/components/PageNavigate';

export default function UseMultipleDoc() {
  return (
    <div>
      <div className="my-12 flex">
        <PageNavigate direction="prev" path="/docs/use-group">
          useGroup
        </PageNavigate>
      </div>
    </div>
  );
}
