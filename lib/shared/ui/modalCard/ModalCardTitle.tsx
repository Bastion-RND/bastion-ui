import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const ModalCardTitle: FC<ComponentProps<'h3'>> = ({ children, className, ...props }) => (
  <h3 className={`${clsx(['modal-card__title', className && className])}`} {...props}>{children}</h3>
);

export { ModalCardTitle };
