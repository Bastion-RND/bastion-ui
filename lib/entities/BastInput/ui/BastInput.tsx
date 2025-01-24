import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { debounceFunction } from '../../../shared/lib/debounce';

interface IBastControl extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInput = forwardRef<HTMLInputElement, IBastControl>(
  ({ className, onChange, debounce = 0, ...props }, ref) => (
    <input
      ref={ref}
      className={`bast-input${clsx([className && ` ${className}`])}`}
      {...props}
      onChange={onChange ? debounceFunction(onChange, debounce) : onChange}
    />
  ),
);

export { BastInput };
