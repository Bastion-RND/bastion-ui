import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastButton } from '../../../entities/BastButton';
import { BastIcon } from '../../../entities/BastIcon';

const BastModalCloseButton: FC<Omit<ComponentProps<typeof BastButton>, 'children'>> = ({
  className,
  ...props
}) => (
  <BastButton
    fill="cleared"
    iconOnly
    {...props}
    className={`${clsx(['modal__close-button', className && className])}`}
  >
    <BastIcon name='Close'  />
  </BastButton>
);

export { BastModalCloseButton };
