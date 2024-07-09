import type { ApiTableRow } from '@/components/ApiTable';

export const returnRows: ApiTableRow[] = [
  {
    name: 'ref',
    desc: 'ref to the element to animate',
    type: 'tag: React.RefObject<T>'
  },
  {
    name: 'AnimationController',
    desc: 'animation controller',
    type: 'link: animate(https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)'
  }
];
