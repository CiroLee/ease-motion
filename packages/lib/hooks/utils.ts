export function checkRef(ref: React.RefObject<HTMLElement>) {
  if (!ref.current) {
    throw new Error('ref is not valid');
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
