import clsx from 'clsx';
import { ChangeEvent, ComponentPropsWithRef, forwardRef, useCallback, useState } from 'react';

import { debounceFunction } from '../../../shared/lib/debounce';

interface IBastControl extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInput = forwardRef<HTMLInputElement, IBastControl>(
  ({ className, onChange, debounce = 0, ...props }, ref) => {
    const [value, setValue] = useState<string>('');

    const debouncedChangeHandler = useCallback(
      debounceFunction((e: ChangeEvent<HTMLInputElement>) => onChange?.(e), debounce),
      [],
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      debouncedChangeHandler(e);
    };

    return (
      <input
        value={value}
        ref={ref}
        className={`bast-input${clsx([className && ` ${className}`])}`}
        {...props}
        onChange={handleChange}
      />
    );
  },
);

export { BastInput };
