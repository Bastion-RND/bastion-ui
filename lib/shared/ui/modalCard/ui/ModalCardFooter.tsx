import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const ModalCardFooter: FC<ComponentProps<'div'>> = ({ className, ...props }) => (
  <div className={`${clsx(['modal-card__footer', className && className])}`} {...props} />
);

export { ModalCardFooter };
