import type { ApiTableRow } from '@/components/ApiTable';

export const controllerRows: ApiTableRow[] = [
  {
    name: 'play',
    type: 'tag: () => void',
    desc: 'play the animation'
  },
  {
    name: 'pause',
    type: 'tag: () => void',
    desc: 'pause the animation'
  },
  {
    name: 'cancel',
    type: 'tag: () => void',
    desc: 'cancel the animation'
  },
  {
    name: 'reverse',
    type: 'tag: () => void',
    desc: 'reverse the animation'
  },
  {
    name: 'resume',
    type: 'tag: () => void',
    desc: 'resume the animation'
  }
];
