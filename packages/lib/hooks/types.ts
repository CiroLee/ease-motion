export type DOMElement = HTMLElement | SVGElement | MathMLElement;
export type AnimationOptions = number | KeyframeAnimationOptions;
export type SpecialAnimationOptions = number | SpecialKeyframeAnimationOptions;
export type Keyframes = Keyframe[] | PropertyIndexedKeyframes;
export type Animations = (Animation | undefined)[];
export type AnimationController = (keyframes: Keyframes, options?: AnimationOptions) => Animation;
export interface AnimateController {
  play: () => void;
  pause: () => void;
  cancel: () => void;
  reverse: () => void;
  resume: () => void;
}
type SpecialKeyframeAnimationOptions = Omit<KeyframeAnimationOptions, 'delay' | 'endDelay'> & {
  delay?: number | DelayFunction;
  endDelay?: number | DelayFunction;
};
type DelayFunction = <T extends DOMElement>(el: T, index: number, length: number) => number;

export interface ValueController extends Omit<AnimateController, 'reverse'> {
  isPlaying: boolean;
  isPaused: boolean;
}
