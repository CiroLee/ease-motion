import type { ApiTableRow } from '@/components/ApiTable';

export const propsRows: ApiTableRow[] = [
  {
    name: 'baseOptions',
    desc: `the base animate options for all elements's options, it will be combined with element's option. It will be useful when they have some common options, like duration and fill mode`,
    type: 'tag: number | KeyframeAnimationOptions',
    required: false,
    default: ''
  },
  {
    name: 'baseKeyframes',
    desc: `the base keyframes for all elements's keyframes, it will be combined with element's keyframes. It will be useful when they have some common keyframes, like opacity and transform, BUT they must be the same type.`,
    type: 'tag: Keyframe[] | PropertyIndexedKeyframes',
    required: false
  },
  {
    name: 'config',
    desc: `hook config, it contains each element's animation information`,
    type: 'MultipleConfig<T>[]',
    required: true
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
