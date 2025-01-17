import clsx from 'clsx';
import { ComponentProps, FC, forwardRef } from 'react';

import { withLabels } from '../../../shared/ui/hocs';

type TBastCheck = Omit<ComponentProps<'input'>, 'type'>;

const BastCheckWithoutLabel: FC<TBastCheck> = forwardRef<HTMLInputElement, TBastCheck>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={`${clsx(['bast-check', className && ` ${className}`])}`}
      {...props}
    />
  ),
);

export const BastCheck = withLabels(BastCheckWithoutLabel);
