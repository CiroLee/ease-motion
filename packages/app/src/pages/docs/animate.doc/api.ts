import type { ApiTableRow } from '@/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    name: 'target',
    type: 'tag: DOMElement',
    desc: 'target to animate',
    required: true,
    default: ''
  },
  {
    name: 'keyframes',
    type: 'tag: Keyframe[] | PropertyIndexedKeyframes',
    desc: 'keyframes of animation',
    required: false,
    default: ''
  },
  {
    name: 'motion',
    type: 'tag: MotionName',
    desc: 'preset motion name, it has a lower priority than keyframes',
    required: false,
    default: ''
  },
  {
    name: 'options',
    type: 'tag: AnimationOptions',
    desc: 'options of animation',
    required: false,
    default: ''
  }
];
