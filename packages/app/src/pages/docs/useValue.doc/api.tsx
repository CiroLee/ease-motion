import type { ApiTableRow } from '@/components/ApiTable';

export const propsRows: ApiTableRow[] = [
  {
    name: 'from',
    desc: 'start value',
    type: 'number',
    required: true
  },
  {
    name: 'to',
    desc: 'end value',
    type: 'number',
    required: true
  },
  {
    name: 'options',
    desc: 'useValue hook options',
    type: 'tag: ValueOptions',
    required: false,
    default: '{ duration: 1000, precision: 0, autoPlay: true, easing: "easeOutCubic" }'
  }
];
