import { useState, useEffect, useCallback, useRef } from 'react';
import * as easeAlgorithm from './easingAlgorithm';
import type { ValueController } from './types';

type EaseAlgorithmTypes = keyof typeof easeAlgorithm;

interface ValueOptions {
  duration?: number;
  precision?: number;
  autoPlay?: boolean;
  easing?: EaseAlgorithmTypes;
}

export function useValue(from: number, to: number, options: ValueOptions = {}): [number, ValueController] {
  const { duration = 1000, precision = 0, autoPlay = true, easing = 'easeOutCubic' } = options;

  const [value, setValue] = useState(from);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  const roundToPrecision = useCallback(
    (num: number) => {
      const multiplier = Math.pow(10, precision);
      return Math.round(num * multiplier) / multiplier;
    },
    [precision]
  );

  const animate = useCallback(
    (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime - pausedTimeRef.current;
      }
      const easingFunc = easeAlgorithm[easing];
      const elapsedTime = currentTime - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = from + (to - from) * easingFunc(progress);

      setValue(roundToPrecision(currentValue));

      if (progress < 1 && isPlaying && !isPaused) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else if (progress >= 1) {
        setIsPlaying(false);
      }
    },
    [from, to, duration, easing, roundToPrecision, isPlaying, isPaused]
  );

  useEffect(() => {
    if (isPlaying && !isPaused) {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, isPlaying, isPaused]);

  const control: ValueController = {
    play: () => {
      setIsPlaying(true);
      setIsPaused(false);
      startTimeRef.current = null;
      pausedTimeRef.current = 0;
    },
    cancel: () => {
      setIsPlaying(false);
      setIsPaused(false);
      startTimeRef.current = null;
      pausedTimeRef.current = 0;
      setValue(from);
    },
    pause: () => {
      if (isPlaying && !isPaused) {
        setIsPaused(true);
        pausedTimeRef.current = performance.now() - (startTimeRef.current || 0);
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
        }
      }
    },
    resume: () => {
      if (isPlaying && isPaused) {
        setIsPaused(false);
        startTimeRef.current = null;
      }
    },
    isPlaying,
    isPaused
  };

  return [value, control];
}
