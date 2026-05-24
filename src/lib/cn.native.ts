import { clsx, type ClassValue } from 'clsx';

// NativeWind processes classes at compile time via Babel,
// so tailwind-merge is not needed and can interfere with NativeWind's class parsing.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
