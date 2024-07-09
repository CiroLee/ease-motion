/**
 * @description advanced use. manage a group of elements using the same animation parameters
 */
import { useRef, useEffect, useCallback } from 'react';
import * as controller from './controller';
import type { AnimationOptions, AnimateController } from './types';

interface useGroupProps<T extends HTMLElement> {
  refs: React.MutableRefObject<T | null>[];
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
  onComplete?: (trigger?: 'play' | 'reverse') => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
  onResume?: () => void;
}

export function useGroup<T extends HTMLElement>(props: useGroupProps<T>, deps: any[]): AnimateController {
  const { refs, keyframes, options, onComplete, onStart, onPause, onCancel, onResume } = props;
  const animations = useRef<(Animation | undefined)[]>([]);
  const animationTimes = useRef<CSSNumberish[]>([]);

  useEffect(() => {
    animations.current = refs.map((ref) => {
      const animation = ref.current!.animate(keyframes, options);
      animation.cancel();
      return animation;
    });

    return () => clear();
  }, deps);

  const clear = () => {
    refs.forEach((ref) => {
      ref.current?.getAnimations().forEach((animation) => animation.cancel());
    });
  };

  const play = useCallback(() => {
    clear();
    onStart?.();
    controller.play(animations.current, onComplete);
  }, [onStart]);

  const pause = useCallback(() => {
    onPause?.();
    animationTimes.current = controller.pause(animations.current);
  }, []);

  const cancel = useCallback(() => {
    onCancel?.();
    controller.cancel(animations.current);
  }, [onCancel]);

  const reverse = useCallback(() => {
    controller.reverse(animations.current, onComplete);
  }, []);

  const resume = useCallback(() => {
    onResume?.();
    controller.resume(animations.current, animationTimes.current);
  }, [onResume]);

  return { play, pause, cancel, reverse, resume };
}
