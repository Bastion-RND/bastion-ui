import clsx from 'clsx';
import { ComponentProps, FC, forwardRef } from 'react';

import type { TBastColor } from '../../../shared/lib';

type TBastSwitch = Omit<ComponentProps<'input'>, 'type'> & {
  color?: Exclude<TBastColor, 'black' | 'white'>;
};

export const BastSwitch: FC<TBastSwitch> = forwardRef<HTMLInputElement, TBastSwitch>(
  ({ className, color = 'brand', ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={`${clsx(['bast-switch', `bast-switch--${color}`, className && ` ${className}`])}`}
      {...props}
    />
  ),
);
