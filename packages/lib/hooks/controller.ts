import type { Animations } from './types';
export function play(animations: Animations, cb?: (...args: any[]) => void) {
  if (animations.every(Boolean)) {
    animations.forEach((animation) => {
      animation!.playbackRate = 1;
      animation!.play();
    });
    allFinish(animations, 'play', cb);
  }
}

export function allFinish(animations: Animations, trigger: 'play' | 'reverse', cb?: (...args: any[]) => void) {
  if (animations.every(Boolean)) {
    Promise.all(animations.map((animation) => animation!.finished)).then(() => {
      cb?.(trigger);
    });
  }
}

export const pause = (animations: (Animation | undefined)[]): CSSNumberish[] => {
  const times = animations.map((animation) => {
    if (animation) {
      animation.pause();
      return animation.currentTime || 0;
    }
    return 0;
  });
  return times;
};

export function cancel(animations: Animations) {
  animations.forEach((animation) => animation?.cancel());
}

export function reverse(animations: Animations, cb?: (...args: any[]) => void) {
  if (animations.every(Boolean)) {
    animations.forEach((animation) => {
      animation!.playbackRate = -1;
      animation!.play();
    });
    allFinish(animations, 'reverse', cb);
  }
}

export const resume = (animations: Animations, times: CSSNumberish[]) => {
  animations.forEach((animation, index) => {
    if (animation) {
      animation.pause();
      animation.currentTime = times[index];
      animation.play();
    }
  });
};
