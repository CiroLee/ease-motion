import { useRef } from 'react';
import AnimationPreset, { type MotionName } from './animationPreset';
const animationPreset = new AnimationPreset();
import type { AnimationOptions } from './types';
export function useAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function animate(keyframes: Keyframe[], options: AnimationOptions) {
    ref.current?.animate(keyframes, options);
  }

  function motion(motionName: MotionName, options?: AnimationOptions) {
    return animationPreset[motionName](ref, options);
  }

  return {
    ref,
    animate,
    motion
  };
}
