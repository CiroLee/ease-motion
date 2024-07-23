import { useState, useEffect, useRef, useCallback } from 'react';
import { createSpring } from './createSpring';
import type { ValueController } from './types';
interface SpringOptions {
  mass?: number; // affect the inertia of the spring
  stiffness?: number; // higher value makes the spring motion faster and stronger
  damping?: number; // higher values cause the spring to stop faster
  velocity?: number; // initial speed
  autoPlay?: boolean;
}
export function useSpring(from: number, to: number, options: SpringOptions = {}): [number, ValueController] {
  const { mass = 1, stiffness = 100, damping = 10, velocity = 0, autoPlay = true } = options;

  const [value, setValue] = useState<number>(from);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const [duration, solver] = createSpring({
        mass,
        stiffness,
        damping,
        velocity
      });

      let elapsedTime = currentTime - startTimeRef.current;
      if (pausedTimeRef.current) {
        elapsedTime -= pausedTimeRef.current;
      }

      if (elapsedTime < duration) {
        const progress = solver(elapsedTime / duration);
        setValue(from + (to - from) * progress);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setValue(to);
        setIsPlaying(false);
      }
    },
    [from, to, mass, stiffness, damping, velocity]
  );

  const play = useCallback(() => {
    setIsPlaying(true);
    setIsPaused(false);
    startTimeRef.current = null;
    pausedTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const pause = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      setIsPaused(true);
      setIsPlaying(false);
      pausedTimeRef.current = performance.now() - (startTimeRef.current || 0);
    }
  }, []);

  const resume = useCallback(() => {
    if (isPaused) {
      setIsPlaying(true);
      setIsPaused(false);
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isPaused, animate]);

  const cancel = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      setValue(from);
      setIsPlaying(false);
      setIsPaused(false);
      startTimeRef.current = null;
      pausedTimeRef.current = null;
    }
  }, [from]);

  useEffect(() => {
    if (autoPlay) {
      play();
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoPlay, play]);

  const controller: ValueController = {
    play,
    pause,
    resume,
    cancel,
    isPlaying,
    isPaused
  };

  return [value, controller];
}
