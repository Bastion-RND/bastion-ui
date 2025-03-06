import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastButton } from '../../../entities/button';
import { BastIcon } from '../../../entities/icon';

const BastToastCloseButton: FC<Omit<ComponentProps<typeof BastButton>, 'children'>> = ({
  className,
  ...props
}) => (
  <BastButton
    fill="cleared"
    iconOnly
    {...props}
    className={`${clsx(['toast__close-button', className && className])}`}
  >
    <BastIcon name="Close" />
  </BastButton>
);

export { BastToastCloseButton };
