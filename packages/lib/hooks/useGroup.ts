/**
 * @description advanced use. manage a group of elements using the same animation parameters
 */
import { useRef, useEffect, useCallback } from 'react';
import * as groupController from './controller';
import type { AnimationOptions } from './types';

interface useGroupProps<T extends HTMLElement> {
  refs: React.MutableRefObject<T | null>[];
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
  onComplete?: (trigger?: 'play' | 'reverse') => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
}

export function useGroup<T extends HTMLElement>(props: useGroupProps<T>, deps: any[]) {
  const { refs, keyframes, options, onComplete, onStart, onPause, onCancel } = props;
  const animations = useRef<(Animation | undefined)[]>([]);

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
    groupController.play(animations.current, onComplete);
  }, [onStart]);

  const pause = useCallback(() => {
    onPause?.();
    groupController.pause(animations.current);
  }, []);

  const cancel = useCallback(() => {
    onCancel?.();
    groupController.cancel(animations.current);
  }, [onCancel]);

  const reverse = useCallback(() => {
    groupController.reverse(animations.current, onComplete);
  }, []);

  return { play, pause, cancel, reverse };
}
