import type { ApiTableRow } from '@/components/ApiTable';

export const propsRows: ApiTableRow[] = [
  {
    name: 'refs',
    type: 'React.MutableRefObject<T | null>[]',
    desc: 'ref array to the elements to animate',
    required: false
  },
  {
    name: 'selectors',
    type: 'string[]',
    desc: 'element selectors',
    required: false
  },
  {
    name: 'keyframes',
    type: 'tag: Keyframe[] | PropertyIndexedKeyframes',
    desc: 'keyframes for the animation',
    required: true
  },
  {
    name: 'options',
    type: 'SpecialAnimationOptions',
    desc: 'options for the animation',
    required: false
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
