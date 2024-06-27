import * as React from 'react';
import { AnimationOptions } from './types';
import { checkRef } from './utils';
const fadeKeyframes = [
  {
    opacity: 0
  },
  {
    opacity: 1
  }
];
export default class AnimationPreset {
  public defaultOptions: KeyframeAnimationOptions = {
    duration: 500,
    fill: 'forwards'
  };
  public fadeIn<T extends HTMLElement>(ref: React.RefObject<T>, options: AnimationOptions = this.defaultOptions) {
    checkRef(ref);
    return ref.current!.animate(fadeKeyframes, options);
  }
  public fadeOut<T extends HTMLElement>(ref: React.RefObject<T>, options: AnimationOptions = this.defaultOptions) {
    checkRef(ref);
    const opt = typeof options === 'number' ? { duration: options } : options;
    return ref.current!.animate(fadeKeyframes, {
      ...opt,
      direction: 'reverse'
    });
  }
}

type MethodNames<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

export type MotionName = keyof MethodNames<AnimationPreset>;

const allMethodNames = Object.getOwnPropertyNames(AnimationPreset.prototype);

// 过滤出公共方法名
export const presetMotionNames = allMethodNames.filter((key) => {
  const descriptor = Object.getOwnPropertyDescriptor(AnimationPreset.prototype, key);
  return typeof descriptor?.value === 'function' && key !== 'constructor' && !key.startsWith('_');
});
