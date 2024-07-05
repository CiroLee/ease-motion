import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
export function cn(...classnames: ClassValue[]): string {
  return twMerge(clsx(classnames));
}

export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}
