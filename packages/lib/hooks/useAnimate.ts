import { useRef } from 'react';
import type { AnimationOptions, AnimationController, DOMElement } from './types';
import { checkRef } from './utils';
export function useAnimate<T extends DOMElement>(): [React.RefObject<T>, AnimationController] {
  const ref = useRef<T>(null);

  function animate(keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: AnimationOptions): Animation {
    checkRef(ref);
    return ref.current!.animate(keyframes, options);
  }

  return [ref, animate];
}
