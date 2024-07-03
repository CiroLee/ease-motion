export type AnimationOptions = number | KeyframeAnimationOptions;
export interface AnimateControls {
  play: () => void;
  pause: () => void;
  cancel: () => void;
  reverse: () => void;
}
