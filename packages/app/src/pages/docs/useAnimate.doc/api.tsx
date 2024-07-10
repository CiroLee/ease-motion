import OutLink from '@/components/OutLink';
import Tag from '@/ui/Tag';
import type { ApiTableRow } from '@/components/ApiTable';

export const returnRows: ApiTableRow[] = [
  {
    name: 'ref',
    desc: 'ref to the element to animate',
    type: 'tag: React.RefObject<T>'
  },
  {
    name: 'AnimationController',
    desc: (
      <>
        the element interface <Tag size="sm">animate()</Tag> method, it returns the created{' '}
        <Tag size="sm">Animation</Tag> object instance
      </>
    ),
    type: <OutLink url="https://developer.mozilla.org/en-US/docs/Web/API/Element/animate">AnimationController</OutLink>
  }
];
