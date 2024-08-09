import { useRef } from 'react';
import { checkRef } from './utils';
import * as presets from './presets';
import type { AnimationOptions, DOMElement } from './types';

// preset class
class MotionPreset {
  public defaultOptions: KeyframeAnimationOptions = {
    duration: 500,
    fill: 'forwards'
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
    return ref.current!.animate(presets.fadeIn, this._combineOPtions(options));
  }
  public fadeInDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeInDown, this._combineOPtions(options));
  }
  public fadeInUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeInUp, this._combineOPtions(options));
  }

  public fadeInLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeInLeft, this._combineOPtions(options));
  }
  public fadeInRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeInRight, this._combineOPtions(options));
  }
  public fadeOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeOut, this._combineOPtions(options));
  }
  public fadeOutDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeInDown, this._combineOPtions(options));
  }

  public fadeOutUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeOutUp, this._combineOPtions(options));
  }
  public fadeOutLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeOutLeft, this._combineOPtions(options));
  }
  public fadeOutRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.fadeOutRight, this._combineOPtions(options));
  }
  /**
   * slide effects
   */
  public slideInLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideInLeft, this._combineOPtions(options));
  }
  public slideInRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideInRight, this._combineOPtions(options));
  }
  public slideInUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideInUp, this._combineOPtions(options));
  }
  public slideInDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideInDown, this._combineOPtions(options));
  }
  public slideOutLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideOutLeft, this._combineOPtions(options));
  }
  public slideOutRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideOutRight, this._combineOPtions(options));
  }
  public slideOutUp<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideOutUp, this._combineOPtions(options));
  }
  public slideOutDown<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.slideOutDown, this._combineOPtions(options));
  }
  /**
   * zoom effects
   */
  public zoomIn<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomIn, this._combineOPtions(options));
  }
  public zoomOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomOut, this._combineOPtions(options));
  }
  public zoomFadeIn<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomFadeIn, this._combineOPtions(options));
  }
  public zoomFadeOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomFadeOut, this._combineOPtions(options));
  }
  public zoomOverIn<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomOverIn, this._combineOPtions(options));
  }
  public zoomOverOut<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.zoomOverOut, this._combineOPtions(options));
  }
  /**
   * flip effects
   */
  public flipX<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipX, this._combineOPtions(options));
  }
  public flipY<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipY, this._combineOPtions(options));
  }
  public flipXTop<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipXTop, this._combineOPtions(options));
  }
  public flipXBottom<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipXBottom, this._combineOPtions(options));
  }
  public flipYLeft<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipYLeft, this._combineOPtions(options));
  }
  public flipYRight<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flipYRight, this._combineOPtions(options));
  }
  /**
   * special effects
   */
  public flash<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.flash, this._combineOPtions(options));
  }
  public pulse<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.pulse, this._combineOPtions(options));
  }

  public heartBeat<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.heartBeat, this._combineOPtions(options));
  }
  public breath<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.breath, this._combineOPtions(options));
  }
  public swing<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    ref.current!.style.cssText += 'transform-origin: top center;';
    return ref.current!.animate(presets.swing, this._combineOPtions(options));
  }
  public shakeX<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.shakeX, this._combineOPtions(options));
  }
  public shakeY<T extends DOMElement>(ref: React.RefObject<T>, options?: AnimationOptions) {
    return ref.current!.animate(presets.shakeY, this._combineOPtions(options));
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
