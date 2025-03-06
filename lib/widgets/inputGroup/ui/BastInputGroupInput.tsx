import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

import { BastInput } from '../../../entities/input';
import { useInputGroupContext } from '../model/InputGroupContext';

const BastInputGroupInput = forwardRef<HTMLInputElement, ComponentProps<typeof BastInput>>(
  ({ id, className, ...props }, ref) => {
    const context = useInputGroupContext({ withException: false });
    const resolvedId = id || context?.inputGroupId;

    return (
      <BastInput
        ref={ref}
        id={resolvedId}
        className={`${clsx([className && className])}`}
        {...props}
      />
    );
  },
);

export { BastInputGroupInput };
