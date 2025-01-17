import clsx from 'clsx';
import { ComponentProps, FC, forwardRef } from 'react';

import { withLabels } from '../../../shared/ui/hocs';

type TBastRadio = Omit<ComponentProps<'input'>, 'type'>;

const BastRadioWithoutLabel: FC<TBastRadio> = forwardRef<HTMLInputElement, TBastRadio>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={`${clsx(['bast-radio', className && className])}`}
      {...props}
      ref={ref}
    />
  ),
);

const BastRadio = withLabels(BastRadioWithoutLabel);

export { BastRadio };
