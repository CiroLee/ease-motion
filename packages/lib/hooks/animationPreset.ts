import { AnimationOptions } from './types';
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
  private check(ref: React.RefObject<HTMLElement>) {
    if (!ref.current) {
      throw new Error('ref is not valid');
    }
  }
  public fadeIn<T extends HTMLElement>(ref: React.RefObject<T>, options: AnimationOptions = this.defaultOptions) {
    this.check(ref);
    return ref.current!.animate(fadeKeyframes, options);
  }
  public fadeOut<T extends HTMLElement>(ref: React.RefObject<T>, options: AnimationOptions = this.defaultOptions) {
    this.check(ref);
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
