import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type TModalCardHeaderProps = ComponentProps<'header'>;

const ModalCardHeader: FC<TModalCardHeaderProps> = ({ className, ...props }) => (
  <header className={`${clsx(['modal-card__header', className && className])}`} {...props} />
);

export { ModalCardHeader };
