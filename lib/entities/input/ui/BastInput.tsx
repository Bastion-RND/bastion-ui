import clsx from 'clsx';
import {
  ChangeEvent,
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { debounceFunction } from '../../../shared/lib';

export interface IBastControl extends ComponentPropsWithRef<'input'> {
  disabled?: boolean;
  debounce?: number;
  isValid?: boolean;
}

const BastInput = forwardRef<HTMLInputElement, IBastControl>(
  ({ className, value, onInput, debounce = 0, isValid, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string>(value?.toString() ?? '');

    const emitInput = useCallback(
      (target: HTMLInputElement) => {
        onInput?.({ target, currentTarget: target } as ChangeEvent<HTMLInputElement>);
      },
      [onInput],
    );

    const debouncedChangeHandler = useCallback(
      debounceFunction((target: HTMLInputElement) => emitInput(target), debounce),
      [debounce, emitInput],
    );

    useEffect(() => () => debouncedChangeHandler.clear(), [debouncedChangeHandler]);

    useEffect(() => {
      setInternalValue(value?.toString() ?? '');
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;

      setInternalValue(target.value);

      if (debounce > 0) {
        debouncedChangeHandler(target);
      } else {
        emitInput(target);
      }
    };

    const cls = clsx([
      'bast-input',
      className && className,
      isValid === true && 'bast-input--valid',
      isValid === false && 'bast-input--invalid'
    ]);

    return (
      <input
        value={internalValue}
        ref={ref}
        className={cls}
        {...props}
        onChange={handleChange}
      />
    );
  },
);

export { BastInput };
