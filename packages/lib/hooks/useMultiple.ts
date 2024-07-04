/**
 * @description advanced use. Manage multiple elements and use independent animations or the same animation parameters
 */
import { useRef, useEffect, useCallback } from 'react';
import * as groupController from './controller';
import { getType, combine } from './utils';
import type { AnimationOptions, AnimateController } from './types';
interface MultipleOptions<T> {
  ref: React.MutableRefObject<T | null>;
  keyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options?: AnimationOptions;
}

interface useMultipleProps<T> {
  baseOptions?: AnimationOptions;
  baseKeyframes?: Keyframe[] | PropertyIndexedKeyframes;
  options: MultipleOptions<T>[];
  onComplete?: (trigger?: 'play' | 'reverse') => void;
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
export function useMultiple<T extends HTMLElement>(props: useMultipleProps<T>, deps: any[]): AnimateController {
  const animations = useRef<(Animation | undefined)[]>([]);
  const { baseKeyframes, baseOptions, options, onStart, onCancel, onComplete, onPause } = props;

  useEffect(() => {
    animations.current = options.map(({ ref, keyframes, options }) => {
      const _keyframes = combineKeyframes(baseKeyframes, keyframes);
      const _options = combineOptions(baseOptions, options);
      const animation = ref.current?.animate(_keyframes || [], _options);
      animation?.cancel();
      return animation;
    });

    return () => clear();
  }, deps);

  const clear = () => {
    options.forEach(({ ref }) => {
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
