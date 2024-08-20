export type DOMElement = HTMLElement | SVGElement | MathMLElement;
export type AnimationOptions = number | _KeyframeAnimationOptions;
export type SpecialAnimationOptions = number | SpecialKeyframeAnimationOptions;
export type Keyframes = Keyframe[] | PropertyIndexedKeyframes;
export type Animations = (Animation | undefined)[];
export type AnimationController = (keyframes: Keyframes, options?: AnimationOptions) => Animation;
// duration can not be string
export type _KeyframeAnimationOptions = Omit<KeyframeAnimationOptions, 'duration'> & {
  duration?: number | CSSNumericValue;
};
export interface ValueController extends Omit<AnimateController, 'reverse'> {
  isPlaying: boolean;
  isPaused: boolean;
}
export interface AnimateController {
  play: () => void;
  pause: () => void;
  cancel: () => void;
  reverse: () => void;
  resume: () => void;
}
type SpecialKeyframeAnimationOptions = Omit<_KeyframeAnimationOptions, 'delay' | 'endDelay'> & {
  delay?: number | DelayFunction;
  endDelay?: number | DelayFunction;
};
type DelayFunction = <T extends DOMElement>(el: T, index: number, length: number) => number;
