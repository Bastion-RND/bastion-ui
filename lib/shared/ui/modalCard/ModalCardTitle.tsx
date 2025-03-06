import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

export type TModalCardTitleProps = ComponentProps<'h3'>;

const ModalCardTitle: FC<TModalCardTitleProps> = ({ children, className, ...props }) => (
  <h3 className={`${clsx(['modal-card__title', className && className])}`} {...props}>{children}</h3>
);

export { ModalCardTitle };
