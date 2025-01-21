import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { Icons } from '../../../shared/ui/icons';
import { BastButton } from '../../BastButton';

const BastModalCloseButton: FC<Omit<ComponentProps<typeof BastButton>, 'children'>> = ({
  className,
  ...props
}) => (
  <BastButton
    fill="cleared"
    iconOnly
    {...props}
    className={`${clsx(['bast-modal__close-button', className && className])}`}
  >
    <Icons.Close />
  </BastButton>
);

export { BastModalCloseButton };
