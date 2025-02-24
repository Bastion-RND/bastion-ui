import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: 'bast' | 'skat';
  }
> = ({ logo = 'bast', className, ...props }) => (
  <header className={`${clsx(['header', className && className])}`} {...props} />
);

export { BastHeader };
