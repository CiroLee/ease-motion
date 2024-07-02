import { useRef, useEffect, useCallback } from 'react';
import { checkRef, getType, combine } from './utils';
import type { AnimationOptions } from './types';
interface AsyncOptions<T> {
  ref: React.MutableRefObject<T | null>;
  keyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
}

interface UseAsyncGroupProps<T> {
  baseOptions?: AnimationOptions;
  baseKeyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options: AsyncOptions<T>[];
  onComplete?: () => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
}

export function useAsyncGroup<T extends HTMLElement>({
  baseKeyframes,
  baseOptions,
  options,
  onStart,
  onCancel,
  onComplete,
  onPause
}: UseAsyncGroupProps<T>) {
  const animations = useRef<Animation[]>([]);

  useEffect(() => {
    animations.current = options.map(({ ref, keyframes = [], options }) => {
      checkRef(ref);
      let _keyframes = keyframes;
      let _options = baseOptions;
      if (baseKeyframes && getType(baseKeyframes) !== getType(keyframes)) {
        _keyframes = keyframes;
      } else if (baseKeyframes) {
        _keyframes = combine(baseKeyframes, keyframes);
      }

      if (typeof baseOptions === 'number' && typeof options === 'number') {
        _options = options;
      } else if (getType(options) === 'object' && typeof baseOptions === 'number') {
        _options = {
          duration: baseOptions,
          ...(options as KeyframeAnimationOptions)
        };
      } else if (getType(baseOptions) === 'object' && getType(options) === 'object') {
        _options = combine(baseOptions, options);
      }
      const animation = ref.current!.animate(_keyframes, _options);
      console.log(_keyframes, _options);
      animation.pause();
      return animation;
    });
  }, [baseKeyframes, options]);

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
