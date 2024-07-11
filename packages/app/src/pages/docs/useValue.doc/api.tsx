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
    type: 'tag: UseValueOptions',
    required: false,
    default: '{}'
  }
];

export const controllerRows: ApiTableRow[] = [
  {
    name: 'play',
    desc: 'function to play animation',
    type: '() => void'
  },
  {
    name: 'pause',
    desc: 'function to pause animation',
    type: '() => void'
  },
  {
    name: 'cancel',
    desc: 'function to cancel animation',
    type: '() => void'
  },
  {
    name: 'resume',
    desc: 'function to resume animation if it paused',
    type: '() => void'
  },
  {
    name: 'isPlaying',
    desc: 'boolean value to check if animation is playing',
    type: 'boolean'
  },
  {
    name: 'isPaused',
    desc: 'boolean value to check if animation is paused',
    type: 'boolean'
  }
];
