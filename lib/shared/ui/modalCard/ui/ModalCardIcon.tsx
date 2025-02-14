import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { TWithBastColor } from '../../../lib';

type TModalCardIconProps = TWithBastColor<ComponentProps<'div'>>;

const ModalCardIcon: FC<TModalCardIconProps> = ({ className, color = 'brand', ...props }) => (
  <div
    className={`${clsx(['modal-card__icon', className && className, `modal-card__icon--${color}`])}`}
    {...props}
  />
);

export { ModalCardIcon };
