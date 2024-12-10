import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface IBastInput extends ComponentProps<'input'> {}

export const BastInput: FC<IBastInput> = ({ size, className, ...props }) => (
  <input
    className={`bast-input ${clsx({ [`${className}`]: className !== undefined })}`}
    {...props}
  />
);
