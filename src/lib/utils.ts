import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Joins class names; later Tailwind utilities override earlier ones, so a
 * caller's `className` wins over a component's defaults. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
