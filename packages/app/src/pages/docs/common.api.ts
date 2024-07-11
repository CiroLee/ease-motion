import type { ApiTableRow } from '@/components/ApiTable';

export const controllerRows: ApiTableRow[] = [
  {
    name: 'play',
    type: '() => void',
    desc: 'play the animation'
  },
  {
    name: 'pause',
    type: '() => void',
    desc: 'pause the animation'
  },
  {
    name: 'cancel',
    type: '() => void',
    desc: 'cancel the animation'
  },
  {
    name: 'reverse',
    type: '() => void',
    desc: 'reverse the animation'
  },
  {
    name: 'resume',
    type: '() => void',
    desc: 'resume the animation'
  }
];
