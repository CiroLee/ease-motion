import type { ApiTableRow } from '@/components/ApiTable';
export const propsRow: ApiTableRow[] = [
  {
    name: 'from',
    desc: 'spring start value',
    type: 'number',
    required: true,
    default: ''
  },
  {
    name: 'to',
    desc: 'spring end value',
    type: 'number',
    required: true,
    default: ''
  },
  {
    name: 'options',
    desc: 'spring options',
    type: 'tag: SpringOptions',
    required: false,
    default: '{ mass: 1, stiffness: 100, damping: 10, velocity: 0, autoPlay: true }'
  }
];
