import { AnimationOptions, DOMElement, Keyframes } from './types';
import type { MotionName } from './useMotion';
import { checkDuration, combineKeyframeByMotion } from './utils';

interface AnimationProps {
  target: DOMElement;
  keyframes?: Keyframes;
  motion?: MotionName;
  options?: AnimationOptions;
}
/**
 * @description universal animation function, target is DOM element, and it also has access to motion presets
 * @param {AnimationProps} props
 * @returns {Animation}
 */
export function animate(props: AnimationProps): Animation {
  const { target, keyframes, motion, options } = props;
  checkDuration(options);
  const _keyframes = combineKeyframeByMotion(keyframes, motion);
  return target.animate(_keyframes, options);
}
