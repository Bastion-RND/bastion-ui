import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { debounceFunction } from '../../../shared/lib/debounce';
import { useInputGroupContext } from '../model/InputGroupContext';

interface IBastControl extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInputGroupControl = forwardRef<HTMLInputElement, IBastControl>(
  ({ size, id, debounce = 0, onChange, className, ...props }, ref) => {
    const context = useInputGroupContext({ withException: false });
    const resolvedId = id || context?.inputGroupId;

    return (
      <input
        ref={ref}
        id={resolvedId}
        className={`bast-input${clsx([className && ` ${className}`])}`}
        {...props}
        onChange={onChange ? debounceFunction(onChange, debounce) : onChange}
      />
    );
  },
);

const BastControl = forwardRef<HTMLInputElement, IBastControl>(({ ...props }, ref) => (
  <BastInputGroupControl ref={ref} {...props} />
));

export { BastControl, BastInputGroupControl };
