import { useCallback, useEffect, useRef } from 'react';
import * as controller from './controller';
import { Keyframes, SpecialAnimationOptions, AnimateController } from './types';
import { combineOptions, getType } from './utils';
type DrawType = 'appear' | 'disappear';
interface UseLineDrawProps<T> {
  selectors?: string[];
  refs?: React.MutableRefObject<T | null>[];
  keyframes?: Keyframes;
  drawType?: DrawType;
  options?: SpecialAnimationOptions;
  onComplete?: (trigger?: 'play' | 'reverse') => void;
  onStart?: () => void;
  onPause?: () => void;
  onCancel?: () => void;
  onResume?: () => void;
}

function combineKeyframes(drawType: DrawType, length: number, keyframes?: Keyframes) {
  if (getType(keyframes) === 'object') {
    return {
      ...keyframes,
      strokeDashoffset: drawType === 'appear' ? [length, 0] : [0, length]
    };
  }
  if (Array.isArray(keyframes)) {
    return [
      ...keyframes,
      { strokeDashoffset: drawType === 'appear' ? length : 0 },
      { strokeDashoffset: drawType === 'appear' ? 0 : length }
    ];
  }
  return { strokeDashoffset: drawType === 'appear' ? [length, 0] : [0, length] };
}
export function useLineDraw<T extends SVGGeometryElement>(props: UseLineDrawProps<T>, deps: any[]): AnimateController {
  const {
    selectors = [],
    refs,
    drawType = 'appear',
    keyframes,
    options = 0,
    onComplete,
    onStart,
    onPause,
    onCancel,
    onResume
  } = props;
  const animations = useRef<(Animation | undefined)[]>([]);
  const targets = useRef<T[]>();

  const getTargets = useCallback(() => {
    if (refs) {
      return refs.map((ref) => ref.current as T);
    }
    if (Array.isArray(selectors)) {
      const list: T[] = [];
      selectors.forEach((selector) => {
        list.push(...document.querySelectorAll<T>(selector));
      });
      return list;
    }
  }, [refs, selectors]);

  useEffect(() => {
    targets.current = getTargets();
    if (!targets.current) {
      throw new Error('useGroup: selectors or refs is required');
    }
    animations.current = targets.current!.map((el, index, arr) => {
      const length = el.getTotalLength();
      el.setAttribute('stroke-dasharray', length + ' ' + length);
      const animation = el.animate(
        combineKeyframes(drawType, length, keyframes),
        combineOptions(options, el, index, arr.length)
      );
      animation.cancel();
      return animation;
    });

    return () => clear();
  }, deps);

  const clear = () => {
    targets.current?.forEach((el) => {
      el?.getAnimations().forEach((animation) => animation.cancel());
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
