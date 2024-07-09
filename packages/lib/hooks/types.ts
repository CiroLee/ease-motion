export type AnimationOptions = number | KeyframeAnimationOptions;
export type Animations = (Animation | undefined)[];
export type AnimationController = (
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: AnimationOptions
) => Animation;
export interface AnimateController {
  play: () => void;
  pause: () => void;
  cancel: () => void;
  reverse: () => void;
  resume: () => void;
}
