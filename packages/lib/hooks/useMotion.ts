import { useRef } from 'react';
import { checkRef } from './utils';
import type { AnimationOptions, DOMElement } from './types';

// preset class
class MotionPreset {
  public defaultOptions: KeyframeAnimationOptions = {
    duration: 500,
    fill: 'none'
  };
  private _combineOPtions(options: AnimationOptions = {}) {
    if (typeof options === 'number') {
      return {
        ...this.defaultOptions,
        duration: options
      };
    }
    return {
      ...this.defaultOptions,
      ...options
    };
  }
  /**
   * fade effects
   */
  public fadeIn<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        opacity: [0, 1]
      },
      this._combineOPtions(options)
    );
  }
  public fadeInDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 0, transform: 'translateY(-100%)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      this._combineOPtions(options)
    );
  }
  public fadeInUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 0, transform: 'translateY(100%)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      this._combineOPtions(options)
    );
  }

  public fadeInLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' }
      ],
      this._combineOPtions(options)
    );
  }
  public fadeInRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' }
      ],
      this._combineOPtions(options)
    );
  }
  public fadeOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ opacity: [1, 0] }, this._combineOPtions(options));
  }

  public fadeOutDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(100%)' }
      ],
      this._combineOPtions(options)
    );
  }

  public fadeOutUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-100%)' }
      ],
      this._combineOPtions(options)
    );
  }
  public fadeOutLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' }
      ],
      this._combineOPtions(options)
    );
  }
  public fadeOutRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' }
      ],
      this._combineOPtions(options)
    );
  }
  /**
   * slide effects
   */
  public slideInLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateX(-100%)', 'translateX(0)'] }, this._combineOPtions(options));
  }
  public slideInRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateX(100%)', 'translateX(0)'] }, this._combineOPtions(options));
  }
  public slideInUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateY(100%)', 'translateY(0)'] }, this._combineOPtions(options));
  }
  public slideInDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateY(-100%)', 'translateY(0)'] }, this._combineOPtions(options));
  }
  public slideOutLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateX(0)', 'translateX(-100%)'] }, this._combineOPtions(options));
  }
  public slideOutRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateX(0)', 'translateX(100%)'] }, this._combineOPtions(options));
  }
  public slideOutUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateY(0)', 'translateY(-100%)'] }, this._combineOPtions(options));
  }
  public slideOutDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['translateY(0)', 'translateY(100%)'] }, this._combineOPtions(options));
  }
  /**
   * zoom effects
   */
  public zoomIn<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], this._combineOPtions(options));
  }
  public zoomOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], this._combineOPtions(options));
  }
  // special effects
  public flash<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        opacity: [1, 0, 1, 0, 1],
        offset: [0, 0.25, 0.5, 0.75, 1]
      },
      this._combineOPtions(options)
    );
  }
  public pulse<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate({ transform: ['scale(1)', 'scale(1.1)', 'scale(1)'] }, this._combineOPtions(options));
  }

  public heartBeat<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        transform: ['scale(1)', 'scale(1.2)', 'scale(1)', 'scale(1.2)', 'scale(1)'],
        offset: [0, 0.14, 0.28, 0.48, 0.8]
      },
      {
        ...this._combineOPtions(options),
        easing: 'ease-in-out'
      }
    );
  }
  public breath<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        opacity: [1, 0.3, 1]
      },
      this._combineOPtions(options)
    );
  }
  public swing<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    ref.current!.style.cssText += 'transform-origin: top center;';
    return ref.current!.animate(
      {
        transform: ['rotate(0)', 'rotate(12deg)', 'rotate(-8deg)', 'rotate(5deg)', 'rotate(-5deg)', 'rotate(0)'],
        offset: [0, 0.2, 0.4, 0.6, 0.8]
      },
      this._combineOPtions(options)
    );
  }

  public shakeX<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        transform: [
          'translateX(0)',
          'translateX(-10px)',
          'translateX(10px)',
          'translateX(-10px)',
          'translateX(10px)',
          'translateX(-10px)',
          'translateX(10px)',
          'translateX(-10px)',
          'translateX(10px)',
          'translateX(-10px)',
          'translateX(0)'
        ],
        offset: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      },
      this._combineOPtions(options)
    );
  }
  public shakeY<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(
      {
        transform: [
          'translateY(0)',
          'translateY(-8px)',
          'translateY(8px)',
          'translateY(-8px)',
          'translateY(8px)',
          'translateY(-8px)',
          'translateY(8px)',
          'translateY(-8px)',
          'translateY(8px)',
          'translateY(-8px)',
          'translateY(0)'
        ],
        offset: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      },
      this._combineOPtions(options)
    );
  }
}

type MethodNames<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

export type MotionName = keyof MethodNames<MotionPreset>;
const allMethodNames = Object.getOwnPropertyNames(MotionPreset.prototype);

export const presetMotionNames = allMethodNames.filter((key) => {
  const descriptor = Object.getOwnPropertyDescriptor(MotionPreset.prototype, key);
  return typeof descriptor?.value === 'function' && key !== 'constructor' && !key.startsWith('_');
}) as MotionName[];

// hooks
const animationPreset = new MotionPreset();
export function useMotion<T extends DOMElement>(): [
  React.RefObject<T>,
  (name: MotionName, options?: AnimationOptions) => Animation
] {
  const ref = useRef<T>(null);

  function motion(name: MotionName, options?: AnimationOptions): Animation {
    checkRef(ref);
    return animationPreset[name](ref, options);
  }

  return [ref, motion];
}
