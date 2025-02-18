import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

import { withLabel } from '../../../shared/ui/hocs';

type TBastRadio = Omit<ComponentProps<'input'>, 'type'>;

const BastRadioWithoutLabel = forwardRef<HTMLInputElement, TBastRadio>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={`${clsx(['bast-radio', className && className])}`}
      {...props}
      ref={ref}
    />
  ),
);

const BastRadio = withLabel(BastRadioWithoutLabel);

export { BastRadio };
