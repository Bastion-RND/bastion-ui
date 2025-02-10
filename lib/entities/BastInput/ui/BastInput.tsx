import clsx from 'clsx';
import {
  ChangeEvent,
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { debounceFunction } from '../../../shared/lib/debounce';

interface IBastControl extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInput = forwardRef<HTMLInputElement, IBastControl>(
  ({ className, value, onChange, debounce = 0, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string>(value?.toString() ?? '');

    const debouncedChangeHandler = useCallback(
      debounceFunction((e: ChangeEvent<HTMLInputElement>) => onChange?.(e), debounce),
      [debounce],
    );

    useEffect(() => () => debouncedChangeHandler.clear(), [debouncedChangeHandler]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      debouncedChangeHandler(e);
    };

    return (
      <input
        value={internalValue}
        ref={ref}
        className={`bast-input${clsx([className && ` ${className}`])}`}
        {...props}
        onChange={handleChange}
      />
    );
  },
);

export { BastInput };
