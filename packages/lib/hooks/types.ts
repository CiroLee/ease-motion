export type AnimationOptions = number | KeyframeAnimationOptions;
export type Animations = (Animation | undefined)[];
export interface AnimateController {
  play: () => void;
  pause: () => void;
  cancel: () => void;
  reverse: () => void;
}
