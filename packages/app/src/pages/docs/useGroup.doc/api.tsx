import type { ApiTableRow } from '@/components/ApiTable';

export const propsRows: ApiTableRow[] = [
  {
    name: 'refs',
    type: 'React.MutableRefObject<T | null>[]',
    desc: 'ref array to the elements to animate',
    required: false,
    default: ''
  },
  {
    name: 'selectors',
    type: 'string[]',
    desc: 'element selectors',
    required: false,
    default: ''
  },
  {
    name: 'keyframes',
    type: 'tag: Keyframe[] | PropertyIndexedKeyframes',
    desc: 'keyframes for the animation',
    required: false,
    default: ''
  },
  {
    name: 'motion',
    type: 'tag: MotionName',
    desc: 'preset motion name',
    required: false,
    default: ''
  },
  {
    name: 'options',
    type: 'SpecialAnimationOptions',
    desc: 'options for the animation',
    required: false,
    default: ''
  },
  {
    name: 'onStart',
    type: '() => void',
    desc: 'callback when the animation starts',
    required: false,
    default: ''
  },
  {
    name: 'onPause',
    type: '() => void',
    desc: 'callback when the animation pauses',
    required: false,
    default: ''
  },
  {
    name: 'onCancel',
    type: '() => void',
    desc: 'callback when the animation cancels',
    required: false,
    default: ''
  },
  {
    name: 'onComplete',
    type: '(trigger: "play" | "reverse") => void',
    desc: 'callback when the animation completes',
    required: false,
    default: ''
  },
  {
    name: 'onResume',
    type: '() => void',
    desc: 'callback when the animation resumes',
    required: false,
    default: ''
  }
];
