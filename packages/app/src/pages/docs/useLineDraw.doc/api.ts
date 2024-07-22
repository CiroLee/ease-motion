import type { ApiTableRow } from '@/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    name: 'refs',
    type: 'ReactMultipleRef<T | null>[]',
    desc: 'refs of target elements',
    required: false,
    default: ''
  },
  {
    name: 'selectors',
    type: 'string[]',
    desc: 'css selector of target elements',
    required: false,
    default: ''
  },
  {
    name: 'keyframes',
    type: 'tag: Keyframes[]',
    desc: 'keyframes of animation',
    required: false,
    default: ''
  },
  {
    name: 'options',
    type: 'tag: SpecialAnimationOptions',
    desc: 'options of animation',
    required: false,
    default: ''
  },
  {
    name: 'drawType',
    type: 'tag: appear | disappear',
    desc: 'drawing line type',
    required: false,
    default: 'appear'
  },
  {
    name: 'onStart',
    type: '() => void',
    desc: 'callback when the animation starts',
    required: false
  },
  {
    name: 'onPause',
    type: '() => void',
    desc: 'callback when the animation pauses',
    required: false
  },
  {
    name: 'onCancel',
    type: '() => void',
    desc: 'callback when the animation cancels',
    required: false
  },
  {
    name: 'onComplete',
    type: '(trigger: "play" | "reverse") => void',
    desc: 'callback when the animation completes',
    required: false
  },
  {
    name: 'onResume',
    type: '() => void',
    desc: 'callback when the animation resumes',
    required: false
  }
];
