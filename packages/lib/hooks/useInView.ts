import { useCallback, useEffect, useRef } from 'react';
import { DOMElement } from './types';
type MotionCallback = (target: DOMElement) => void;
interface InViewOptions extends IntersectionObserverInit {
  once?: boolean;
}
interface UseInViewProps<T> {
  selectors?: string[];
  refs?: React.RefObject<T>[];
  enter?: MotionCallback;
  leave?: MotionCallback;
  options?: InViewOptions;
}
interface CreateObserverOptions extends InViewOptions {
  enter?: MotionCallback;
  leave?: MotionCallback;
}

function createObserver(target: DOMElement, options: CreateObserverOptions) {
  const { once = false, enter, leave, ...opt } = options || {};
  let hasTriggered = false;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!hasTriggered) {
        enter?.(target);
        if (once) {
          hasTriggered = true;
          observer.unobserve(target);
        }
      }
    } else {
      if (!once || !hasTriggered) {
        leave?.(target);
      }
    }
  }, opt);

  target && observer.observe(target);
  return observer;
}

export function useInView<T extends DOMElement>(props: UseInViewProps<T>) {
  const { refs, selectors, enter, leave, options } = props;
  const targets = useRef<T[]>();
  const observers = useRef<IntersectionObserver[]>([]);
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
      throw new Error('useInView: selectors or refs is required');
    }

    observers.current = targets.current.map((target) =>
      createObserver(target, {
        ...options,
        enter,
        leave
      })
    );

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, [refs, selectors, enter, leave, options]);
}
