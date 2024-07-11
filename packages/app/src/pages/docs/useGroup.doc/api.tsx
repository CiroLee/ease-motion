import Tag from '@/ui/Tag';
import type { ApiTableRow } from '@/components/ApiTable';

export const propsRows: ApiTableRow[] = [
  {
    name: 'refs',
    type: <Tag size="sm">{`React.MutableRefObject<T | null>[]`}</Tag>,
    desc: 'ref array to the elements to animate',
    required: true
  },
  {
    name: 'keyframes',
    type: 'tag: Keyframe[] | PropertyIndexedKeyframes',
    desc: 'keyframes for the animation',
    required: true
  },
  {
    name: 'options',
    type: 'tag: SpecialAnimationOptions',
    desc: 'options for the animation',
    required: false
  },
  {
    name: 'onStart',
    type: 'tag: () => void',
    desc: 'callback when the animation starts',
    required: false
  },
  {
    name: 'onPause',
    type: 'tag: () => void',
    desc: 'callback when the animation pauses',
    required: false
  },
  {
    name: 'onCancel',
    type: 'tag: () => void',
    desc: 'callback when the animation cancels',
    required: false
  },
  {
    name: 'onComplete',
    type: <Tag>{`(trigger: "play" | "reverse") => void`}</Tag>,
    desc: 'callback when the animation completes',
    required: false
  },
  {
    name: 'onResume',
    type: 'tag: () => void',
    desc: 'callback when the animation resumes',
    required: false
  }
];
