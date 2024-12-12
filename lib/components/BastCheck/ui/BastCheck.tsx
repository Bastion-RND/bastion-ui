import clsx from 'clsx';
import { ComponentProps, FC, forwardRef } from 'react';

type TBastCheck = Omit<ComponentProps<'input'>, 'type'>;

export const BastCheck: FC<TBastCheck> = forwardRef<HTMLInputElement, TBastCheck>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={`bast-check${clsx([className && ` ${className}`])}`}
      {...props}
    />
  ),
);
