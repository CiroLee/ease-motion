import { useRef, useEffect, useCallback } from 'react';
import { checkRef, getType, combine } from './utils';
import type { AnimationOptions, AnimateControls } from './types';
interface GroupOptions<T> {
  ref: React.MutableRefObject<T | null>;
  keyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
}

interface UseGroupProps<T> {
  baseOptions?: AnimationOptions;
  baseKeyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options: GroupOptions<T>[];
  onComplete?: () => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
}

function combineOptions(baseOptions?: AnimationOptions, options?: AnimationOptions) {
  if (typeof baseOptions === 'number' && typeof options === 'number') {
    return options;
  }
  if (typeof baseOptions === 'number' && getType(options) === 'object') {
    return {
      duration: baseOptions,
      ...(options as KeyframeAnimationOptions)
    };
  }
  if (getType(baseOptions) === 'object' && typeof options === 'number') {
    return {
      ...(baseOptions as KeyframeAnimationOptions),
      duration: options
    };
  }
  if (getType(baseOptions) === 'object' && getType(options) === 'object') {
    return combine(baseOptions, options);
  }

  return baseOptions || options || {};
}

function combineKeyframes(
  baseKeyframes?: Keyframe[] | PropertyIndexedKeyframes,
  keyframes?: Keyframe[] | PropertyIndexedKeyframes
) {
  if (!baseKeyframes && !keyframes) {
    return [];
  }
  if (getType(baseKeyframes) === getType(keyframes)) {
    return baseKeyframes;
  }
  return keyframes || [];
}
export function useGroup<T extends HTMLElement>({
  baseKeyframes,
  baseOptions,
  options,
  onStart,
  onCancel,
  onComplete,
  onPause
}: UseGroupProps<T>): AnimateControls {
  const animations = useRef<Animation[]>([]);

  useEffect(() => {
    animations.current = options.map(({ ref, keyframes, options }) => {
      checkRef(ref);
      const _keyframes = combineKeyframes(baseKeyframes, keyframes);
      const _options = combineOptions(baseOptions, options);

      const animation = ref.current!.animate(_keyframes || [], _options);
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
      animation.playbackRate = 1;
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

  const reverse = useCallback(() => {
    animations.current.forEach((animation) => {
      animation.playbackRate = -1;
      animation.play();
    });
    allFinished();
  }, []);

  return { play, pause, cancel, reverse };
}
