import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastListItem } from '../../../entities/BastList/ui/BastListItem';
import { Icons } from '../../../shared/ui/icons';

const BastDropdownOption: FC<ComponentProps<typeof BastListItem>> = ({
  className,
  children,
  ...props
}) => (
  <BastListItem className={`${clsx(['dropdown__item', className && className])}`} {...props}>
    {children}
    <Icons.Check className='dropdown__item__icon' />
  </BastListItem>
);

export { BastDropdownOption };
