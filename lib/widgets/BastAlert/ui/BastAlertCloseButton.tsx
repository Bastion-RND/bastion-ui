import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastButton } from '../../../entities/BastButton';
import { BastIcon } from '../../../entities/BastIcon';

const BastAlertCloseButton: FC<Omit<ComponentProps<typeof BastButton>, 'children'>> = ({
  className,
  ...props
}) => (
  <BastButton
    fill="cleared"
    iconOnly
    {...props}
    className={`${clsx(['alert__close-button alert__close-button--borderless', className && className])}`}
  >
    <BastIcon name="Close" />
  </BastButton>
);

export { BastAlertCloseButton };
