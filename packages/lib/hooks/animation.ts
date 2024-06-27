import { useRef } from 'react';
import AnimationPreset, { type MotionName } from './animationPreset';
const animationPreset = new AnimationPreset();
import type { AnimationOptions } from './types';
import { checkRef } from './utils';
export function useAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function animate(keyframes: Keyframe[], options?: AnimationOptions): Animation {
    checkRef(ref);
    return ref.current!.animate(keyframes, options);
  }

  function motion(motionName: MotionName, options?: AnimationOptions): Animation {
    return animationPreset[motionName](ref, options);
  }

  return {
    ref,
    animate,
    motion
  };
}
