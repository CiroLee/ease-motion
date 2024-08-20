import { RefObject } from 'react';
import { AnimationOptions, DOMElement, SpecialAnimationOptions } from './types';

export function checkRef(ref: RefObject<DOMElement>) {
  if (!ref.current) {
    throw new Error('ref is not valid');
  }
}
function isCSSNumericValueLessThanZero(value: CSSNumericValue) {
  const zero = CSS.number(0);
  const result = value.sub(zero) as CSSUnitValue;

  return result.value <= 0;
}
/**
 * @explain if duration is set to zero or undefined, if will not trigger animation
 * it may cause some unexpected behavior,so this function will check duration and
 * throw error if duration is less than or equals to zero
 */
export function checkDuration(options?: AnimationOptions | SpecialAnimationOptions) {
  if (typeof options === 'number' && options <= 0) {
    throw new Error('options is a number and must be greater than 0');
  } else if (typeof options === 'object') {
    if (
      [
        typeof options.duration === 'number' && options.duration <= 0,
        options.duration instanceof CSSNumericValue && isCSSNumericValueLessThanZero(options.duration)
      ].some(Boolean)
    ) {
      throw new Error('options.duration must be greater than 0');
    }
  }
}
export function getType(v?: any): string {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
}

type Combine<T> = T extends Array<infer U> ? U[] : T;

export function combine<T, U>(param1: T[], param2: U[]): Combine<T>[];
export function combine<T>(param1: T, param2: T): Combine<T>;

export function combine(...args: any[]): any {
  if (args.length !== 2) {
    throw new Error('Combine function requires exactly two arguments.');
  }
  const [param1, param2] = args;
  if (getType(param1) !== getType(param2)) {
    throw new Error('Both arguments must be of the same type.');
  }
  if (!Array.isArray(param1) && typeof param1 !== 'object') {
    throw new Error('Arguments must be either arrays or objects.');
  }
  if (Array.isArray(param1)) {
    return [...param1, ...param2];
  }
  if (typeof param1 === 'object') {
    return { ...param1, ...param2 };
  }
}

export function combineOptions<T extends DOMElement>(
  options: SpecialAnimationOptions,
  el: T,
  index: number,
  length: number
) {
  checkDuration(options);
  if (typeof options === 'number') {
    return options;
  }
  if (getType(options) === 'object') {
    return {
      ...options,
      delay: typeof options.delay === 'number' ? options.delay : options.delay?.(el, index, length),
      endDelay: typeof options.endDelay === 'number' ? options.endDelay : options.endDelay?.(el, index, length)
    };
  }
}
