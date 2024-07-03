/**
 * @description advanced use. control multi elements to animate Synchronously. support start, pause, cancel, and complete callback
 */
import { useRef, useEffect, useCallback } from 'react';
import type { AnimationOptions } from './types';
import { checkRef } from './utils';

interface UseSyncGroupProps<T extends HTMLElement> {
  refs: React.MutableRefObject<T | null>[];
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
  onComplete?: () => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
}

export function useSyncGroup<T extends HTMLElement>({
  refs,
  keyframes,
  options,
  onComplete,
  onStart,
  onPause,
  onCancel
}: UseSyncGroupProps<T>) {
  const animations = useRef<Animation[]>([]);

  useEffect(() => {
    animations.current = refs.map((ref) => {
      checkRef(ref);
      const animation = ref.current!.animate(keyframes, options);
      animation.pause();
      return animation;
    });

    return () => {
      animations.current.forEach((animation) => animation.cancel());
    };
  }, [refs, keyframes, options]);

  const allFinished = () => {
    Promise.all(animations.current.map((animation) => animation.finished)).then(onComplete);
  };

  const play = useCallback(() => {
    onStart?.();
    animations.current.forEach((animation) => {
      animation.play();
    });
    allFinished();
  }, [onStart]);

  const pause = useCallback(() => {
    onPause?.();
    animations.current.forEach((animation) => animation.pause());
  }, []);

  const cancel = useCallback(() => {
    animations.current.forEach((animation) => animation.cancel());
    onCancel?.();
  }, [onCancel]);

  return { play, pause, cancel };
}
