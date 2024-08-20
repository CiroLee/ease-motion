/**
 * @description advanced use. Manage multiple elements and use independent animations or the same animation parameters
 */
import { useRef, useEffect, useCallback } from 'react';
import * as controller from './controller';
import { getType, combine, checkDuration } from './utils';
import * as presets from './presets';
import type { AnimationOptions, AnimateController, DOMElement, Keyframes, _KeyframeAnimationOptions } from './types';
import type { MotionName } from './useMotion';
interface MultipleConfig<T> {
  ref: React.MutableRefObject<T | null>;
  keyframes?: Keyframes;
  options?: AnimationOptions;
  motion?: MotionName;
}

interface useMultipleProps<T> {
  baseOptions?: AnimationOptions;
  baseKeyframes?: Keyframes;
  baseMotion?: MotionName;
  config: MultipleConfig<T>[];
  onComplete?: (trigger?: 'play' | 'reverse') => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
  onResume?: () => void;
}

function combineOptions(baseOptions?: AnimationOptions, options?: AnimationOptions) {
  if (typeof baseOptions === 'number' && typeof options === 'number') {
    return options;
  }
  if (typeof baseOptions === 'number' && getType(options) === 'object') {
    return {
      duration: baseOptions,
      ...(options as _KeyframeAnimationOptions)
    };
  }
  if (getType(baseOptions) === 'object' && typeof options === 'number') {
    return {
      ...(baseOptions as _KeyframeAnimationOptions),
      duration: options
    };
  }
  if (getType(baseOptions) === 'object' && getType(options) === 'object') {
    return combine(baseOptions, options);
  }

  return baseOptions || options || {};
}

function combineMotion(baseMotion?: MotionName, motion?: MotionName) {
  if (motion) {
    return presets[motion];
  }
  return baseMotion && presets[baseMotion] ? presets[baseMotion] : undefined;
}

function combineKeyframes({
  baseKeyframes,
  keyframes,
  baseMotion,
  motion
}: {
  baseKeyframes?: Keyframes;
  keyframes?: Keyframes;
  baseMotion?: MotionName;
  motion?: MotionName;
}) {
  if (!baseKeyframes && !keyframes) {
    return combineMotion(baseMotion, motion);
  }
  if (getType(baseKeyframes) === getType(keyframes)) {
    return combine(baseKeyframes, keyframes);
  }
  if (baseKeyframes && !keyframes) {
    return baseKeyframes;
  }
  return keyframes;
}
export function useMultiple<T extends DOMElement>(props: useMultipleProps<T>, deps: any[]): AnimateController {
  const { baseKeyframes, baseOptions, baseMotion, config, onStart, onCancel, onComplete, onPause, onResume } = props;
  const animations = useRef<(Animation | undefined)[]>([]);

  useEffect(() => {
    animations.current = config.map(({ ref, keyframes, options, motion }) => {
      const _keyframes = combineKeyframes({ baseKeyframes, keyframes, baseMotion, motion });
      const _options = combineOptions(baseOptions, options);
      checkDuration(_options);
      const animation = ref.current?.animate(_keyframes || [], _options);
      animation?.cancel();
      return animation;
    });

    return () => clear();
  }, deps);

  const clear = () => {
    config.forEach(({ ref }) => {
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
    controller.pause(animations.current);
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
    controller.resume(animations.current);
  }, [onResume]);

  return { play, pause, cancel, reverse, resume };
}
