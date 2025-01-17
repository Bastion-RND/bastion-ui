import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastRadio: FC<Omit<ComponentProps<'input'>, 'type'>> = ({ className, ...props }) => (
  <input type="radio" className={`${clsx(['bast-radio', className && className])}`} {...props} />
);

export { BastRadio };
