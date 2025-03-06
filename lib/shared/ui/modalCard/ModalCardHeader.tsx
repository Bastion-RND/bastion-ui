import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const ModalCardHeader: FC<ComponentProps<'header'>> = ({ className, ...props }) => (
  <header className={`${clsx(['modal-card__header', className && className])}`} {...props} />
);

export { ModalCardHeader };
